import styles from "../../styles/Footer.module.scss";

import logo from "../../icons/logo-w.svg";

import fb from "../../icons/fb.svg";
import ig from "../../icons/ig.svg";
import yt from "../../icons/yt.svg";
import ln from "../../icons/ln.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// import { LanguageContext } from "../../contexts/LanguageContext";
// import { useContext } from "react";

const Footer = () => {
    // const [subCategories, setSubCategories] = useState([]);
    // const { lang } = useContext(LanguageContext);

    // useEffect(() => {
    //     const cancelToken = axios.CancelToken.source();
    //     const fetchSubCategories = async () => {
    //         await axios(
    //             process.env.REACT_APP_API_URL +
    //                 `/api/categories/aluminium-systems-1?lang=${lang}`,
    //             { cancelToken: cancelToken.token }
    //         )
    //             .then((res) => {
    //                 setSubCategories(res.data.data);
    //             })
    //             .catch((err) => {
    //                 if (axios.isCancel(err)) {
    //                     return
    //                 }
    //             });
    //     };
    //     fetchSubCategories();
    //     return () => {
    //         cancelToken.cancel();
    //     };
    // }, [lang]);
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

export default Footer;
