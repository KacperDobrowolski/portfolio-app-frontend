import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'

export default function Layout(props) {
    return (
        <div className="layout">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            { props.children }
        </div>
    )
}