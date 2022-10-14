import { Button } from "./Button";
import styles from "../styles/BannerVideoTwo.module.scss";
import { useRef } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const BannerVideoTwo = ({ name }) => {
    const { lang } = useContext(LanguageContext);

    const banner = useRef();

    const isVisible = useElementOnScreen(
        {
            root: null,
            rootMargin: "0px",
            treshold: 0,
        },
        banner
    );

    const navigateVideo = () => {
        window.open(
            "https://www.youtube.com/watch?v=l4hBNIwT3zM&t=1s",
            "_blank"
        );
    };

    let title;
    let legend;
    let button;

    if (lang === "az") {
        title = "ALUFAR MMC";
        legend = "DOĞRU VƏ ETİBARLI SEÇİM";
        button = "Bax";
    } else if (lang === "en") {
        title = "ALUFAR LLC";
        legend = "CORRECT AND RELIABLE CHOICE";
        button = "Watch";
    } else {
        title = "АЛУФАР ООО";
        legend = "ПРАВИЛЬНЫЙ И НАДЕЖНЫЙ ВЫБОР";
        button = "Смотреть";
    }

    return (
        <div ref={banner} className={styles.wrapper}>
            <a
                href={`https://www.youtube.com/watch?v=l4hBNIwT3zM&t=1s`}
                target="blank"
            >
                <video autoPlay loop muted>
                    <source
                        src={process.env.REACT_APP_API_URL + `/slider-1.mp4`}
                        type="video/mp4"
                    ></source>
                </video>
            </a>
            {isVisible && (
                <div className={styles.content}>
                    <section>
                        <h1>{title}</h1>
                        <div className={styles.legend}>
                            <div className={styles.left}></div>
                            <p>{legend}</p>
                            <div className={styles.right}></div>
                        </div>
                        <div className={styles.btnHolder}>
                            <Button click={navigateVideo} content={button} />
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};
