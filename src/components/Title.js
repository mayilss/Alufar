import { Link } from "react-router-dom";
import styles from "../styles/Title.module.scss";

export const Title = ({ content, selector, visibility, link }) => {
    return (
        <div ref={selector} className={styles.title}>
            <Link className={visibility ? styles.a : ""} to={link ? link : "/"}>
                <span className={visibility ? styles.span : ""}></span>
                {content}
            </Link>
        </div>
    );
};
