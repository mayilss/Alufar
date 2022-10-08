import styles from "../styles/AlSysCard.module.scss";

export const AlSysCard = ({ pName, hName, visibility, selector, img, title, description }) => {
    return (
        <div ref={selector} className={styles.wrapper}>
            <img src={img} alt="Memarlıq sistemləri" />
            <h4 className={visibility ? hName : ''}>{title}</h4>
            <p className={visibility ? pName : ''}>{description}</p>
        </div>
    );
};
