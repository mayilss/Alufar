import styles from "../styles/HomeShowroom.module.scss";

import empty from "../images/empty.png";

import { Title } from "./Title";

export const HomeShowroom = () => {
    return (
        <div className="container mt-5 pb-5">
            <div className={styles.wrapper}>
                <Title content="Showroom" />
                <video autoPlay loop muted>
                    <source
                        src={
                            process.env.REACT_APP_API_URL +
                            `/alufar-showroom.mp4`
                        }
                        type="video/mp4"
                    ></source>
                </video>
            </div>
        </div>
    );
};
