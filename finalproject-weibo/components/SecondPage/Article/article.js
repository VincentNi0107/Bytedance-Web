import styles from './article.module.css'
import ReactHtmlParser from 'react-html-parser'


function Article({ data }) {
    return (
        <div className={styles.article_wrapper}>
            <h1>{ data.title }</h1>
            <div className={styles.article_meta}>
                <img src={data.author_img} className={styles.tag}></img>
                <span className={styles.border_right}>{ data.author }</span>
                <span className={styles.border_right}>{ data.hot_time }</span>
                <span className={styles.border_right}><a>投诉</a></span>
                <span><a>查看源网址</a></span>
                <span className={styles.read_num}>阅读数：{data.read_num}</span>
            </div>
            <article className={styles.article_content}>
                { ReactHtmlParser(data.content) }
            </article>
            <div className={styles.author}>
                <div className={styles.box_pic}>
                    <img src={data.author_img}></img>
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>
                        <a>澎湃新闻</a>
                    </div>
                    <div className={styles.describe}>
                        <a>有内涵的时尚新媒体</a>
                    </div>   
                </div>
                <div className={styles.focus}>
                    <a><span>&#43;</span>关注</a>
                </div>
            </div>
        </div>
    )
}

export default Article
