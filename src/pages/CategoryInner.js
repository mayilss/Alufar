import { Banner } from "../components/Banner";
import { CategoryNav } from "../components/CategoryNav";

import bg from "../images/al-sys-banner.png";
import empty from "../images/empty-rect.png";
import { ProjectCard } from "../components/ProjectCard";
import { SimpleTitle } from "../components/SimpleTitle";
import { AlSysCard } from "../components/AlSysCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const bannerContent = [
    {
        img: bg,
        title: "Memarlıq sistemləri",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, perspiciatis tempora quod tempore cumque aperiam deleniti assumenda voluptatibus maiores omnis sequi!",
    },
    {
        img: bg,
        title: "Mebel sistemləri",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, perspiciatis tempora quod tempore cumque aperiam deleniti assumenda voluptatibus maiores omnis sequi!",
    },
    {
        img: bg,
        title: "Sənaye profilləri",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, perspiciatis tempora quod tempore cumque aperiam deleniti assumenda voluptatibus maiores omnis sequi!",
    },
    {
        img: bg,
        title: "Digər sistemlər",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, perspiciatis tempora quod tempore cumque aperiam deleniti assumenda voluptatibus maiores omnis sequi!",
    },
];

export const CategoryInner = () => {
    const [products, setProducts] = useState([]);
    const [isActive, setIsActive] = useState("");
    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchProducts = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/products?lang=az&${
                        isActive === "" ? "" : "category=" + isActive + "&"
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
    }, [isActive]);
    return (
        <div>
            <Banner
                img={bg}
                title="Memarlıq 
                sistemləri"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, 
                perspiciatis tempora quod tempore cumque aperiam deleniti assumenda 
                voluptatibus maiores omnis sequi!"
            />
            <div className="container">
                <CategoryNav subSlug={[isActive, setIsActive]} />
                <div className="row mt-5">
                    {products.map((item) => {
                        return (
                            <div className="col-md-3 col-sm-6 col-12">
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
                <div className="row py-4">
                    <div className="col-4">
                        <AlSysCard />
                    </div>
                    <div className="col-4">
                        <AlSysCard />
                    </div>
                    <div className="col-4">
                        <AlSysCard />
                    </div>
                </div>
            </div>
        </div>
    );
};
