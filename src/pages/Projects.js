import styles from '../styles/Projects.module.scss';

import airport from '../images/fzl-airport.png';
import ivy from '../images/ivy.png';
import smarton from '../images/smarton.png';
import asan from '../images/asan.png';

export const Projects = () => {
    return (
        <div className="container my-5">
            <h2 className={styles.title}>Proyektlər</h2>
            <div className="row mt-5">
                <div className="col-md-4 col-sm-6 col-12">
                    <div className={styles.item}>
                        <img src={airport} alt="projects" />
                        <p>Füzuli airport</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className={styles.item}>
                        <img src={ivy} alt="projects" />
                        <p>IVY garden hotel</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className={styles.item}>
                        <img src={smarton} alt="projects" />
                        <p>Smarton</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className={styles.item}>
                        <img src={asan} alt="projects" />
                        <p>Asan xidmət</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className={styles.item}>
                        <img src={airport} alt="projects" />
                        <p>Füzuli airport</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className={styles.item}>
                        <img src={ivy} alt="projects" />
                        <p>IVY garden hotel</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

