import { useRef } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import styles from "../styles/HomeShowroomTwo.module.scss";

import arrowLeft from "../icons/arrow-left.svg";
import arrowRight from "../icons/arrow-right.svg";

// import empty from "../images/empty.png";

import { TitleTwo } from "./TitleTwo";

export const HomeShowroomTwo = ({ name }) => {
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
            <div className={"container"}>
                <TitleTwo
                    visibility={isVisible}
                    selector={targetRef}
                    content="Video Qalereya"
                    link="/about"
                />
                <div className={styles.slider}>
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div
                                className={`carousel-item slide active`}
                            >
                                <video autoPlay loop muted>
                                    <source
                                        src={
                                            process.env.REACT_APP_API_URL +
                                            `/alufar-showroom-resized.mp4`
                                        }
                                        type="video/mp4"
                                    ></source>
                                </video>
                            </div>
                        </div>
                        <button
                            className={`carousel-control-prev ${styles.prev}`}
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <img src={arrowLeft} alt="arrow-left" />
                            <span className="visually-hidden">
                                Previous
                            </span>
                        </button>
                        <button
                            className={`carousel-control-next ${styles.next}`}
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <img src={arrowRight} alt="arrow-right" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};
