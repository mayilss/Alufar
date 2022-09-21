import { getCategories } from "../../api/alufarApi";
import { useQuery } from "react-query";

import { Link } from "react-router-dom";
import { NavItem } from "../NavItem";

import styles from "../../styles/Navbar.module.scss";

import logo from "../../icons/logo.svg";
import mobile from "../../icons/mobile-menu.svg";
import x from "../../icons/x.svg";
import { useRef } from "react";

export const Navbar = () => {
    const menu = useRef();
    const wrapper = useRef();

    const {
        isLoading,
        isError,
        error,
        data: categories,
    } = useQuery("categories", getCategories);

    let content;
    if (isLoading) {
        content = null;
    } else if (isError) {
        content = <p>{error.message}</p>;
    } else {
        content = categories.data.map((item) => {
            return (
                <Link key={item.id} to="/">
                    <NavItem
                        title={item.name}
                        slug={item.slug}
                        image={item.image}
                    />
                </Link>
            );
        });
    }

    const open = () => {
        menu.current.style.right = "0";
        wrapper.current.style.overflow = "visible";
    };
    const close = () => {
        wrapper.current.style.overflow = "hidden";
        menu.current.style.right = "-300px";
    };

    return (
        <nav ref={wrapper} className={styles.wrapper}>
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
                                open();
                            }}
                        >
                            <img src={mobile} alt="menu" />
                        </button>
                        <ul>
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
                        </ul>
                    </div>
                </div>
            </div>
            <div ref={menu} className={styles.mobileMenu}>
                <div className={styles.close}>
                    <button
                        onClick={() => {
                            close();
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
