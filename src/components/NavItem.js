import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import styles from '../styles/NavItem.module.scss';

import arrow from '../icons/arrow-down.svg'

export const NavItem = ({ title, slug, image }) => {
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        const fetchSubCategories = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL + `/api/categories/${slug}?lang=az`
                );
                setSubCategories(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSubCategories();
    });

    return (
        <li className={styles.navItem}>
            {title}
            {subCategories.length !== 0 && <img alt='arrow' src={arrow} />}
            {subCategories.length !== 0 && (<div className={styles.dropdownContent}>
                {image && (
                    <div className={styles.dropdownItem}>
                        <img src={
                            process.env.REACT_APP_API_URL +
                            "/storage/" +
                            image
                        } alt="nav" />
                    </div>)}
                {subCategories && subCategories.map((item) => {
                    return (
                        <div className={styles.dropdownItem}>
                            <h4>{item.name}</h4>
                            {/* <ul>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                        </ul> */}
                        </div>
                    )
                })}

            </div>)}
        </li>
    );
}

