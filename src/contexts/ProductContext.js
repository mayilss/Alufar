import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [slugChanged, setSlugChanged] = useState(false);

    const getProductInner = (slug) => {
        sessionStorage.setItem("productSlug", slug);
        setSlugChanged(!slugChanged);
    };

    return (
        <ProductContext.Provider value={{ slugChanged, getProductInner }}>
            {children}
        </ProductContext.Provider>
    );
};
