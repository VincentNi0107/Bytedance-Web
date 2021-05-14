import styles from './left.module.css'
import { useState, useEffect } from 'react'

function LeftItem(item) {
    return (
        <li key={item.tag}>
            <a className={item.tag==='头条' ? styles.channel_item_active : styles.channel_item} href={item.url} rel='noopener noreferrer'>
                {item.tag} 
            </a> 
        </li>
    )
}

function Left({ data }) {
    const [style, setStyle] = useState( styles.left_null )
    useEffect(() => {
        function leftFixer() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0
            if (scrollTop >= 50)
                setStyle(styles.left_fixed)
            else
                setStyle(styles.left_null)
        }

        window.addEventListener('scroll', leftFixer)

        return () => {
            window.removeEventListener('scroll', leftFixer)
        }
    }, [])

    return (
        <div className={styles.left}>
            <div className={styles.channel_nav}>
                 <ul id={styles.channel_ul}>
                    { data.map((item) => LeftItem(item)) }
                </ul>
            </div>
        </div>
    )
}

export default Left
