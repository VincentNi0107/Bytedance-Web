import styles from './right.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'

function Right() {
    const [style, setStyle] = useState(styles.left_null)
    useEffect(() => {
        function leftFixer() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0
            if (scrollTop >= 92)
                setStyle(styles.go_top)
            else
                setStyle(styles.go_top_hid)
        }

        window.addEventListener('scroll', leftFixer)

        return () => {
            window.removeEventListener('scroll', leftFixer)
        }
    }, [])

    return (
        <div className={styles.tools_wrapper}>
            <div className={styles.top_fixed}>
                <ul className={styles.share_tools}>
                    <li>
                        <div className={styles.weibo}>
                            <img src="/weibo_grey.svg"></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles.qq}>
                            <img src="/qq_grey.svg"></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles.back}>
                            <a href="#top" target="_self">
                                <img src="/gotop.svg" className={style}></img>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Right
