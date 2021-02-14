import Head from 'next/head'
import Layout from '../constants/Layout'
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
          
        </Layout>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
