import styles from "../styles/AboutCard.module.scss";

export const AboutCard = ({ icon, title, text }) => {
    return (
        <div>
            <div className={styles.bottomItem}>
                <img src={icon} alt="about" />
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};
