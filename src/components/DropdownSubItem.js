import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const DropdownSubItem = ({ slug }) => {
    const { lang } = useContext(LanguageContext);
    const [subCategories, setSubCategories] = useState([]);
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
                        console.log(err);
                    }
                });
        };
        fetchSubCategories();
        return () => {
            cancelToken.cancel();
        };
    }, [slug, lang]);
    return (
        <>
            {subCategories.map((item) => {
                return <li key={item.id}>{item.name}</li>;
            })}
        </>
    );
};
