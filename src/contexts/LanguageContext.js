import { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("az");
    const setAz = () => {
        setLang("az");
    };
    const setEn = () => {
        setLang("en");
    };
    const setRu = () => {
        setLang("ru");
    };

    return (
        <LanguageContext.Provider value={{ lang, setAz, setEn, setRu }}>
            {children}
        </LanguageContext.Provider>
    );
};
