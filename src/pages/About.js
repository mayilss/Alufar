import styles from "../styles/About.module.scss";

import icon1 from "../icons/about-icon1.svg";
import icon2 from "../icons/about-icon2.svg";
import icon3 from "../icons/about-icon3.svg";
import icon4 from "../icons/about-icon4.svg";
import empty from "../images/empty.png";

import { SimpleTitle } from "../components/SimpleTitle";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { AboutCard } from "../components/AboutCard";

const bottomContent = [
    {
        icon: icon1,
        title: "Munasib Qiymet",
        text: "Şirkətimiz münasib qiymətə Sizə yüksək keyfiyyətli məhsul və servis təqdim edir.",
    },
    {
        icon: icon2,
        title: "Yüksək keyfiyyət",
        text: "Biz məhsulumuzun keyfiyyətinə zamin dururuq. “Alufar” şirkətinin profilləri heç bir qatışıq olmadan (təxminən 98%), tərkibində az miqdarda dəmir olmaqla, təmiz alüminiumdan hazırlanmışdır.",
    },
    {
        icon: icon3,
        title: "Texniki dəstək",
        text: "Şirkətimiz öz alıcılarını mükəmməl texniki müşayiətlə təmin edir, habelə profillərin yığılması zamanı öz mütəxəssislərinin yardımını təklif edir.",
    },
    {
        icon: icon4,
        title: "Məhsulun Yoxlanışı",
        text: "“Alufar” şirkətinin mebel aksessuarları istehsal keyfiyyətinin üzə çıxarılması və daha da yaxşılaşdırılması üçün dəfələrlə testdən keçir.",
    },
];

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
        <main className={styles.wrapper}>
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
                        {about.image && (
                            <img
                                src={
                                    process.env.REACT_APP_API_URL +
                                    "/storage/" +
                                    about.image
                                }
                                alt="about"
                            />
                        )}
                    </div>
                    <div
                        className={`order-2 order-md-1 col-md-6 col-12 ${styles.contentHolder}`}
                    >
                        {delivery.image && (
                            <img
                                src={
                                    process.env.REACT_APP_API_URL +
                                    "/storage/" +
                                    delivery.image
                                }
                                alt="delivery"
                            />
                        )}
                    </div>
                    <div className="order-1 order-md-2 col-md-6 col-12">
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
                        {bottomContent.map((item) => {
                            return (
                                <div
                                    key={item.title}
                                    className={
                                        bottomContent[0].title === item.title
                                            ? "col-md-3 col-6 mt-5"
                                            : "col-md-3 col-6"
                                    }
                                >
                                    <AboutCard
                                        icon={item.icon}
                                        title={item.title}
                                        text={item.text}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};
