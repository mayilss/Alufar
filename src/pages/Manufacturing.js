import styles from "../styles/Manufacturing.module.scss";

import empty from "../images/empty.png";
import { useState } from "react";
import { SimpleTitle } from "../components/SimpleTitle";

export const Manufacturing = () => {
    const [isActive, setIsActive] = useState(false);

    const handleTab = () => {
        setIsActive(!isActive);
    };

    return (
        <main className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <div className={styles.panel}>
                        <button
                            className={!isActive && styles.active}
                            onClick={() => {
                                handleTab();
                            }}
                        >
                            Aluminium profil istehsal zavodu
                        </button>
                        <button
                            className={isActive && styles.active}
                            onClick={() => {
                                handleTab();
                            }}
                        >
                            Elektrostatik boya xidmeti
                        </button>
                    </div>
                </div>
                <div className="col-9">
                    {isActive ? (
                        <div className={styles.tab}>
                            <img src={empty} alt="emp" />
                            <SimpleTitle title="Elektrostatik boya xidməti" />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Facere ipsum hic reiciendis
                                eius sapiente id nihil perferendis repellendus
                                quis quia repellat officia pariatur libero, nisi
                                fuga asperiores voluptatibus obcaecati iure.
                            </p>
                        </div>
                    ) : (
                        <div className={styles.tab}>
                            <img src={empty} alt="emp" />
                            <SimpleTitle title="Alüminium profil istehsal zavodu" />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Facere ipsum hic reiciendis
                                eius sapiente id nihil perferendis repellendus
                                quis quia repellat officia pariatur libero, nisi
                                fuga asperiores voluptatibus obcaecati iure.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};
