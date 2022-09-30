import { AlSysCard } from "./AlSysCard";
import { Title } from "./Title";
import styles from "../styles/HomeAlSys.module.scss";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CategoryContext } from "../contexts/CategoryContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomeAlSys = () => {
    const [subCategories, setSubCategories] = useState([]);
    const { lang } = useContext(LanguageContext);
    const { getInnerPage } = useContext(CategoryContext);
    const navigate = useNavigate();
    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchSubCategories = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/categories/aluminium-systems-1?lang=${lang}`,
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
    }, [lang]);
    return (
        <div className="container my-5">
            <div className={styles.wrapper}>
                <Title content="Alüminium sistemlər" />
                <div className="row py-4 gy-4">
                    {subCategories.map((item) => {
                        return (
                            <div
                                key={item.id}
                                onClick={() => {
                                    getInnerPage(item.slug);
                                    navigate("/category");
                                }}
                                className="col-6 col-md-3"
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
        </div>
    );
};
