import styles from "../../styles/HeaderTop.module.scss";

import phone from "../../icons/phone.svg";
import search from "../../icons/search.svg";
import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export const HeaderTop = () => {
    const { lang, setAz, setEn, setRu } = useContext(LanguageContext);
    const [isOpened, setIsOpened] = useState(false);

    const searchHandler = () => {
        setIsOpened(!isOpened);
    };

    let customer;
    let placeholder;
    if (lang === "az") {
        customer = "Müştəri xidməti: ";
        placeholder = "Axtarış...";
    } else if (lang === "en") {
        customer = "Customer service: ";
        placeholder = "Search...";
    } else {
        customer = "Обслуживание клиентов: ";
        placeholder = "Поиск...";
    }

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.content}>
                    {isOpened ? (
                        <div></div>
                    ) : (
                        <div className={styles.left}>
                            <div className={styles.customer}>
                                <img src={phone} alt="phone" />
                                <p>
                                    {customer}
                                    <span>+994 12 310 39 49</span>
                                </p>
                            </div>
                        </div>
                    )}
                    <div className={styles.right}>
                        <button
                            onClick={() => {
                                searchHandler();
                            }}
                        >
                            <img src={search} alt="search" />
                        </button>
                        {isOpened ? (
                            <input type="text" placeholder={placeholder} />
                        ) : (
                            ""
                        )}
                        <button
                            onClick={() => {
                                setAz();
                            }}
                            className={
                                lang === "az"
                                    ? styles.langActive + " " + styles.lang
                                    : styles.lang
                            }
                        >
                            AZ
                        </button>
                        <button
                            onClick={() => {
                                setEn();
                            }}
                            className={
                                lang === "en"
                                    ? styles.langActive + " " + styles.lang
                                    : styles.lang
                            }
                        >
                            EN
                        </button>
                        <button
                            onClick={() => {
                                setRu();
                            }}
                            className={
                                lang === "ru"
                                    ? styles.langActive + " " + styles.lang
                                    : styles.lang
                            }
                        >
                            RU
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
