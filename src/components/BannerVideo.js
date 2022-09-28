import styles from "../styles/BannerVideo.module.scss";
import { Title } from "./Title";

export const BannerVideo = () => {
    return (
        <div className={styles.wrapper}>
            <video autoPlay loop muted>
                <source
                    src={process.env.REACT_APP_API_URL + `/alufar.mp4`}
                    type="video/mp4"
                ></source>
            </video>
            <div className={styles.content}>
                <Title
                    content="ALUFAR MMC"
                    legend={true}
                    button={true}
                    isWhite={true}
                />
            </div>
        </div>
    );
};
