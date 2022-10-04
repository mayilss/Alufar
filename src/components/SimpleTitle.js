import styles from "../styles/SimpleTitle.module.scss";

export const SimpleTitle = ({ title, style }) => {
    return (
        <h2 style={style} className={styles.title}>
            {title}
        </h2>
    );
};
