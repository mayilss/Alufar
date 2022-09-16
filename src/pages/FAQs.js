import { useEffect, useState } from "react";
import axios from "axios";

import { Questions } from "../components/Questions";
import { Banner } from "../components/Banner";

import styles from "../styles/FAQs.module.scss";

import bg from "../images/faqs-bg.png";

export const FAQs = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL + "/api/faqs?lang=az"
                );
                setQuestions(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchQuestions();
    }, []);

    return (
        <div className={styles.wrapper}>
            <Banner
                img={bg}
                title="FAQ"
                text="Məhsullarımız və xidmətlərimizlə bağlı tez-tez
                verilən suallara tez bir zamanda aydın
                və ətraflı cavab tap."
            />
            <div className={styles.questionHolder}>
                {questions.map((item) => {
                    return (
                        <Questions
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                        />
                    );
                })}
            </div>
        </div>
    );
};
