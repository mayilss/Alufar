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

const bannerContent = [
    {
        img: bg,
        title: "Memarlıq sistemləri",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, perspiciatis tempora quod tempore cumque aperiam deleniti assumenda voluptatibus maiores omnis sequi!",
        slug: "architectural-systems-1",
    },
    {
        img: furniture,
        title: "Mebel sistemləri",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, perspiciatis tempora quod tempore cumque aperiam deleniti assumenda voluptatibus maiores omnis sequi!",
        slug: "furniture-systems",
    },
    {
        img: industry,
        title: "Sənaye profilləri",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, perspiciatis tempora quod tempore cumque aperiam deleniti assumenda voluptatibus maiores omnis sequi!",
        slug: "industry-profiles",
    },
    {
        img: others,
        title: "Digər sistemlər",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, perspiciatis tempora quod tempore cumque aperiam deleniti assumenda voluptatibus maiores omnis sequi!",
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
    }, [slugChanged]);
    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchProducts = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/products?lang=az&${
                        isActive === ""
                            ? // ? "category=" + category + "&"
                              ""
                            : "category=" + isActive + "&"
                    }item=4`
            )
                .then((res) => {
                    setProducts(res.data.data.products);
                })
                .catch((err) => {
                    if (axios.isCancel(err)) {
                        console.log(err);
                    }
                });
        };
        fetchProducts();
        return () => {
            cancelToken.cancel();
        };
    }, [isActive, category]);
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
                        console.log(err);
                    }
                });
        };
        fetchSubCategories();
        return () => {
            cancelToken.cancel();
        };
    }, [lang]);
    let item;
    if (category === "architectural-systems-1") {
        item = { ...bannerContent[0] };
    } else if (category === "furniture-systems-1") {
        item = { ...bannerContent[1] };
    } else if (category === "industry-profiles-1") {
        item = { ...bannerContent[2] };
    } else if (category === "other-systems-1") {
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
        </main>
    );
};
