import { useState } from 'react';
import styles from '../styles/CategoryNav.module.scss';

export const CategoryNav = () => {

    const [isActive, setIsActive] = useState(1);

    const navHandler = (id) => {
        setIsActive(id)
    }

    return (
        <div className="container">
            <div className={styles.nav}>
                <button
                    onClick={() => { navHandler(1) }}
                    className={isActive === 1 ? styles.active : ''}>
                    Hamısı
                </button>
                <button
                    onClick={() => { navHandler(2) }}
                    className={isActive === 2 ? styles.active : ''}>
                    Cəbhə sistemləri
                </button>
                <button
                    onClick={() => { navHandler(3) }}
                    className={isActive === 3 ? styles.active : ''}>
                    Doğrama profillər
                </button>
                <button
                    onClick={() => { navHandler(4) }}
                    className={isActive === 4 ? styles.active : ''}>
                    Məhəccər
                </button>
            </div>
        </div>
    );
}

