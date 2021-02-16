import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styles from './Button.module.scss';

export default function Button(props) {
    return (
        <button className={styles.btn}>
            { props.text }
        </button>
    )
}