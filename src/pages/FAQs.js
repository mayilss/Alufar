import { Banner } from '../components/Banner';
import { Questions } from '../components/Questions';

import styles from '../styles/FAQs.module.scss';

import bg from '../images/faqs-bg.png';

export const FAQs = () => {
    return (
        <div className={styles.wrapper}>
            <Banner
                img={bg}
                title='FAQ'
                text='Məhsullarımız və xidmətlərimizlə bağlı tez-tez
                verilən suallara tez bir zamanda aydın
                və ətraflı cavab tap.'
            />
            <div className={styles.questionHolder}>
                <Questions />
                <Questions />
                <Questions />
                <Questions />
                <Questions />
                <Questions />
                <Questions />
                <Questions />
            </div>
        </div>
    );
}

