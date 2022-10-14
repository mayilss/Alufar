import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import styles from "../styles/HomeProjectsTwo.module.scss";

import arrowLeft from "../icons/arrow-left.svg";
import arrowRight from "../icons/arrow-right.svg";

import { TitleTwo } from "./TitleTwo";
import { Button } from "../components/Button";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { HomeProjectImagesTwo } from "./HomeProjectImagesTwo";
import { useState } from "react";
import { useRef } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

export const HomeProjectsTwo = ({ name }) => {
    const { projects, getDetails } = useContext(ProjectContext);
    const [index, setIndex] = useState(0);

    const targetRef = useRef(null);
    const isVisible = useElementOnScreen(
        {
            root: null,
            rootMargin: "0px",
            treshold: 0.3,
        },
        targetRef
    );

    const createMarkup = (body) => {
        return { __html: body };
    };

    return (
        <div id="projects" className={styles.projects}>
            <div className="container">
                <div className={styles.wrapper}>
                    <TitleTwo
                        visibility={isVisible}
                        selector={targetRef}
                        content="Proyektlər"
                        link="/projects"
                    />
                    <div className={styles.slider}>
                        <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            // data-bs-ride="carousel"
                            data-bs-interval="false"
                        >
                            <div className="carousel-inner">
                                {projects.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className={`carousel-item slide ${
                                                item.id === projects[index].id
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <div className={styles.sliderItem}>
                                                <div className={styles.itemImg}>
                                                    <img
                                                        src={
                                                            process.env
                                                                .REACT_APP_API_URL +
                                                            "/storage/" +
                                                            item.image
                                                        }
                                                        alt="slider"
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        styles.itemContent
                                                    }
                                                >
                                                    <h2>{item.title}</h2>
                                                    <p
                                                        dangerouslySetInnerHTML={createMarkup(
                                                            item.description
                                                        )}
                                                    />
                                                    <div
                                                        className={
                                                            styles.btnHolder
                                                        }
                                                    >
                                                        <Button
                                                            content="Ətraflı"
                                                            click={getDetails}
                                                            args={item.slug}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
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
                    <HomeProjectImagesTwo
                        projects={projects}
                        indexState={{ setIndex }}
                    />
                </div>
            </div>
        </div>
    );
};
