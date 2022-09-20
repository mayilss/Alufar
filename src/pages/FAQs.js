import { useQuery } from "react-query";
import { getFaqs } from "../api/alufarApi";

import { Questions } from "../components/Questions";
import { Banner } from "../components/Banner";

import styles from "../styles/FAQs.module.scss";

import bg from "../images/faqs-bg.png";

export const FAQs = () => {
    const {
        isLoading,
        isError,
        error,
        data: faqs
    } = useQuery('faqs', getFaqs);

    let content;
    if(isLoading){
        content = null;
    } else if(isError){
        content = <p>{error.message}</p>
    } else {
        content = (
            faqs.data.map((item) => {
                return (
                    <Questions
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                    />
                );
            })
        )
    }

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
                {content}
            </div>
        </div>
    );
};
