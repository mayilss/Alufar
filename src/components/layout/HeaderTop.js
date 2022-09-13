import styles from '../../styles/HeaderTop.module.scss';

import truck from '../../icons/truck.svg'
import phone from '../../icons/phone.svg'
import search from '../../icons/search.svg'

const HeaderTop = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.delivery}>
                            <img src={truck} alt='truck' />
                            <p>Sürətli çatdırılma</p>
                        </div>
                        <div className={styles.customer}>
                            <img src={phone} alt='phone' />
                            <p>Müştəri xidməti: <span>+994 12 310 39 49</span></p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src={search} alt='search' />
                        <p className={styles.lang}>AZ</p>
                        <p className={styles.lang}>EN</p>
                        <p className={styles.lang}>RU</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;