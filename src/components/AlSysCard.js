import styles from "../styles/AlSysCard.module.scss";

export const AlSysCard = ({ img, title, description }) => {
    return (
        <div className={styles.wrapper}>
            <img src={img} alt="Memarlıq sistemləri" />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};
