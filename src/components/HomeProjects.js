import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import styles from "../styles/HomeProjects.module.scss";

import arrowLeft from "../icons/arrow-left.svg";
import arrowRight from "../icons/arrow-right.svg";

import { Title } from "./Title";
import { Button } from "../components/Button";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { HomeProjectImages } from "./HomeProjectImages";
import { useState } from "react";
import { useRef } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { LanguageContext } from "../contexts/LanguageContext";

export const HomeProjects = () => {
    const { projects, getDetails } = useContext(ProjectContext);
    const { lang } = useContext(LanguageContext);
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

    let title;
    let button;
    if (lang === "az") {
        title = "Proyektlər";
        button = "Ətraflı";
    } else if (lang === "en") {
        title = "Projects";
        button = "More";
    } else {
        title = "Проекты";
        button = "Больше";
    }

    return (
        <div id="projects" className={styles.projects}>
            <div className="container mb-5">
                <div className={styles.wrapper}>
                    <Title
                        visibility={isVisible}
                        selector={targetRef}
                        content={title}
                        link="/projects"
                    />
                    <div className={styles.slider}>
                        <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            data-bs-ride="carousel"
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
                                                    <div>
                                                        <p
                                                            dangerouslySetInnerHTML={createMarkup(
                                                                item.description
                                                            )}
                                                        />
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.btnHolder
                                                        }
                                                    >
                                                        <Button
                                                            content={button}
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
                    <HomeProjectImages
                        projects={projects}
                        indexState={{ setIndex }}
                    />
                </div>
            </div>
        </div>
    );
};
