import { useState } from "react";
import { useQuery } from "react-query";
import { getCategories } from "../api/alufarApi";
import styles from "../styles/CategoryNav.module.scss";

export const CategoryNav = () => {
    const [isActive, setIsActive] = useState(0);

    const navHandler = (id) => {
        setIsActive(id);
    };

    const {
        isLoading,
        isError,
        error,
        data: categories,
    } = useQuery("categories", getCategories);

    let content;
    if (isLoading) {
        content = null;
    } else if (isError) {
        content = <p>{error.message}</p>;
    } else {
        content = categories.data.map((item) => {
            return (
                <button
                    key={item.id}
                    onClick={() => {
                        navHandler(item.id);
                    }}
                    className={isActive === item.id ? styles.active : ""}
                >
                    {item.name}
                </button>
            );
        });
    }

    return (
        <div className="container">
            <div className={styles.nav}>
                <button
                    onClick={() => {
                        navHandler(0);
                    }}
                    className={isActive === 0 ? styles.active : ""}
                >
                    Hamısı
                </button>
                {content}
            </div>
        </div>
    );
};
