import { Link } from "react-router-dom";
import styles from "../styles/TitleTwo.module.scss";

export const TitleTwo = ({ content, selector, visibility, link }) => {
    return (
        <div ref={selector} className={styles.title}>
            <Link className={visibility ? styles.a : ""} to={link ? link : "/"}>
                <span className={visibility ? styles.span : ""}></span>
                {content}
            </Link>
        </div>
    );
};