import styles from './login.module.css'

function LoginCard() {
    return (
        <div className={styles.login}>
            <div className={styles.login_card}>
                <a className={styles.login_msg}>
                   账号登录
                </a>
                <a className={styles.login_msg2}>
                   安全登录
                </a>
                <div className={styles.search_bar}>
                     <input className={styles.search_input} type="text" placeholder="邮箱/会员账号/手机号"/>       
                </div>
                <div className={styles.search_bar}>
                     <input className={styles.search_input} type="text" placeholder="请输入密码"/>       
                </div>
                <div  className={styles.checkbox}>
                    <input type="checkbox" checked="checked"></input>
                    <span >记住我</span>
                </div>
                <div  className={styles.forget}>
                    <span >忘记密码？</span>
                </div>
                <a >
                    <button className={styles.login_btn} type="button">登录</button>
                </a>
                <div className={styles.notre}>
                    <span className={styles.notre1}>还没有微博？</span><a className={styles.notre2}>立即注册!</a>
                </div>
                <div className={styles.otherlogin}>
                    <span className={styles.otherlogin1}>其他登录:</span>
                    <img src='/otherlogin.png'></img>
                </div>
            </div>
        </div>
    )
}

export default LoginCard
