import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { Button } from "../components/Button";
import { SimpleTitle } from "../components/SimpleTitle";
import { ProjectCard } from "../components/ProjectCard";

import styles from "../styles/Product.module.scss";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ProductContext } from "../contexts/ProductContext";
import { Footer } from "../components/layout/Footer";

export const Product = () => {
    const [similarProducts, setSimilarProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [slug, setSlug] = useState("");
    const [image, setImage] = useState("");

    const { lang } = useContext(LanguageContext);
    const { slugChanged } = useContext(ProductContext);

    useEffect(() => {
        const fetchSimilarProducts = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL +
                        `/api/products/${slug}/similar-products?lang=az&item=4`
                );
                setSimilarProducts(res.data.data.products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSimilarProducts();
    }, [slug]);

    useEffect(() => {
        setSlug(sessionStorage.getItem("productSlug"));
        console.log(sessionStorage.getItem("productSlug"));
        const cancelToken = axios.CancelToken.source();
        const fetchProduct = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/products/${slug}?lang=${lang}`,
                { cancelToken: cancelToken.token }
            )
                .then((res) => {
                    setProduct(res.data.data);
                })
                .catch((err) => {
                    if (axios.isCancel(err)) {
                        return;
                    }
                });
        };
        fetchProduct();
        product.image !== undefined &&
            setImage(product.image.slice(2, product.image.length - 2));
        return () => {
            cancelToken.cancel();
        };
    }, [lang, slug, slugChanged, image, product.image]);

    const createMarkup = (body) => {
        return { __html: body };
    };

    const handleItem = (slug) => {
        setSlug(slug);
    };

    return (
        <main className={styles.page}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className="row">
                        <div className="col-sm-5 col-12">
                            <div className={styles.imgHolder}>
                                <img
                                    src={
                                        process.env.REACT_APP_API_URL +
                                        "/storage/" +
                                        image
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
                                <a
                                    target="blank"
                                    href={
                                        process.env.REACT_APP_API_URL +
                                        "/storage/" +
                                        product.catalog_link
                                    }
                                    className={styles.btnHolder}
                                >
                                    <Button content="Kataloqa bax" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.similar}>
                    <SimpleTitle title="Oxşar məhsullar" />
                    <div className="row">
                        {similarProducts &&
                            similarProducts.map((item) => {
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
            <Footer />
        </main>
    );
};
