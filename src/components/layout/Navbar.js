import styles from "../../styles/Navbar.module.scss";

import mobile from "../../icons/mobile-menu.svg";
import x from "../../icons/x.svg";
import logo from "../../icons/logo.svg";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

import { LanguageContext } from "../../contexts/LanguageContext";
import { NavItem } from "../NavItem";

export const Navbar = () => {
    const { lang } = useContext(LanguageContext);
    const [mobileActive, setMobileActive] = useState(false);
    const navigate = useNavigate();

    const toggleMobileNav = () => {
        setMobileActive(!mobileActive);
    };

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

    const content = (
        <a
            onClick={(e) => {
                e.stopPropagation();
                if (mobileActive) {
                    return;
                }
                navigate("/");
            }}
            href="#alsys"
        >
            <NavItem title={alSys} slug="aluminium-systems-1" />
        </a>
    );

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
