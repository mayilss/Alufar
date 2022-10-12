import { Button } from "./Button";
import styles from "../styles/BannerVideoTwo.module.scss";
import { useRef } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

export const BannerVideoTwo = ({ name }) => {
    
    const banner = useRef()

    const isVisible = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        treshold: 0,
    },banner)

    const navigateVideo = () => {
        window.open(
            "https://www.youtube.com/watch?v=l4hBNIwT3zM&t=1s",
            "_blank"
        );
    };

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
            {isVisible && (<div className={styles.content}>
                <section>
                    <h1>ALUFAR MMC</h1>
                    <div className={styles.legend}>
                        <div className={styles.left}></div>
                        <p>DOĞRU VƏ ETİBARLI SEÇİM</p>
                        <div className={styles.right}></div>
                    </div>
                    <div className={styles.btnHolder}>
                        <Button click={navigateVideo} content="Bax" />
                    </div>
                </section>
            </div>)}
        </div>
    );
};