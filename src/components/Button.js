import styles from "../styles/Button.module.scss";

export const Button = ({ noHover, content, click, args }) => {
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
            className={!noHover ? styles.buttonHover : styles.button}
        >
            {content}
        </button>
    );
};
