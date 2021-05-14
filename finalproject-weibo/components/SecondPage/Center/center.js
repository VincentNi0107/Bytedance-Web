import styles from './center.module.css'

import Article from '../Article/article'
import Content from '../ContentList/content'
function aggregate(number) {
    if (number === undefined)
        return 0
    if (number >= 1e4)
        return Math.floor(number / 1e4) + '万'
    return number
}

function Center({ data, list }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrap_img}>
                 <img src={data.first_img} className={styles.first_img}></img>
            </div> 
            <Article data={data}/>
            <div className={styles.feed_wrapper}>
                <div className={styles.feed}>
                    <p className={styles.subtitle}>推荐阅读</p>
                    <Content list={list}/>
                    <div className={styles.more}>
                         <a>换一换，查看更多</a>
                    </div>
                    <div className={styles.bottom}>
                        <a className={styles.rightborder}>
                            评论 {aggregate(data.comment)}
                        </a>
                        <a className={styles.rightborder}>
                            转发 {aggregate(data.transfer)}
                         </a>
                        <a>
                            <img src="/like.svg"></img>
                            {aggregate(data.like)}
                         </a> 
                     </div>
                </div>
            </div>

        </div>
    )
}

export default Center