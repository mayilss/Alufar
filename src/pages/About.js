import styles from "../styles/About.module.scss";

import icon1 from "../icons/about-icon1.svg";
import icon2 from "../icons/about-icon2.svg";
import icon3 from "../icons/about-icon3.svg";
import icon4 from "../icons/about-icon4.svg";

import { SimpleTitle } from "../components/SimpleTitle";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { AboutCard } from "../components/AboutCard";
import { Footer } from "../components/layout/Footer";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const About = () => {
    const [about, setAbout] = useState({});
    const [delivery, setDelivery] = useState({});
    const { lang } = useContext(LanguageContext);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL + `/api/about?lang=${lang}`
                );
                setAbout(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchDelivery = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL + `/api/delivery?lang=${lang}`
                );
                setDelivery(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAbout();
        fetchDelivery();
    }, [lang]);

    const createMarkup = (body) => {
        return { __html: body };
    };

    let bottomContent;
    let bottomTitle;
    if (lang === "az") {
        bottomTitle = "Bizim üstünlüklərimiz";
        bottomContent = [
            {
                icon: icon1,
                title: "Münasib Qiymət",
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
    } else if (lang === "en") {
        bottomTitle = "Our advantages";
        bottomContent = [
            {
                icon: icon1,
                title: "Reasonable price",
                text: "Our company offers you high-quality products and services at reasonable prices.",
            },
            {
                icon: icon2,
                title: "High quality",
                text: "We guarantee the quality of our product. 'Alufar' profiles are made of pure aluminum without any additives (about 98%), with a small amount of iron.",
            },
            {
                icon: icon3,
                title: "Technical support",
                text: "Our company provides its buyers with excellent technical support, as well as offers the help of its specialists during the assembly of profiles.",
            },
            {
                icon: icon4,
                title: "Product Inspection",
                text: "Furniture accessories of 'Alufar' company are repeatedly tested to reveal and further improve the production quality.",
            },
        ];
    } else {
        bottomTitle = "Наши преимущества";
        bottomContent = [
            {
                icon: icon1,
                title: "Разумная цена",
                text: "Наша компания предлагает Вам качественные товары и услуги по разумным ценам.",
            },
            {
                icon: icon2,
                title: "Высокого качества",
                text: "Мы гарантируем качество нашего продукта. Профили «Алуфар» изготавливаются из чистого алюминия без каких-либо добавок (около 98%), с небольшим количеством железа.",
            },
            {
                icon: icon3,
                title: "Техническая поддержка",
                text: "Наша компания обеспечивает своим покупателям отличную техническую поддержку, а также предлагает помощь своих специалистов при сборке профилей.",
            },
            {
                icon: icon4,
                title: "Проверка продукта",
                text: "Мебельная фурнитура компании «Алуфар» многократно тестируется для выявления и дальнейшего повышения качества продукции.",
            },
        ];
    }

    return (
        <main className={styles.wrapper}>
            <video autoPlay loop muted width="100%">
                <source
                    src={process.env.REACT_APP_API_URL + `/alufar-showroom.mp4`}
                    type="video/mp4"
                ></source>
            </video>
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
                    <SimpleTitle title={bottomTitle} />
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
            <Footer />
        </main>
    );
};
