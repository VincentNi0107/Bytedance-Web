import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import NaviBar from "../components/NaviBar";
import MusicHead from "../components/MusicHead";
import Musicmain from "../components/Musicmain";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Music</title>
                <link rel='stylesheet'
                      href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
            </Head>

            <main className={styles.main}>
                <NaviBar/>
                <div className={styles.content}>
                <MusicHead/>
                <Musicmain/>
                </div>
            </main>
                <Footer/>
        </div>
    )
}
