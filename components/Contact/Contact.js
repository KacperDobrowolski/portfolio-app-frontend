import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <section className={styles.contact} id="contact">
            <h2 className={styles.contact_headline}>Skontaktuj się ze mną</h2>
            <form className={styles.contact_form}>
                <div className={styles.input_group}>
                    <label htmlFor="name" className={styles.contact_label}>Imię</label>
                    <input type="text" id="name" name="name" placeholder="Wpisz swoje imię"/>
        
                    <label htmlFor="email" className={styles.contact_label}>Email</label>
                    <input type="email" id="email" name="email" placeholder="Wpisz swój adres e-mail"/>

                    <label htmlFor="msg" className={styles.contact_label}>Wiadomość</label>
                    <textarea id="msg" placeholder="Wpisz wiadomość"></textarea> <br /> <br />

                    <input type="submit" value="Wyślij wiadomość" />
                </div>
            </form>
        </section>
    )
}

export default Contact;