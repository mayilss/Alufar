import "../styles/ProjectDetails.scss";

import Masonry from "react-masonry-css";

import { Button } from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import scroll from "../icons/arrow-left.svg";
import { Footer } from "../components/layout/Footer";
import { LanguageContext } from "../contexts/LanguageContext";

export const ProjectDetails = () => {
    const [project, setProject] = useState({});
    const [gallery, setGallery] = useState([]);
    const [slugState, setSlugState] = useState("");
    const { slugChanged, handleNextProject, handlePrevProject } = useContext(ProjectContext);
    const {lang} = useContext(LanguageContext);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchProject = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                `/api/projects${slugState}?lang=${lang}`
            )
                .then((res) => {
                    setProject(res.data.data);
                    const arr = project.gallery;
                    const sliced = arr.slice(1, arr.length - 1);
                    const splitted = sliced.split(",");
                    const mapped = splitted.map((el, index) => {
                        const slicedEl = el.slice(1, el.length - 1);
                        return (
                            <img
                                key={index}
                                width={"100%"}
                                alt="gallery"
                                src={
                                    process.env.REACT_APP_API_URL +
                                    "/storage/" +
                                    slicedEl
                                }
                                loading="lazy"
                            />
                        );
                    });
                    setGallery(mapped);
                })
                .catch((err) => {
                    if (axios.isCancel(err)) {
                        return;
                    }
                });
        };

        fetchProject();
        return () => {
            cancelToken.cancel();
        };
    }, [slugChanged, slugState, project.gallery, gallery.length, lang]);
    useEffect(() => {
        setSlugState("/" + sessionStorage.getItem("slug"));
    }, [slugChanged]);

    const createMarkup = (body) => {
        return { __html: body };
    };

    let next;
    let prev;

    if (lang === "az") {
        next = "Sonraki";
        prev = 'Əvvəlki'
    } else if (lang === "en") {
        next = "Next";
        prev = 'Previous'
    } else {
        next = "Следующий";
        prev = 'Предыдущий'
    }

    return (
        <>
            <main className="pd-wrapper">
                <div id="pd-banner"></div>
                <div className="pd-banner">
                    <img
                        src={
                            process.env.REACT_APP_API_URL +
                            "/storage/" +
                            project.image
                        }
                        alt="pd banner"
                    />
                    <div className="pd-contentWrapper">
                        <div className="pd-content">
                            <h2>{project.title}</h2>
                            <div className="pd-text">
                                <p
                                    dangerouslySetInnerHTML={createMarkup(
                                        project.description
                                    )}
                                />
                                <p>{project.project_date}</p>
                            </div>
                        </div>
                        <div className="pd-btnHolder">
                            <Button
                                content={prev}
                                click={handlePrevProject}
                            />
                            <Button
                                content={next}
                                click={handleNextProject}
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
                    {project.gallery !== "[]" ? (
                        <Masonry
                            breakpointCols={2}
                            className="my-masonry-grid my-4"
                            columnClassName="my-masonry-grid_column"
                        >
                            {gallery}
                        </Masonry>
                    ) : null}
                </div>
                <a className="scrollTop" href="#pd-banner">
                    <img src={scroll} alt="scroll" />
                </a>
            </main>
            <Footer />
        </>
    );
};
