import styles from '../styles/Banner.module.scss';



export const Banner = ({ img, title, text }) => {
    return (
        <div className={styles.wrapper}>
            <img src={img} alt="background" />
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

