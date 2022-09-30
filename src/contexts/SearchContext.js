import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [valueChanged, setValueChanged] = useState(false);

    const getSearchResults = (value) => {
        sessionStorage.setItem("searchValue", value);
        setValueChanged(!valueChanged);
    };

    return (
        <SearchContext.Provider value={{ valueChanged, getSearchResults }}>
            {children}
        </SearchContext.Provider>
    );
};
