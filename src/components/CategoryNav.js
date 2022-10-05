import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import { useQuery } from "react-query";
// import { getCategories } from "../api/alufarApi";
import styles from "../styles/CategoryNav.module.scss";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CategoryContext } from "../contexts/CategoryContext";

export const CategoryNav = ({ subSlug }) => {
    const [isActive, setIsActive] = subSlug;
    const [subCategories, setSubCategories] = useState([]);
    const [slug, setSlug] = useState("");
    const { lang } = useContext(LanguageContext);
    const { slugChanged } = useContext(CategoryContext);

    const navHandler = (slug) => {
        setIsActive(slug);
    };

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchSubCategories = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/categories/${slug}?lang=${lang}`,
                { cancelToken: cancelToken.token }
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
    }, [slug, lang]);

    useEffect(() => {
        setSlug(sessionStorage.getItem("categorySlug"));
    }, [slugChanged]);

    // const {
    //     isLoading,
    //     isError,
    //     error,
    //     data: categories,
    // } = useQuery("categories", getCategories);

    let content;
    // if (isLoading) {
    //     content = null;
    // } else if (isError) {
    //     content = <p>{error.message}</p>;
    // } else {
    content = subCategories.map((item) => {
        return (
            <button
                key={item.id}
                onClick={() => {
                    navHandler(item.slug);
                }}
                className={isActive === item.slug ? styles.active : ""}
            >
                {item.name}
            </button>
        );
    });
    // }

    return (
        <div className="container">
            <div className={styles.nav}>
                <button
                    onClick={() => {
                        navHandler("");
                    }}
                    className={isActive === "" ? styles.active : ""}
                >
                    Hamısı
                </button>
                {content}
            </div>
        </div>
    );
};
