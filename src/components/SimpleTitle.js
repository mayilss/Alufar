import styles from '../styles/SimpleTitle.module.scss';

export const SimpleTitle = ({title}) => {
    return ( 
        <h2 className={styles.title}>{title}</h2>
     );
}
 
