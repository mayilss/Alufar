import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

import { ProjectCard } from "../components/ProjectCard";
import { SimpleTitle } from "../components/SimpleTitle";
import { Footer } from "../components/layout/Footer";
import { LanguageContext } from "../contexts/LanguageContext";

export const Projects = () => {
    const { projects, getDetails } = useContext(ProjectContext);
    const { lang } = useContext(LanguageContext);

    const margin = {
        marginTop: "4rem",
        textAlign: "center",
    };

    let title;
    if (lang === "az") {
        title = "Proyektlər";
    } else if (lang === "en") {
        title = "Projects";
    } else {
        title = "Проекты";
    }

    return (
        <>
            <main className="container" style={{ backgroundColor: "#fff" }}>
                <SimpleTitle style={margin} title={title.toUpperCase()} />
                <div className="row mt-5">
                    {projects.map((item) => {
                        return (
                            <div
                                key={item.id}
                                onClick={() => {
                                    getDetails(item.slug);
                                }}
                                className="col-md-4 col-sm-6 col-12"
                            >
                                <ProjectCard
                                    img={
                                        process.env.REACT_APP_API_URL +
                                        "/storage/" +
                                        item.image
                                    }
                                    title={item.title}
                                />
                            </div>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
};
