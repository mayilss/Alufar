import { Link } from "react-router-dom";
import styles from "../styles/Title.module.scss";

import { Button } from "./Button";

export const Title = ({
    content,
    legend,
    button,
    isWhite,
    selector,
    visibility,
    link,
}) => {
    return (
        <div ref={selector} className={isWhite ? styles.titleW : styles.title}>
            <Link className={visibility ? styles.a : ""} to={link ? link : "/"}>
                <span className={visibility ? styles.span : ""}></span>
                {content}
                {legend && (
                    <div className={styles.legend}>
                        <div className={styles.left}></div>
                        <p>DOĞRU VƏ ETİBARLI SEÇİM</p>
                        <div className={styles.right}></div>
                    </div>
                )}
                {button && (
                    <div className={styles.btnHolder}>
                        <Button content="Bax" />
                    </div>
                )}
            </Link>
        </div>
    );
};
