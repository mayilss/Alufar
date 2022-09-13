import styles from '../styles/Manufacturing.module.scss';

import empty from '../images/empty.png'
import { useState } from 'react';

export const Manufacturing = () => {

    const [isActive, setIsActive] = useState(false);

    const handleTab = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <div className={styles.panel}>
                        <button className={!isActive && styles.active} onClick={() => { handleTab() }}>Aluminium profil istehsal zavodu</button>
                        <button className={isActive && styles.active} onClick={() => { handleTab() }}>Elektrostatik boya xidmeti</button>
                    </div>
                </div>
                <div className="col-9">
                    {isActive ? (
                        <div className={styles.tab}>
                            <img src={empty} alt="emp" />
                            <h2>Elektrostatik boya xidmeti</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Facere ipsum hic reiciendis eius sapiente id nihil perferendis
                                repellendus quis quia repellat officia pariatur libero,
                                nisi fuga asperiores voluptatibus obcaecati iure.</p>
                        </div>
                    ) : (
                        <div className={styles.tab}>
                            <img src={empty} alt="emp" />
                            <h2>Alüminium profil istehsal zavodu</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Facere ipsum hic reiciendis eius sapiente id nihil perferendis
                                repellendus quis quia repellat officia pariatur libero,
                                nisi fuga asperiores voluptatibus obcaecati iure.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

