import { useRef } from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
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
            <i className="bi bi-list" onClick={openNav}></i>
            <span className={styles.closeIcon} onClick={closeNav}>X</span>
        </nav>
    )
}