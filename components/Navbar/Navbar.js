import { useRef } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navbarRef = useRef();
    const openNav = () => {
        navbarRef.current.classList.add(styles.opened);
    }
    const closeNav = () => {
        navbarRef.current.classList.remove(styles.opened);
    }
    return (
        <nav className={styles.navbar} ref={navbarRef}>
            <h2 className={styles.logo}>Portfolio App</h2>
            <ul className={styles.nav_list}>
                <li className={styles.list_item}>
                    <Link onClick={closeNav} to="home" spy={true} smooth={true}>Strona główna</Link>
                </li>
                <li className={styles.list_item}>
                    <Link onClick={closeNav} to="offer" spy={true} smooth={true}>Oferta</Link>
                </li>
                <li className={styles.list_item}>
                    <Link onClick={closeNav} to="portfolio" spy={true} smooth={true}>Portfolio</Link>
                </li>
                <li className={styles.list_item}>
                    <Link onClick={closeNav} to="contact" spy={true} smooth={true}>Kontakt</Link>
                </li>
            </ul>
            <i className="bi bi-list" onClick={openNav}></i>
            <span className={styles.closeIcon} onClick={closeNav}>X</span>
        </nav>
    )
}

export default Navbar;