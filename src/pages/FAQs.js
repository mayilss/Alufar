import { useQuery } from "react-query";
import { getFaqs } from "../api/alufarApi";

import { Questions } from "../components/Questions";
import { Banner } from "../components/Banner";

import styles from "../styles/FAQs.module.scss";

import bg from "../images/faqs-bg.png";
import { Footer } from "../components/layout/Footer";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const FAQs = () => {
    const { isLoading, isError, error, data: faqs } = useQuery("faqs", getFaqs);
    const { lang } = useContext(LanguageContext);

    let item;
    if (lang === "az") {
        item = {
            img: bg,
            title: "FAQ",
            text: "Məhsullarımız və xidmətlərimizlə bağlı tez-tez verilən suallara tez bir zamanda aydın və ətraflı cavab tap.",
        };
    } else if (lang === "en") {
        item = {
            img: bg,
            title: "FAQ",
            text: "Quickly find clear and detailed answers to frequently asked questions about our products and services.",
        };
    } else {
        item = {
            img: bg,
            title: "FAQ",
            text: "Быстро находите четкие и подробные ответы на часто задаваемые вопросы о наших продуктах и ​​услугах.",
        };
    }

    let content;
    if (isLoading) {
        content = null;
    } else if (isError) {
        content = <p>{error.message}</p>;
    } else {
        content = faqs.data.map((item) => {
            return (
                <Questions
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                />
            );
        });
    }

    return (
        <main className={styles.wrapper + " pt-5"}>
            <Banner item={{ ...item }} />
            <div className={styles.questionHolder}>{content}</div>
            <Footer />
        </main>
    );
};
