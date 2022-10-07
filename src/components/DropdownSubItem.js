import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CategoryContext } from "../contexts/CategoryContext";
import { useNavigate } from "react-router-dom";

export const DropdownSubItem = ({ slug }) => {
    const { lang } = useContext(LanguageContext);
    const [subCategories, setSubCategories] = useState([]);
    const { getInnerSub } = useContext(CategoryContext);
    const navigate = useNavigate();
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
    return (
        <>
            {subCategories.map((item) => {
                return (
                    <li
                        onClick={(e) => {
                            e.stopPropagation();
                            getInnerSub(item.slug);
                            navigate("/category");
                        }}
                        key={item.id}
                    >
                        {item.name}
                    </li>
                );
            })}
        </>
    );
};
