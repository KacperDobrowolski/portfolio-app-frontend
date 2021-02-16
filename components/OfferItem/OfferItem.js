import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styles from './OfferItem.module.scss';

export default function OfferItem(props) {
    return (
        <div className={styles.offerItem}>
            <div className={styles.offerItemContent}>
                <i className={props.icon}></i>
                <h2>{ props.title }</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet quam nisl. Proin sodales tempus nisi, id euismod leo cursus in. Nunc aliquam eros sit amet justo rutrum, vel ultricies arcu blandit.</p>
            </div>
        </div>
    )
}