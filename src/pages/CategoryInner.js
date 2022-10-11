import { CategoryContext } from "../contexts/CategoryContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { Banner } from "../components/Banner";
import { CategoryNav } from "../components/CategoryNav";
import { AlSysCard } from "../components/AlSysCard";
import { ProjectCard } from "../components/ProjectCard";
import { SimpleTitle } from "../components/SimpleTitle";

import bg from "../images/al-sys-banner.png";
import furniture from "../images/furniture-bg.png";
import industry from "../images/industry-bg.png";
import others from "../images/empty.png";
import { LanguageContext } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { Footer } from "../components/layout/Footer";

const bannerContent = [
    {
        img: bg,
        title: "Memarlıq sistemləri",
        text: "Yüksək izolyasiyalı və sərt iqlimə dayanıqlı fasad sistemləri. Sistemə bütün fasad pəncərələri və qapıları, həmçinin sürmə sistemləri və məhəccərlər daxildir.",
        slug: "architectural-systems-1",
    },
    {
        img: furniture,
        title: "Mebel sistemləri",
        text: "Mebel sistemlərinə bütün növ alüminium profillər, həmçinin fitinqlər və aksesuarlar daxildir.",
        slug: "furniture-systems",
    },
    {
        img: industry,
        title: "Sənaye profilləri",
        text: "Standart alüminium profillər ən çox istifadə edilən profil növləridir. Əsas profil formaları, kvadrat, dəyirmi, içi boş yuvarlaq formaları ilə alüminium profilə ehtiyacı olan bir çox sektorda istifadə olunur.",
        slug: "industry-profiles",
    },
    {
        img: others,
        title: "Digər sistemlər",
        text: "Hər növ hidro, buxar və istilik izolyasiya edən və bərkidici materiallar.",
        slug: "other-systems",
    },
];


export const CategoryInner = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [isActive, setIsActive] = useState("");
    const [subCategories, setSubCategories] = useState([]);

    const { slugChanged, getInnerPage } = useContext(CategoryContext);
    const { lang } = useContext(LanguageContext);
    const { getProductInner } = useContext(ProductContext);

    const navigate = useNavigate();

    useEffect(() => {
        setCategory(sessionStorage.getItem("categorySlug"));
        setIsActive(sessionStorage.getItem("subCategorySlug"));
    }, [slugChanged]);
    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchProducts = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/products?lang=az&${
                        isActive === ""
                            ? "category=" + category + "&"
                            : "category=" + isActive + "&"
                    }item=12`
            )
                .then((res) => {
                    setProducts(res.data.data.products);
                })
                .catch((err) => {
                    return;
                });
        };
        fetchProducts();
        return () => {
            cancelToken.cancel();
        };
    }, [isActive, category, slugChanged]);
    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchSubCategories = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/categories/aluminium-systems-1?lang=${lang}`
            )
                .then((res) => {
                    setSubCategories(res.data.data);
                })
                .catch((err) => {
                    if (axios.isCancel(err)) {
                        return;
                    }
                });
        };
        fetchSubCategories();
        return () => {
            cancelToken.cancel();
        };
    }, [lang]);
    let item;
    let isParent = subCategories.map(item => {
        console.log(item.slug)
        return item.slug
    }).includes(isActive)
    console.log(isParent)
    if (category === "architectural-systems-1" || isParent) {
        item = { ...bannerContent[0] };
    } else if (category === "furniture-systems-1" || isParent) {
        item = { ...bannerContent[1] };
    } else if (category === "industry-profiles-1" || isParent) {
        item = { ...bannerContent[2] };
    } else if (category === "other-systems-1" || isParent) {
        item = { ...bannerContent[3] };
    }

    return (
        <main>
            <Banner item={{ ...item }} />
            <div className="container">
                <CategoryNav subSlug={[isActive, setIsActive]} />
                <div className="row mt-5">
                    {products.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    getProductInner(item.slug);
                                    navigate("/details");
                                }}
                                key={item.id}
                                className="col-md-3 col-sm-6 col-12"
                            >
                                <ProjectCard
                                    img={
                                        process.env.REACT_APP_API_URL +
                                        "/storage/" +
                                        item.image.slice(
                                            2,
                                            item.image.length - 2
                                        )
                                    }
                                    title={item.title}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-5 mb-4">
                    <SimpleTitle title="Digər sistemlər" />
                </div>
                <div className="row py-4 d-flex justify-content-center">
                    {subCategories.map((item) => {
                        if (item.slug === category) {
                            return "";
                        }

                        return (
                            <div
                                onClick={() => {
                                    getInnerPage(item.slug);
                                    sessionStorage.setItem(
                                        "subCategorySlug",
                                        ""
                                    );
                                }}
                                key={item.id}
                                className="col-3"
                            >
                                <AlSysCard
                                    img={
                                        process.env.REACT_APP_API_URL +
                                        "/storage/" +
                                        item.image
                                    }
                                    title={item.name}
                                    description={item.description}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </main>
    );
};
