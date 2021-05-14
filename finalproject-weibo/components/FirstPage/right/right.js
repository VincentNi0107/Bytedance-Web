import styles from './right.module.css'
import LoginCard from './login'
function aggregate(number) {
    if (number === undefined)
        return 0
    if (number >= 1e4)
        return Math.floor(number / 1e4) + '万'
    return number
}
function links(item) {
    return (
        <div className={styles.hot}>
            <img src={item.imgsrc}></img>
            <div class={styles.hottopic}>
                <h3>{item.title}</h3>
                <div class={styles.hottext}>{aggregate(item.read)}阅读        {aggregate(item.discuss)}讨论</div>
            </div>
        </div>
    )
}

function Right({ hottopiclist }) {
    return (
        <div className={styles.right}>
            <LoginCard/>      
            <div className={styles.hottop}>
                <div className={styles.hot_card}>
                    <div className={styles.hot_header}>微博热门话题</div>
                    <div className={styles.hot_links}>{hottopiclist.map((item) => links(item))}</div>
                    <div className={styles.more}><a>查看更多</a></div>
                </div>
            </div>
        </div>
    )
}

export default Right
