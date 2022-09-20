import styles from '../styles/Button.module.scss';

export const Button = ({content, click, args}) => {
    return (
        <button onClick={()=>{click(args)}} className={styles.button}>{content}</button>
    );
}