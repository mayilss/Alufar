import { useState } from "react";

import styles from "../styles/Questions.module.scss";

import plus from "../icons/plus.svg";
import minus from "../icons/minus.svg";

export const Questions = ({ question, answer }) => {
    const [isOpened, setIsOpened] = useState(false);

    const questionHandler = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div
            onClick={() => {
                questionHandler();
            }}
            className="container"
        >
            <div className={styles.wrapper}>
                <div className={styles.question}>
                    <button>
                        <img src={isOpened ? minus : plus} alt="plus" />
                    </button>
                    <p>{question}</p>
                </div>
                {isOpened ? (
                    <div className={styles.answer}>
                        <p>{answer}</p>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};
