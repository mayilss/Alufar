import { useRef } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import styles from "../styles/BannerVideo.module.scss";
import { Title } from "./Title";

export const BannerVideo = () => {
    const targetRef = useRef(null);
    const isVisible = useElementOnScreen(
        {
            root: null,
            rootMargin: "0px",
            treshold: 0.3,
        },
        targetRef
    );

    return (
        <div className={styles.wrapper}>
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
                <Title
                    visibility={isVisible}
                    selector={targetRef}
                    content="ALUFAR MMC"
                    legend={true}
                    button={true}
                    isWhite={true}
                />
                <div id="alsys"></div>
            </div>
        </div>
    );
};
