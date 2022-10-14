import { AlSysCard } from "./AlSysCard";
import { Title } from "./Title";
import styles from "../styles/HomeAlSys.module.scss";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CategoryContext } from "../contexts/CategoryContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

export const HomeAlSys = ({ name }) => {
    const [subCategories, setSubCategories] = useState([]);
    const { lang } = useContext(LanguageContext);
    const { getInnerPage } = useContext(CategoryContext);

    const navigate = useNavigate();

    const targetRef = useRef(null);
    const cardRef = useRef(null);
    const isVisible = useElementOnScreen(
        {
            root: null,
            rootMargin: "0px",
            treshold: 0.3,
        },
        targetRef
    );
    const cardIsVisible = useElementOnScreen(
        {
            root: null,
            rootMargin: "0px",
            treshold: 0.3,
        },
        cardRef
    );
    let title;
    if (lang === "az") {
        title = "Alüminium sistemləri";
    } else if (lang === "en") {
        title = "Aluminium Systems";
    } else {
        title = "Алюминиевые системы";
    }

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
                        return;
                    }
                });
        };
        fetchSubCategories();
        return () => {
            cancelToken.cancel();
        };
    }, [lang]);

    return (
        <div className={name + " container"}>
            <div id="alsys"></div>
            <div className={styles.wrapper}>
                <Title
                    visibility={isVisible}
                    selector={targetRef}
                    link="/category"
                    content={title}
                />
                <div className="row py-5 gy-4">
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
                                    pName={styles.textAnimation}
                                    hName={styles.textAnimationFirst}
                                    visibility={cardIsVisible}
                                    selector={cardRef}
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
            <div id="projects-top" className={styles.loc}></div>
        </div>
    );
};
