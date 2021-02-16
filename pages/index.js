import Head from 'next/head'
import Layout from '../constants/Layout'
import Offer from '../components/Offer/Offer';
import Button from '../components/Button/Button';
import ProjectsStatus from '../components/ProjectsStatus/ProjectsStatus';
import Portfolio from '../components/Portfolio/Portfolio';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>

            <div className={styles.header_image}>
              <h2 className={styles.header_headline}>Kacper Dobrowolski</h2>
              <p className={styles.header_underline}>Junior Full-Stack Developer</p>
              <Button text="ZOBACZ WIĘCEJ" color={true}/>
            </div>

            <Offer />
            <ProjectsStatus />
            <Portfolio />
        </Layout>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
