import styles from "../../styles/HeaderTop.module.scss";

import phone from "../../icons/phone.svg";
import search from "../../icons/search.svg";
import { useState } from "react";

export const HeaderTop = () => {
    const [isOpened, setIsOpened] = useState(false);

    const searchHandler = () => {
        setIsOpened(!isOpened);
    };

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
                                    Müştəri xidməti:{" "}
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
                            <input type="text" placeholder="Axtarış..." />
                        ) : (
                            ""
                        )}
                        <p className={styles.lang}>AZ</p>
                        <p className={styles.lang}>EN</p>
                        <p className={styles.lang}>RU</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
