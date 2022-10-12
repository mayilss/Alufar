import { HeaderTop } from "./HeaderTop";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <header
            style={{
                position: "sticky",
                width: "100%",
                zIndex: 99999,
                top: 0,
            }}
        >
            <HeaderTop />
            <Navbar />
        </header>
    );
};
