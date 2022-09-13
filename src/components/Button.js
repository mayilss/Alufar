import styles from '../styles/Button.module.scss';

export const Button = ({content}) => {
    return (
        <button className={styles.button}>{content}</button>
    );
}