import styles from './Project.module.scss';

const Project = ({ name, url, image }) => {
    return (
        <div className={styles.project} style={{ backgroundImage: `url(${image})` }}>
            <a className={styles.projectContainer} href={url}>
                <p>{name}</p>
            </a>
        </div>
    )
}

export default Project