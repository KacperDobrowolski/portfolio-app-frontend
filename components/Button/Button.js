import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styles from './Button.module.scss';

export default function Button({ color, text }) {
    return (
        <button className={ color ?  styles.btn : styles.btn_white }>
            { text }
        </button>
    )
}