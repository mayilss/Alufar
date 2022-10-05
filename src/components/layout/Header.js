import { HeaderTop } from "./HeaderTop";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <header
            style={{
                position: "fixed",
                width: "100%",
                zIndex: 99999,
                top: 0,
                left: 0,
                right: 0,
            }}
        >
            <HeaderTop />
            <Navbar />
        </header>
    );
};
