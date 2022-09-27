import { Link } from "react-router-dom";
import { NavItem } from "../NavItem";
import axios from "axios";

import styles from "../../styles/Navbar.module.scss";

import logo from "../../icons/logo.svg";
import mobile from "../../icons/mobile-menu.svg";
import x from "../../icons/x.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { CategoryContext } from "../../contexts/CategoryContext";

export const Navbar = () => {
    // const [categories, setCategories] = useState([]);
    const { lang } = useContext(LanguageContext);
    const { categories } = useContext(CategoryContext);
    const [mobileActive, setMobileActive] = useState(false);
    // useEffect(() => {
    //     const cancelToken = axios.CancelToken.source();
    //     const fetchCategories = async () => {
    //         await axios(
    //             process.env.REACT_APP_API_URL + `/api/categories?lang=${lang}`,
    //             { cancelToken: cancelToken.token }
    //         )
    //             .then((res) => {
    //                 setCategories(res.data.data);
    //             })
    //             .catch((err) => {
    //                 if (axios.isCancel(err)) {
    //                     console.log(err);
    //                 }
    //             });
    //     };
    //     fetchCategories();
    //     return () => {
    //         cancelToken.cancel();
    //     };
    // }, [lang]);
    const content = categories.map((item) => {
        return (
            <Link key={item.id} to="/">
                <NavItem title={item.name} slug={item.slug} />
            </Link>
        );
    });

    const toggleMobileNav = () => {
        setMobileActive(!mobileActive);
    };

    let projectTitle;
    let aboutTitle;
    let contactTitle;
    if (lang === "az") {
        projectTitle = "Proyektlər";
        aboutTitle = "Haqqımızda";
        contactTitle = "Əlaqə";
    } else if (lang === "en") {
        projectTitle = "Projects";
        aboutTitle = "About";
        contactTitle = "Contact";
    } else {
        projectTitle = "Проекты";
        aboutTitle = "О нас";
        contactTitle = "Контакт";
    }

    return (
        <nav className={styles.wrapper}>
            <div className="container">
                <div className={styles.content}>
                    <Link to="/">
                        <div className={styles.logo}>
                            <img alt="logo" src={logo} />
                        </div>
                    </Link>
                    <div className={styles.nav}>
                        <button
                            onClick={() => {
                                toggleMobileNav();
                            }}
                        >
                            <img src={mobile} alt="menu" />
                        </button>
                        <ul>
                            {content}
                            <Link to="projects">
                                <NavItem title={projectTitle} />
                            </Link>
                            <Link to="about">
                                <NavItem title={aboutTitle} />
                            </Link>
                            <Link to="faqs">
                                <NavItem title="FAQ" />
                            </Link>
                            <Link to="contact">
                                <NavItem title={contactTitle} />
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={
                    mobileActive
                        ? `${styles.mobileMenuActive} ${styles.mobileMenu}`
                        : styles.mobileMenu
                }
            >
                <div className={styles.close}>
                    <button
                        onClick={() => {
                            toggleMobileNav();
                        }}
                    >
                        <img src={x} alt="close" />
                    </button>
                </div>
                {content}
                <Link to="projects">
                    <NavItem title="Proyektlər" />
                </Link>
                <Link to="about">
                    <NavItem title="Haqqımızda" />
                </Link>
                <Link to="faqs">
                    <NavItem title="FAQ" />
                </Link>
                <Link to="contact">
                    <NavItem title="Əlaqə" />
                </Link>
            </div>
        </nav>
    );
};
