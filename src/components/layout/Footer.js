import styles from "../../styles/Footer.module.scss";

import logo from "../../icons/logoW.svg";

import fb from "../../icons/fb.svg";
import ig from "../../icons/ig.svg";
import yt from "../../icons/yt.svg";
import ln from "../../icons/ln.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useContext } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";

export const Footer = () => {
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
                        return;
                    }
                });
        };
        fetchSubCategories();
        return () => {
            cancelToken.cancel();
        };
    }, [lang]);
    const [socials, setSocials] = useState({});

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchSocials = async () => {
            await axios(process.env.REACT_APP_API_URL + `/api/social`, {
                cancelToken: cancelToken.token,
            })
                .then((res) => {
                    setSocials(res.data.data);
                })
                .catch((err) => {
                    return;
                });
        };
        fetchSocials();
        return () => {
            cancelToken.cancel();
        };
    }, []);

    let projectTitle;
    let aboutTitle;
    let contactTitle;
    let alSys;
    if (lang === "az") {
        projectTitle = "Proyektlər";
        aboutTitle = "Haqqımızda";
        contactTitle = "Əlaqə";
        alSys = "Alüminium sistemləri";
    } else if (lang === "en") {
        projectTitle = "Projects";
        aboutTitle = "About";
        contactTitle = "Contact";
        alSys = "Aluminium Systems";
    } else {
        projectTitle = "Проекты";
        aboutTitle = "О нас";
        contactTitle = "Контакт";
        alSys = "Алюминиевые системы";
    }

    return (
        <footer className={styles.wrapper}>
            <div className="container">
                <div className="row">
                    <div className={styles.content}>
                        <Link to="/" className={styles.logo}>
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className={styles.inner}>
                            <div className={styles.item}>
                                <a
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate("/");
                                    }}
                                    href="#alsys"
                                >
                                    <h4>{alSys}</h4>
                                </a>
                                <div>
                                    <ul>
                                        {subCategories.map((item) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        getInnerPage(item.slug);
                                                        navigate("/category");
                                                        sessionStorage.setItem(
                                                            "subCategorySlug",
                                                            ""
                                                        );
                                                    }}
                                                >
                                                    {item.name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <h4>
                                    <Link to="/projects">{projectTitle}</Link>
                                </h4>
                            </div>
                            <div className={styles.item}>
                                <h4>
                                    <Link to="/about">{aboutTitle}</Link>
                                </h4>
                            </div>
                            <div className={styles.item}>
                                <h4>
                                    <Link to="/faqs">FAQ</Link>
                                </h4>
                            </div>
                            <div className={styles.item}>
                                <h4>
                                    <Link to="/contact">{contactTitle}</Link>
                                </h4>
                            </div>
                            <div className={styles.socials}>
                                <a target="blank" href={socials.facebook}>
                                    <img src={fb} alt="socials" />
                                </a>
                                <a target="blank" href={socials.instagram}>
                                    <img src={ig} alt="socials" />
                                </a>
                                <a target="blank" href={socials.youtube}>
                                    <img src={yt} alt="socials" />
                                </a>
                                <a target="blank" href={socials.linkedin}>
                                    <img src={ln} alt="socials" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
