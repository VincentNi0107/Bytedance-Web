import style from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";


export default function Home() {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);

  return (
    <div className={style.Home}>
      <header>
      <div className={style.TopBar}>
      <div className={style.middle}>
        <a href="" className={style.title}></a>
        <div className={style.refreshContainer}>
          <a href="" className={style.refreshBtn}></a>
        </div>
      </div>
      <div className={style.left}>
        <a href="" className={style.messageBox}></a>
      </div>
      <div className={style.right}>
        <a href="https://so.toutiao.com/?need_open_window=1" className={style.search}></a>
      </div>
      </div>
      </header>
      <main>
      <div className={style.MenuBar}>
      <div className={style.more}>
        <div className={style.shadow}></div>
        <a className={style.moreBtn} href="">
          <span className={style.cross}></span>
        </a>
      </div>
      <div className={style.menuList}>
        <a href="" className={style.select}>推荐</a>
        <a href="" className={style.menuBtn}>视频</a>
        <a href="" className={style.menuBtn}>热点</a>
        <a href="" className={style.menuBtn}>社会</a>
        <a href="" className={style.menuBtn}>娱乐</a>
        <a href="" className={style.menuBtn}>军事</a>
        <a href="" className={style.menuBtn}>科技</a>
        <a href="" className={style.menuBtn}>汽车</a>
        <a href="" className={style.menuBtn}>房产</a>
        <a href="" className={style.menuBtn}>家居</a>
        <a href="" className={style.menuBtn}>体育</a>
        <a href="" className={style.menuBtn}>财经</a>
      </div>
    </div>
        <div className={style.NewsContainer}>
        {state.list.map((i) => {
          return (
            <div className={style.NewsBox}>
              <a href={i.newslink} className={style.link}> 
               <h3 className={style.Newstitle}>{i.newstitle}</h3>
               <div className={style.footer}>
               {i.newstop ?
               <span className={style.Newstop}>{i.newstop}</span>: ""}
               <span>{i.medianame}</span>
               <span>评论 {i.commentnum}</span>
               <span>{i.newstime}</span>
               </div>
              </a>
             </div>
          );
        })}
      </div>
      </main>
    </div>
  )
}
