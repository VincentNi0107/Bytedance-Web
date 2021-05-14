import styles from './header.module.css'

function Header() {
    return (
    <div className={styles.header}>
        <div className={styles.orange_bar}></div>
        <div className={styles.left_nav}>            
            <img src="/WB_logo.png" ></img>      
        </div>
        <div className={styles.searchBox}>
          <input className={styles.searchInput} placeholder="大家都在搜：#字节跳动#"></input>
          <div className={styles.searchIcon}><img src="/search.svg" ></img></div>
        </div>
        <div className={styles.right_nav}>
            <div className={styles.home}>
               
                <a href="#" target="_blank" rel="noopener noreferrer">
                <img  className={styles.icon} src="/home.svg"></img>
                    首页
                </a>
            </div>
            <div className={styles.home}>
               
                <a href="#" target="_blank" rel="noopener noreferrer">
                <img  className={styles.icon} src="/video.svg"></img>
                    视频
                </a>
            </div>
            <div className={styles.home}>
               
                <a href="#" target="_blank" rel="noopener noreferrer">
                <img  className={styles.icon} src="/discover.svg"></img>
                    发现
                </a>
            </div>
            <div className={styles.home}>
                
                <a href="#" target="_blank" rel="noopener noreferrer">
                <img  className={styles.icon} src="/game.svg"></img>
                    游戏
                </a>
            </div>
            <div className={styles.register}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    注册
                </a>
            </div>
            <div className={styles.login}>
                <a href="#" rel="noopener noreferrer">
                    登录
                </a>
            </div>
        </div>
    </div>
    )
}

export default Header
