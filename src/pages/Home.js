import { BannerVideo } from "../components/BannerVideo";
import { ContactForm } from "../components/ContactForm";
import { HomeAlSys } from "../components/HomeAlSys";
import { HomeProjects } from "../components/HomeProjects";
import { HomeShowroom } from "../components/HomeShowroom";

export const Home = () => {
    return (
        <main style={{ marginTop: "12.8rem" }}>
            <BannerVideo />
            <HomeAlSys />
            <HomeProjects />
            <HomeShowroom />
            <ContactForm />
        </main>
    );
};
