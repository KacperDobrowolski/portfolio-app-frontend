import Head from 'next/head'
import Layout from '../constants/Layout'
import Offer from '../components/Offer/Offer';
import Button from '../components/Button/Button';
import ProjectsStatus from '../components/ProjectsStatus/ProjectsStatus';
import Portfolio from '../components/Portfolio/Portfolio';
import styles from '../styles/Home.module.scss'
import Contact from '../components/Contact/Contact';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>

            <div className={styles.header_image} id="home">
              <h2 className={styles.header_headline}>Kacper Dobrowolski</h2>
              <p className={styles.header_underline}>Junior Full-Stack Developer</p>
                <Link to="offer" spy={true} smooth={true}>
                    <Button text="ZOBACZ WIĘCEJ" color={true}/>
                </Link>
            </div>

            <Offer />
            <ProjectsStatus />
            <Portfolio />
            <Contact />
        </Layout>
      </main>

      <footer className={styles.footer}>
          <h2 className={styles.footer_author}>&copy; 2021 Kacper Dobrowolski <br /> Wszelkie prawa zastrzeżone</h2>
          <div className={styles.socials}>
            <ul className={styles.socials_list}>
              <li className={styles.list_item}>
                  <i className="bi bi-facebook"></i>
              </li>
              <li className={styles.list_item}>
                  <i className="bi bi-github"></i>
              </li>
              <li className={styles.list_item}>
                  <i className="bi bi-whatsapp"></i>
              </li>
            </ul>
          </div>
      </footer>
    </div>
  )
}
