import styles from '../../styles/Navbar.module.scss';

import logo from '../../icons/logo.svg'
import arrow from '../../icons/arrow-down.svg'
import empty from '../../images/empty2.png'

import { Link } from 'react-router-dom';


const Navbar = () => {
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
                            <li className={styles.navItem}>
                                Alüminium sistemlər
                                <img alt='arrow' src={arrow} />
                                <div className={styles.dropdownContent}>
                                    <div className={styles.dropdownItem}>
                                        <img src={empty} alt="nav" />
                                    </div>
                                    <div className={styles.dropdownItem}>
                                        <h4>Memarlıq sistemləri</h4>
                                        <ul>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                        </ul>
                                    </div>
                                    <div className={styles.dropdownItem}>
                                        <h4>Mebel sistemləri</h4>
                                        <ul>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                        </ul>
                                    </div>
                                    <div className={styles.dropdownItem}>
                                        <h4>Sənaye profilləri</h4>
                                    </div>
                                    <div className={styles.dropdownItem}>
                                        <h4>Digər Sistemlər</h4>
                                        <ul>
                                            <li>Lorem, ipsum.</li>
                                            <li>Lorem, ipsum.</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.navItem}>
                                İstehsalat
                                <img alt='arrow' src={arrow} />
                                <div className={styles.dropdownContent} style={{width: '60rem'}}>
                                    <div className={styles.dropdownItem}>
                                        <img src={empty} alt="nav" />
                                    </div>
                                    <div className={styles.dropdownItem}>
                                        <h4>Memarlıq sistemləri</h4>
                                    </div>
                                    <div className={styles.dropdownItem}>
                                        <h4>Sənaye profilləri</h4>
                                    </div>
                                </div>
                            </li>
                            <Link to='projects'><li className={styles.navItem}>Proyektlər</li></Link>
                            <Link to='about'><li className={styles.navItem}>Haqqımızda</li></Link>
                            <li className={styles.navItem}>FAQ</li>
                            <Link to='contact'><li className={styles.navItem}>Əlaqə</li></Link>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;