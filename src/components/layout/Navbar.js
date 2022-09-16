import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import styles from '../../styles/Navbar.module.scss';

import logo from '../../icons/logo.svg';

import { Link } from 'react-router-dom';
import { NavItem } from '../NavItem';


const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL + "/api/categories?lang=az"
                );
                setCategories(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <nav className={styles.wrapper}>
            <div className="container">
                <div className={styles.content}>
                    <Link to='/'>
                        <div className={styles.logo}>
                            <img alt='logo' src={logo} />
                        </div>
                    </Link>
                    <div className={styles.nav}>
                        <ul>
                            {categories.map((item) => {
                                return (
                                    <Link key={item.id} to='/'>
                                        <NavItem
                                            title={item.name}
                                            slug={item.slug}
                                            image={item.image} />
                                    </Link>
                                )
                            })}
                            <Link to='projects'>
                                <NavItem title='Proyektlər' />
                            </Link>
                            <Link to='about'>
                                <NavItem title='Haqqımızda' />
                            </Link>
                            <Link to='faqs'>
                                <NavItem title='FAQ' />
                            </Link>
                            <Link to='contact'>
                                <NavItem title='Əlaqə' />
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;