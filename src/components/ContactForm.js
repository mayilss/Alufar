import styles from "../styles/ContactForm.module.scss";
import { Button } from "./Button";

import loc from "../icons/loc-icon.svg";
import mail from "../icons/mail-icon.svg";
import phone from "../icons/phone.svg";
import { useState } from "react";
import axios from "axios";

export const ContactForm = ({ contactPage }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        try {
            await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL + "/api/contact-test",
                data: formData,
            });
        } catch (err) {
            console.log(err);
        }
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div
            className={
                contactPage
                    ? `col-md-6 col-12 ${styles.form} ` + styles.formPage
                    : styles.form
            }
        >
            <h2>Bizimlə Əlaqə</h2>
            <div
                className={
                    !contactPage ? styles.innerForm : styles.innerFormPage
                }
            >
                <div className={!contactPage ? " col-md-7 col-12" : ""}>
                    <div className={styles.wrapper}>
                        <form onSubmit={handleSubmit}>
                            <div
                                className={
                                    contactPage
                                        ? styles.itemHolderCol
                                        : styles.itemHolder
                                }
                            >
                                <div
                                    className={
                                        contactPage
                                            ? styles.formItemPage
                                            : styles.formItem
                                    }
                                >
                                    <input
                                        type="text"
                                        value={name || ""}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                    <label htmlFor="name">Ad və Soyad</label>
                                </div>
                                <div
                                    className={
                                        contactPage
                                            ? styles.formItemPage
                                            : styles.formItem
                                    }
                                >
                                    <input
                                        type="email"
                                        value={email || ""}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div
                                className={
                                    contactPage
                                        ? styles.formItemPage
                                        : styles.formItem
                                }
                            >
                                <div className={styles.btn}>
                                    <Button content="Göndər" />
                                </div>
                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="4"
                                    value={message || ""}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                ></textarea>
                                <label htmlFor="message">Mesaj</label>
                            </div>
                        </form>
                    </div>
                </div>
                {/* {contactPage && ( */}
                <div
                    className={
                        !contactPage
                            ? styles.contactData + " col-5 " + styles.dataMobile
                            : styles.contactData
                    }
                >
                    <div
                        className={
                            contactPage ? styles.dataItemPage : styles.dataItem
                        }
                    >
                        <img src={loc} alt="loc" />
                        <div>
                            <p>
                                AZ 1029, Azərbaycan, Bakı, Ziya Bünyadov küç.
                                2071
                            </p>
                        </div>
                    </div>
                    <div
                        className={
                            contactPage ? styles.dataItemPage : styles.dataItem
                        }
                    >
                        <img src={phone} alt="phone" />
                        <div>
                            <p>+994 12 310 39 49 (6012/6016)</p>
                            <p>+994 (55) 596 34 00</p>
                            <p>+994 (55) 208 34 00 (Ofis)</p>
                            <p>+994 (55) 496 34 00 (Satış şöbəsi)</p>
                            <p>+994 (55) 205 03 89 (Satış şöbəsi)</p>
                        </div>
                    </div>
                    <div
                        className={
                            contactPage ? styles.dataItemPage : styles.dataItem
                        }
                    >
                        <img src={mail} alt="mail" />
                        <div>
                            <p>info@alufar.az</p>
                        </div>
                    </div>
                </div>
                {/* )} */}
            </div>
        </div>
    );
};
