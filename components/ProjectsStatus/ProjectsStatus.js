import styles from './ProjectsStatus.module.scss';

export default function ProjectsStatus() {
    return (
        <section className={styles.projectsStatus}>
              <div className={styles.circle}>
                  <h1 className={styles.counter}>1</h1>
                  <p className={styles.counter_title}>Ukończonych projektów</p>
              </div>
              <div className={styles.circle}>
                  <h1 className={styles.counter}>1</h1>
                  <p className={styles.counter_title}>Projektów na GitHubie</p>
              </div>
        </section>
    )
}