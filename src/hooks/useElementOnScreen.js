import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";

export const useElementOnScreen = (options, targetRef) => {
    const [isVisible, setIsVisible] = useState(false);

    const observeHandler = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(observeHandler, optionsMemo);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);

    return isVisible;
};
