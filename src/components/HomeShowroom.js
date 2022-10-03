import { useRef } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import styles from "../styles/HomeShowroom.module.scss";

// import empty from "../images/empty.png";

import { Title } from "./Title";

export const HomeShowroom = () => {
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
        <div className="container mt-5 pb-5">
            <div className={styles.wrapper}>
                <Title
                    visibility={isVisible}
                    selector={targetRef}
                    content="Showroom"
                    link="/about"
                />
                <video autoPlay loop muted>
                    <source
                        src={
                            process.env.REACT_APP_API_URL +
                            `/alufar-showroom.mp4`
                        }
                        type="video/mp4"
                    ></source>
                </video>
            </div>
        </div>
    );
};
