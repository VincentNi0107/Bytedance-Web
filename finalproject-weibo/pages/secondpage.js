import Header from '../components/Header/header'
import Center from '../components/SecondPage/Center/center'
import Right from '../components/SecondPage/Right/right'
import Head from 'next/head'
import styles from '../styles/secondpage.module.css'


export default function Article({ content, list }) {
   

    return (
    <div>
        <Head>
            <meta name='description' content='微博'></meta>
            <title>{ '微博' }</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <div className={styles.head}>
        <Header/>    
        </div>
        <div className={styles.main}>
        <div className={styles.center}>
            <Center data={content} list={list}/>
            <Right/>
        </div>  
        </div>
    </div>
    )
}

export const getServerSideProps = async () => {
    let resp = await fetch(`http://localhost:3000/api/article`)
    let content = await resp.json()

    let response = await fetch(`http://localhost:3000/api/news`)
    let list = await response.json()

    return { 
        props: { content: content.data, list: list.data }
    }
}
