import styles from '../styles/ContactForm.module.scss'
import { Button } from './Button';

import loc from '../icons/loc-icon.svg';
import mail from '../icons/mail-icon.svg';
import phone from '../icons/phone.svg';

export const ContactForm = ({ contactPage }) => {
    return (
        <div className={contactPage ? `col-md-6 col-12 ${styles.form}` : styles.form}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2>Bizimlə Əlaqə</h2>
                    <form>
                        <div className={contactPage ? styles.itemHolderCol : styles.itemHolder}>
                            <div className={styles.formItem}>
                                <label htmlFor="name">Ad və Soyad</label>
                                <input type="text" />
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </div>
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="message">Mesaj</label>
                            <textarea name="message" cols="30" rows="10"></textarea>
                            <div className={styles.btn}>
                                <Button content="Göndər" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {contactPage && (
                <div className={styles.contactData}>
                    <div className={styles.dataItem}>
                        <img src={loc} alt="loc" />
                        <div>
                            <p>AZ 1029, Azərbaycan, Bakı,
                                Ziya Bünyadov küç. 2071</p>
                        </div>
                    </div>
                    <div className={styles.dataItem}>
                        <img src={phone} alt="phone" />
                        <div>
                            <p>+994 12 310 39 49 (6012/6016)</p>
                            <p>+994 (55) 596 34 00</p>
                            <p>+994 (55) 208 34 00 (Ofis)</p>
                            <p>+994 (55) 496 34 00 (Satış şöbəsi)</p>
                            <p>+994 (55) 205 03 89 (Satış şöbəsi)</p>
                        </div>
                    </div>
                    <div className={styles.dataItem}>
                        <img src={mail} alt="mail" />
                        <div>
                            <p>info@alufar.az</p>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}