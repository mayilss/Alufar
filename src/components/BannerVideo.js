import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "../styles/BannerVideo.module.scss";
import { Button } from "./Button";

export const BannerVideo = ({ name }) => {
    const { lang } = useContext(LanguageContext);

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
        <div className={styles.wrapper + " " + name}>
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
        </div>
    );
};
