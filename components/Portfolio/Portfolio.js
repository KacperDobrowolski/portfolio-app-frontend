import styles from './Portfolio.module.scss';
import Button from '../Button/Button';

const Portfolio = () => {
    return (
        <section className={styles.portfolio}>
            <h2 className={styles.portfolio_headline}>Moje projekty</h2>
            <div className={styles.portfolio_options}>
                <ul className={styles.portfolio_list}>
                    <li className={styles.list_item}>Wszystkie</li>
                    <li className={styles.list_item}>Ukończone</li>
                    <li className={styles.list_item}>Nieukończone</li>
                </ul>
            </div>
            <div className={styles.projects_list}>
                <div className={styles.list_item}>
                    <div className={styles.item_project}></div>
                </div>
                <div className={styles.list_item}>
                    <div className={styles.item_project}></div>
                </div>
                <div className={styles.list_item}>
                    <div className={styles.item_project}></div>
                </div>
            </div>
            <Button text="Zobacz więcej" color={false}/>
        </section>
    )
}

export default Portfolio;