import { ContactForm } from "../components/ContactForm";
import styles from "../styles/Contact.module.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Footer } from "../components/layout/Footer";

export const Contact = () => {
    const position = [40.42740658718815, 49.89166946901654];
    return (
        <>
            <main className={styles.wrapper}>
                <ContactForm contactPage={true} />
                <div className={`${styles.mapHolder} col-md-6 col-12`}>
                    <MapContainer
                        center={position}
                        zoom={50}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>Alufar</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </main>
            <Footer />
        </>
    );
};
