import styles from "../styles/About.module.scss";

import empty from "../images/empty.png";
import icon from "../icons/about-icon.svg";

import { SimpleTitle } from "../components/SimpleTitle";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const About = () => {
    const [about, setAbout] = useState({});
    const [delivery, setDelivery] = useState({});

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL + `/api/about?lang=az`
                );
                setAbout(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchDelivery = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL + `/api/delivery?lang=az`
                );
                setDelivery(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAbout();
        fetchDelivery();
    }, []);

    const createMarkup = (body) => {
        return { __html: body };
    };

    return (
        <div className={styles.wrapper}>
            <img src={empty} alt="video" width="100%" />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 col-12">
                        <div className={styles.content}>
                            <SimpleTitle title={about.title} />
                            <div
                                dangerouslySetInnerHTML={createMarkup(
                                    about.body
                                )}
                            />
                        </div>
                    </div>
                    <div className={`col-md-6 col-12 ${styles.contentHolder}`}>
                        {about.image && <img
                            src={
                                process.env.REACT_APP_API_URL +
                                "/storage/" +
                                about.image
                            }
                            alt="about"
                        />}
                    </div>
                    <div className={`col-md-6 col-12 ${styles.contentHolder}`}>
                        {delivery.image && <img
                            src={
                                process.env.REACT_APP_API_URL +
                                "/storage/" +
                                delivery.image
                            }
                            alt="delivery"
                        />}
                    </div>
                    <div className="col-md-6 col-12">
                        <div className={styles.content}>
                            <SimpleTitle title={delivery.title} />
                            <div
                                dangerouslySetInnerHTML={createMarkup(
                                    delivery.body
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <SimpleTitle title="Bizim üstünlüklərimiz" />
                    <div className="row gy-4 pb-5">
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className={styles.bottomItem}>
                                <img src={icon} alt="about" />
                                <h4>Munasib Qiymet</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Iure doloribus repudiandae
                                    asperiores velit mollitia exercitationem
                                    unde distinctio, molestias perferendis quo
                                    ipsum quaerat inventore ad obcaecati ipsa
                                    officiis aliquid rem ullam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className={styles.bottomItem}>
                                <img src={icon} alt="about" />
                                <h4>Munasib Qiymet</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Iure doloribus repudiandae
                                    asperiores velit mollitia exercitationem
                                    unde distinctio, molestias perferendis quo
                                    ipsum quaerat inventore ad obcaecati ipsa
                                    officiis aliquid rem ullam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className={styles.bottomItem}>
                                <img src={icon} alt="about" />
                                <h4>Munasib Qiymet</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Iure doloribus repudiandae
                                    asperiores velit mollitia exercitationem
                                    unde distinctio, molestias perferendis quo
                                    ipsum quaerat inventore ad obcaecati ipsa
                                    officiis aliquid rem ullam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className={styles.bottomItem}>
                                <img src={icon} alt="about" />
                                <h4>Munasib Qiymet</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Iure doloribus repudiandae
                                    asperiores velit mollitia exercitationem
                                    unde distinctio, molestias perferendis quo
                                    ipsum quaerat inventore ad obcaecati ipsa
                                    officiis aliquid rem ullam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
