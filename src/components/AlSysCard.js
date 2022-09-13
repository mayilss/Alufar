import styles from '../styles/AlSysCard.module.scss';

import cardImg from '../images/al-sys.png'

export const AlSysCard = () => {
    return ( 
        <div className={styles.wrapper}>
            <img src={cardImg} alt="Memarlıq sistemləri" />
            <h4>Memarlıq sistemləri</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aspernatur maxime in sint pariatur rerum.</p>
        </div>
     );
}