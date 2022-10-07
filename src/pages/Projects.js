import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

import { ProjectCard } from "../components/ProjectCard";
import { SimpleTitle } from "../components/SimpleTitle";
import { Footer } from "../components/layout/Footer";

export const Projects = () => {
    const { projects, getDetails } = useContext(ProjectContext);

    const margin = {
        marginTop: "15rem",
        textAlign: "center",
    };

    return (
        <>
            <main className="container" style={{ backgroundColor: "#fff" }}>
                <SimpleTitle
                    style={margin}
                    title={"Proyektlər".toUpperCase()}
                />
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
