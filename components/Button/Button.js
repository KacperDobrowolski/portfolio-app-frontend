import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
    return (
        <button className={ color ?  styles.btn : styles.btn_white }>
            { text }
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Button;