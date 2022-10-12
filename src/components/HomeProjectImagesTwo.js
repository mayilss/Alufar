import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import styles from "../styles/HomeProjectImagesTwo.module.scss";
import '../App.scss'
import { useState } from "react";
import { useEffect } from "react";

const options = {
    loop: true,
    dots: true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 6,
        },
    },
};

export const HomeProjectImagesTwo = ({ projects, indexState }) => {
    const [images, setImages] = useState([]);
    const { setIndex } = indexState;
    useEffect(() => {
        setImages(projects);
    }, [projects]);
    return (
        <div className={styles.wrapper}>
            {images.length !== 0 && (
                <OwlCarousel
                    className="owl-theme carousel-wrapper mt-4"
                    {...options}
                >
                    {images.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className={"item " + styles.imgHolder}
                                onClick={() => {
                                    setIndex(index);
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
                                <div className={styles.content}>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </OwlCarousel>
            )}
        </div>
    );
};