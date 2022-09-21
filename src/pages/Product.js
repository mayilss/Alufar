import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { Button } from "../components/Button";
import { SimpleTitle } from "../components/SimpleTitle";
import { ProjectCard } from "../components/ProjectCard";

import styles from "../styles/Product.module.scss";

export const Product = () => {
    const [similarProducts, setSimilarProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [slug, setSlug] = useState("");

    useEffect(() => {
        const fetchSimilarProducts = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL +
                        // `/api/products/product-1/similar-products?lang=az&item=4`
                        process.env.REACT_APP_API_URL +
                        `/api/products/${slug}?lang=az&item=4`
                );
                setSimilarProducts(res.data.data.products);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchProduct = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL +
                        `/api/products/product-1?lang=az`
                );
                setProduct(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
        fetchSimilarProducts();
    }, [slug]);

    const createMarkup = (body) => {
        return { __html: body };
    };

    const handleItem = (slug) => {
        setSlug("/" + slug);
    };

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className="row">
                        <div className="col-sm-5 col-12">
                            <div className={styles.imgHolder}>
                                <img
                                    src={
                                        process.env.REACT_APP_API_URL +
                                        "/storage/" +
                                        product.image
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-sm-7 col-12">
                            <div className={styles.contentHolder}>
                                <SimpleTitle title={product.title} />
                                <div
                                    dangerouslySetInnerHTML={createMarkup(
                                        product.description
                                    )}
                                />
                                <div className={styles.btnHolder}>
                                    <Button content="Kataloqa bax" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.similar}>
                    <SimpleTitle title="Oxşar məhsullar" />
                    <div className="row">
                        {similarProducts.map((item) => {
                            return (
                                <div
                                    onClick={() => {
                                        handleItem(item.slug);
                                    }}
                                    key={item.id}
                                    className="col-md-3 col-6"
                                >
                                    <ProjectCard
                                        img={
                                            process.env.REACT_APP_API_URL +
                                            "/storage/" +
                                            item.image
                                        }
                                        title={item.title}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
