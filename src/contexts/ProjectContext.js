import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [slugChanged, setSlugChanged] = useState(false);
    const {lang} = useContext(LanguageContext);

    const navigate = useNavigate();

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchProjects = async () => {
            await axios(process.env.REACT_APP_API_URL + `/api/projects?lang=${lang}`)
                .then((res) => {
                    setProjects(res.data.data);
                })
                .catch((err) => {
                    if (axios.isCancel(err)) {
                        return;
                    }
                });
        };
        fetchProjects();
        return () => {
            cancelToken.cancel();
        };
    }, [lang]);
    const getDetails = (slug) => {
        sessionStorage.setItem("slug", slug);
        navigate("/projectdetails");
    };

    const handleNextProject = () => {
        const slugs = projects.map((item) => {
            return item.slug;
        });
        let current = sessionStorage.getItem("slug");
        let i = slugs.indexOf(current);
        if (i < slugs.length - 1) {
            sessionStorage.setItem("slug", slugs[i + 1]);
        } else {
            sessionStorage.setItem("slug", slugs[0]);
        }
        setSlugChanged(!slugChanged);
    };

    const handlePrevProject = () => {
        const slugs = projects.map((item) => {
            return item.slug;
        });
        let current = sessionStorage.getItem("slug");
        let i = slugs.indexOf(current);
        if (i > 0) {
            sessionStorage.setItem("slug", slugs[i - 1]);
        } else {
            sessionStorage.setItem("slug", slugs[slugs.length - 1]);
        }
        setSlugChanged(!slugChanged);
    };

    return (
        <ProjectContext.Provider
            value={{ projects, slugChanged, getDetails, handleNextProject, handlePrevProject }}
        >
            {children}
        </ProjectContext.Provider>
    );
};
