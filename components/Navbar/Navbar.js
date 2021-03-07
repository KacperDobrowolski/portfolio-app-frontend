import { useRef } from 'react';
import styles from './Navbar.module.scss';

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
                <li className={styles.list_item}>Strona główna</li>
                <li className={styles.list_item}>Oferta</li>
                <li className={styles.list_item}>Portfolio</li>
                <li className={styles.list_item}>Kontakt</li>
            </ul>
            <i className="bi bi-list" onClick={openNav}></i>
            <span className={styles.closeIcon} onClick={closeNav}>X</span>
        </nav>
    )
}

export default Navbar;