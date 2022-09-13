import styles from "../styles/HomeShowroom.module.scss"

import empty from "../images/empty.png";

import { Title } from "./Title";

export const HomeShowroom = () => {
    return (
        <div className="container mt-5 pb-5">
            <div className={styles.wrapper}>
                <Title content="Showroom" />
                <img src={empty} alt="video" />
            </div>
        </div>
    );
}
