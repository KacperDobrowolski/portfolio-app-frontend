import styles from './Contact.module.scss';
import React, { useState } from 'react';

const Contact = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ msg, setMsg ] = useState("");

    const input = (e) => {
        const target = e.target;
        switch(target.name) {
            case 'name':
                setName(target.value);
                break;
            case 'email':
                setEmail(target.value);
                break;
            case 'msg':
                setMsg(target.value);
                break;
        }
    }

    const submit = (e) => {
        e.preventDefault();

    }

    return (
        <section className={styles.contact} id="contact">
            <h2 className={styles.contact_headline}>Skontaktuj się ze mną</h2>
            <form className={styles.contact_form}>
                <div className={styles.input_group}>
                    <label htmlFor="name" className={styles.contact_label}>Imię</label>
                    <input onChange={input} type="text" id="name" name="name" placeholder="Wpisz swoje imię"/>
        
                    <label htmlFor="email" className={styles.contact_label}>Email</label>
                    <input onChange={input} type="email" id="email" name="email" placeholder="Wpisz swój adres e-mail"/>

                    <label htmlFor="msg" className={styles.contact_label}>Wiadomość</label>
                    <textarea onChange={input} id="msg" name="msg" placeholder="Wpisz wiadomość"></textarea> <br /> <br />

                    <input onClick={submit} type="submit" value="Wyślij wiadomość" />
                </div>
            </form>
        </section>
    )
}

export default Contact;