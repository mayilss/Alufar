import styles from "../styles/Button.module.scss";

export const Button = ({ content, click, args }) => {
    return (
        <button
            onClick={
                click
                    ? (e) => {
                          e.preventDefault();
                          click(args);
                      }
                    : (e) => {
                          e.preventDefault();
                          return;
                      }
            }
            className={styles.button}
        >
            {content}
        </button>
    );
};
