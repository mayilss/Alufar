import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCatgories] = useState([]);
    const [slugChanged, setSlugChanged] = useState(false);
    const { lang } = useContext(LanguageContext);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchCategories = async () => {
            await axios(
                process.env.REACT_APP_API_URL + `/api/categories?lang=${lang}`
            )
                .then((res) => {
                    setCatgories(res.data.data);
                })
                .catch((err) => {
                    if (axios.isCancel(err)) {
                        return;
                    }
                });
        };
        fetchCategories();
        return () => {
            cancelToken.cancel();
        };
    }, [lang]);

    const getInnerPage = (slug) => {
        sessionStorage.setItem("categorySlug", slug);
        setSlugChanged(!slugChanged);
    };

    return (
        <CategoryContext.Provider
            value={{ categories, slugChanged, getInnerPage }}
        >
            {children}
        </CategoryContext.Provider>
    );
};
