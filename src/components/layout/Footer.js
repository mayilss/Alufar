import styles from "../../styles/Footer.module.scss";

import logo from "../../icons/logo-w.svg";

import fb from "../../icons/fb.svg";
import ig from "../../icons/ig.svg";
import yt from "../../icons/yt.svg";
import ln from "../../icons/ln.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className="container">
                <div className="row">
                    <div className={styles.content}>
                        <div className={styles.logo}>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className={styles.inner}>
                            <div className={styles.item}>
                                <h4>Alüminium sistemlər</h4>
                                <div>
                                    <ul>
                                        <li>Memarlıq sistemləri</li>
                                        <li>Mebel sistemləri</li>
                                        <li>Sənaye profilləri</li>
                                        <li>Digər sistemlər</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <h4>İstehsalat</h4>
                            </div>
                            <div className={styles.item}>
                                <h4>
                                    <Link to="/projects">Proyektlər</Link>
                                </h4>
                            </div>
                            <div className={styles.item}>
                                <h4>
                                    <Link to="/about">Haqqımızda</Link>
                                </h4>
                            </div>
                            <div className={styles.item}>
                                <h4>
                                    <Link to="/faqs">FAQ</Link>
                                </h4>
                            </div>
                            <div className={styles.item}>
                                <h4>
                                    <Link to="/contact">Əlaqə</Link>
                                </h4>
                            </div>
                            <div className={styles.socials}>
                                <img src={fb} alt="socials" />
                                <img src={ig} alt="socials" />
                                <img src={yt} alt="socials" />
                                <img src={ln} alt="socials" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
