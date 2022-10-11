import { useEffect } from "react";
import ScrollBar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
    enable: true,
    effect: "bounce",
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: "#fff",
};
const options = {
    damping: 0.02,
    renderByPixels: false,
    plugins: {
        overscroll: { ...overscrollOptions },
    },
};

export const Scroll = () => {
    useEffect(() => {
        ScrollBar.use(OverscrollPlugin);
        ScrollBar.init(document.body, options);

        return () => {
            if (ScrollBar) ScrollBar.destroy(document.body);
        };
    }, []);

    return null;
};
