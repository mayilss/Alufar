import styles from '../styles/ProjectCard.module.scss';

export const ProjectCard = ({img, title}) => {
    return (
        <div className={styles.item}>
            <img src={img} alt="projects" />
            <p>{title}</p>
        </div>
    );
}

