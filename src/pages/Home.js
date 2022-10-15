import { BannerVideo } from "../components/BannerVideo";
import { ContactForm } from "../components/ContactForm";
import { HomeAlSys } from "../components/HomeAlSys";
import { HomeProjects } from "../components/HomeProjects";
import { HomeShowroom } from "../components/HomeShowroom";
import { Footer } from "../components/layout/Footer";

export const Home = () => {
    return (
        <main className="home-main"
        // style={{ marginTop: "12.8rem" }}
        >
            <div className="panel">
                <BannerVideo />
            </div>
            <div className="panel">
                <HomeAlSys />
            </div>
            <div className="panel">
                <HomeProjects />
            </div>
            <div className="panel">
                <HomeShowroom />
            </div>
            <div className="panel">
                <ContactForm />
            </div>
            <div className="panel">
                <Footer />
            </div>
        </main>
    );
};
