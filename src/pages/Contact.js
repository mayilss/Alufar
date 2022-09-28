import { ContactForm } from "../components/ContactForm";
import styles from "../styles/Contact.module.scss";
import map from "../images/map-1.png";

export const Contact = () => {
    return (
        <div className={styles.wrapper}>
            <ContactForm contactPage={true} />
            <a
                className="col-md-6 col-12"
                target="blank"
                href="https://www.google.com/maps/place/Alufar/@40.4272596,49.8894915,17z/data=!3m1!4b1!4m5!3m4!1s0x403089a09560cfb9:0xb6a4cecc26da684e!8m2!3d40.4272596!4d49.8916802"
            >
                <img src={map} alt="map" />
            </a>
        </div>
    );
};
