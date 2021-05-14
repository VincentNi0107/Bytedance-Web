import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/header'
import Left from '../components/FirstPage/left/left'
import Content from '../components/FirstPage/ContentList/content'
import Right from '../components/FirstPage/right/right'

export default function Home({ channels, list,hottopics}) {
  return (
    <div>
      <Head>
        <meta name='description' content='微博'></meta>
        <title>微博</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
       	<div>
          <Header/>
          <div>
       	  	<div id={styles.main}>
         		  <Left data={channels}/>
 				      <Content list={list}/>
         	  	<Right hottopiclist={hottopics}/>
       		  </div>
           </div>
        </div>
    </div>
  )
}
export const getServerSideProps = async () => {
  let res = await fetch(`http://localhost:3000/api/left`)
  let data = await res.json()

  let resp = await fetch(`http://localhost:3000/api/news`)
  let list = await resp.json()

  let reshottopic = await fetch(`http://localhost:3000/api/right`)
  let hottopic = await reshottopic.json()

  return { 
      props: { channels: data.data, list: list.data , hottopics: hottopic.data}
  }
}