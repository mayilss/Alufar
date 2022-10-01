import { ContactForm } from "../components/ContactForm";
import styles from "../styles/Contact.module.scss";
import { MapContainer, TileLayer } from "react-leaflet";

export const Contact = () => {
    const position = [40.42740658718815, 49.89166946901654];
    return (
        <main className={styles.wrapper}>
            <ContactForm contactPage={true} />
            <div className={`${styles.mapHolder} col-md-6 col-12`}>
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker> */}
                </MapContainer>
            </div>
        </main>
    );
};
