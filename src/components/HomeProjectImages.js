import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import styles from "../styles/HomeProjectImages.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

const options = {
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 4,
        },
    },
};

export const HomeProjectImages = ({ projects }) => {
    const { getDetails } = useContext(ProjectContext);
    const [images, setImages] = useState([]);
    useEffect(() => {
        setImages(projects);
        console.log("object");
    }, [projects]);
    return (
        <div className={styles.wrapper}>
            {images.length !== 0 && (
                <OwlCarousel
                    className="owl-theme carousel-wrapper mt-4"
                    {...options}
                >
                    {images.map((item) => {
                        console.log("worked!", item);
                        return (
                            <div
                                key={item.id}
                                className="item"
                                onClick={() => {
                                    getDetails(item.slug);
                                }}
                            >
                                <img
                                    src={
                                        process.env.REACT_APP_API_URL +
                                        "/storage/" +
                                        item.image
                                    }
                                    alt="projects"
                                />
                            </div>
                        );
                    })}
                </OwlCarousel>
            )}
        </div>
    );
};
