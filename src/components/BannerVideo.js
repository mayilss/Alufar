import styles from "../styles/BannerVideo.module.scss";
import { Button } from "./Button";

export const BannerVideo = ({ name }) => {
    const navigateVideo = () => {
        window.open(
            "https://www.youtube.com/watch?v=l4hBNIwT3zM&t=1s",
            "_blank"
        );
    };

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
            </div>
        </div>
    );
};
