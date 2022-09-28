import styles from "../styles/Banner.module.scss";

export const Banner = ({ item }) => {
    return (
        <div className={styles.wrapper}>
            <img src={item.img} alt="background" />
            <div className={styles.content}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>
        </div>
    );
};
