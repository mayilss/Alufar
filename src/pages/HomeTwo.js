import { BannerVideoTwo } from '../components/BannerVideoTwo'
import { ContactFormTwo } from '../components/ContactFormTwo';
import { HomeAlSysTwo } from '../components/HomeAlSysTwo';
import { HomeProjectsTwo } from '../components/HomeProjectsTwo';
import { HomeShowroomTwo } from '../components/HomeShowroomTwo';
import { Footer } from '../components/layout/Footer'
import styles from '../styles/HomeTwo.module.scss';

export const HomeTwo = () => {
    return (
        <main className={styles.container}>
            <BannerVideoTwo />
            <HomeAlSysTwo />
            <HomeProjectsTwo />
            <HomeShowroomTwo />
            <div className={styles.homeFooter}>
                <ContactFormTwo />
                <Footer />
            </div>
        </main>
    )
}