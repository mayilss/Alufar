import styles from "../styles/Button.module.scss";

export const Button = ({ content, click, args }) => {
    return (
        <button
            onClick={
                click
                    ? () => {
                          click(args);
                      }
                    : console.log(null)
            }
            className={styles.button}
        >
            {content}
        </button>
    );
};
