import styles from '../styles/HomeProjects.module.scss';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import sliderImg from '../images/slider-img.png';
import projectImg from '../images/project-img.png';

import { Title } from "./Title";
import { Button } from "../components/Button";

const options = {
    loop: true,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
    },
};

export const HomeProjects = () => {
    return (
        <div className={styles.projects}>
            <div className="container mb-5">
                <div className={styles.wrapper}>
                    <Title content="Proyektlər" />
                    <div className={styles.slider}>
                        <OwlCarousel
                            className="owl-theme container carousel-wrapper mt-4"
                            {...options}
                        >
                            <div className="item">
                                <div className={styles.sliderItem}>
                                    <div className={styles.itemImg}>
                                        <img src={sliderImg} alt="slider" />
                                    </div>
                                    <div className={styles.itemContent}>
                                        <h2>Asan xidmət</h2>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Aliquid ex dolore fugit, odio, laboriosam exercitationem
                                            nulla voluptates vitae unde nihil aperiam tempore eum illum
                                            non quas doloremque necessitatibus? Consectetur, distinctio.
                                        </p>
                                        <div className={styles.btnHolder}>
                                            <Button content="Ətraflı" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className={styles.sliderItem}>
                                    <div className={styles.itemContent}>
                                        <h2>Asan xidmət</h2>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Aliquid ex dolore fugit, odio, laboriosam exercitationem
                                            nulla voluptates vitae unde nihil aperiam tempore eum illum
                                            non quas doloremque necessitatibus? Consectetur, distinctio.
                                        </p>
                                        <div className={styles.btnHolder}>
                                            <Button content="Ətraflı" />
                                        </div>
                                    </div>
                                    <div className={styles.itemImg}>
                                        <img src={sliderImg} alt="slider" />
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className={styles.images}>
                        <div className='row'>
                            <div className='col-6, col-md-3'>
                                <img src={projectImg} alt="projects" />
                            </div>
                            <div className='col-6, col-md-3'>
                                <img src={projectImg} alt="projects" />
                            </div>
                            <div className='col-6, col-md-3'>
                                <img src={projectImg} alt="projects" />
                            </div>
                            <div className='col-6, col-md-3'>
                                <img src={projectImg} alt="projects" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
