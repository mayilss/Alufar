import styles from '../styles/About.module.scss';

import img from '../images/about-1.png';
import empty from '../images/empty.png';
import icon from '../icons/about-icon.svg';

export const About = () => {
    return (
        <div className={styles.wrapper}>
            <img src={empty} alt="video" width="100%" />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 col-12">
                        <div className={styles.content}>
                            <h2>Haqqimizda</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Modi reprehenderit eveniet odio nobis, inventore veritatis,
                                ex repellendus magni saepe quam possimus pariatur totam dicta
                                quisquam iste? Culpa laudantium aliquam quas!
                            </p>
                        </div>
                    </div>
                    <div className={`col-md-6 col-12 ${styles.contentHolder}`}>
                        <img src={img} alt="about" />
                    </div>
                    <div className={`col-md-6 col-12 ${styles.contentHolder}`}>
                        <img src={img} alt="about" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className={styles.content}>
                            <h2>Catdirilma</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Modi reprehenderit eveniet odio nobis, inventore veritatis,
                                ex repellendus magni saepe quam possimus pariatur totam dicta
                                quisquam iste? Culpa laudantium aliquam quas!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h2>Bizim ustunluklerimiz</h2>
                    <div className="row gy-4 pb-5">
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className={styles.bottomItem}>
                                <img src={icon} alt="about" />
                                <h4>Munasib Qiymet</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Iure doloribus repudiandae asperiores velit mollitia exercitationem
                                    unde distinctio, molestias perferendis quo ipsum quaerat inventore
                                    ad obcaecati ipsa officiis aliquid rem ullam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className={styles.bottomItem}>
                                <img src={icon} alt="about" />
                                <h4>Munasib Qiymet</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Iure doloribus repudiandae asperiores velit mollitia exercitationem
                                    unde distinctio, molestias perferendis quo ipsum quaerat inventore
                                    ad obcaecati ipsa officiis aliquid rem ullam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className={styles.bottomItem}>
                                <img src={icon} alt="about" />
                                <h4>Munasib Qiymet</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Iure doloribus repudiandae asperiores velit mollitia exercitationem
                                    unde distinctio, molestias perferendis quo ipsum quaerat inventore
                                    ad obcaecati ipsa officiis aliquid rem ullam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className={styles.bottomItem}>
                                <img src={icon} alt="about" />
                                <h4>Munasib Qiymet</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Iure doloribus repudiandae asperiores velit mollitia exercitationem
                                    unde distinctio, molestias perferendis quo ipsum quaerat inventore
                                    ad obcaecati ipsa officiis aliquid rem ullam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

