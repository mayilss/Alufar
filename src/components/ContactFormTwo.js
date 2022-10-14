import styles from "../styles/ContactFormTwo.module.scss";
import { Button } from "./Button";

import loc from "../icons/loc-icon.svg";
import mail from "../icons/mail-icon.svg";
import phone from "../icons/phone.svg";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const ContactFormTwo = ({ contactPage, cName }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [contacts, setContacts] = useState({});
    const [phones, setPhones] = useState([]);
    const { lang } = useContext(LanguageContext);

    const nameInput = useRef();
    const mailInput = useRef();
    const messageInput = useRef();

    const handleFocus = (e) => {
        e.focus();
    };

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchContacts = async () => {
            await axios(process.env.REACT_APP_API_URL + "/api/contact", {
                cancelToken: cancelToken.token,
            })
                .then((res) => {
                    setContacts(res.data.data);
                    const splitted = contacts.phones.split(",");
                    setPhones(splitted);
                })
                .catch((err) => {
                    return;
                });
        };
        fetchContacts();
        return () => {
            cancelToken.cancel();
        };
    }, [contacts.phones]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        try {
            await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL + "/api/contact",
                data: formData,
            });
        } catch (err) {
            return;
        }
        setName("");
        setEmail("");
        setMessage("");
    };

    let title;
    let nameLabel;
    let emailLabel;
    let messageLabel;
    let button;
    if (lang === "az") {
        title = "Bizimlə Əlaqə";
        nameLabel = "Ad və Soyad";
        emailLabel = "Email";
        messageLabel = "Mesaj";
        button = "Göndər";
    } else if (lang === "en") {
        title = "Contact us";
        nameLabel = "Name and surname";
        emailLabel = "Email";
        messageLabel = "Message";
        button = "Send";
    } else {
        title = "Свяжитесь с нами";
        nameLabel = "Имя и фамилия";
        emailLabel = "Эл. адрес";
        messageLabel = "Сообщение";
        button = "Отправлять";
    }

    return (
        <div
            className={
                contactPage
                    ? `col-md-6 col-12 ${styles.form} ` + styles.formPage
                    : styles.form + " " + cName
            }
        >
            <h2>{title}</h2>
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
                                        ref={nameInput}
                                        type="text"
                                        value={name || ""}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                    <label
                                        onClick={() => {
                                            handleFocus(nameInput.current);
                                        }}
                                        htmlFor="name"
                                    >
                                        {nameLabel}
                                    </label>
                                </div>
                                <div
                                    className={
                                        contactPage
                                            ? styles.formItemPage
                                            : styles.formItem
                                    }
                                >
                                    <input
                                        ref={mailInput}
                                        type="email"
                                        value={email || ""}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <label
                                        onClick={() => {
                                            handleFocus(mailInput.current);
                                        }}
                                        htmlFor="email"
                                    >
                                        {emailLabel}
                                    </label>
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
                                    <Button content={button} />
                                </div>
                                <textarea
                                    ref={messageInput}
                                    name="message"
                                    cols="30"
                                    rows="4"
                                    value={message || ""}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                ></textarea>
                                <label
                                    onClick={() => {
                                        handleFocus(messageInput.current);
                                    }}
                                    htmlFor="message"
                                >
                                    {messageLabel}
                                </label>
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
                            <p>{contacts.address}</p>
                        </div>
                    </div>
                    <div
                        className={
                            contactPage ? styles.dataItemPage : styles.dataItem
                        }
                    >
                        <img src={phone} alt="phone" />
                        <div>
                            {phones.map((item, index) => {
                                return <p key={index}>{item}</p>;
                            })}
                        </div>
                    </div>
                    <div
                        className={
                            contactPage ? styles.dataItemPage : styles.dataItem
                        }
                    >
                        <img src={mail} alt="mail" />
                        <div>
                            <p>{contacts.email}</p>
                        </div>
                    </div>
                </div>
                {/* )} */}
            </div>
        </div>
    );
};
