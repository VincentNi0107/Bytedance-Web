import styles from './content.module.css'

import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'


function aggregate(number) {
    if (number === undefined)
        return 0
    if (number >= 1e4)
        return Math.floor(number / 1e4) + '万'
    return number
}

function title(title) {
    return (
        <div className={styles.title}>
            <Link href="/secondpage"><a>{ title }</a></Link>
        </div>
    )
}
function contentbox(item) {
    return (
        <div className={styles.content_card}>
            <div className={styles.content_image}>
                <a>
                    <Image src={item.image_url} alt={item.title} width={158} height={103}/>
                </a>
            </div>
            <div className={styles.content_text_card_with_image}>

                {title(item.title)}

                <div className={styles.content_foot}>
                    <a className={styles.avatar} >
                        <Image src={item.media_avatar_url} alt='avatar' width={18} height={18}/>
                    </a>
                    <a>&nbsp;{ item.source }&nbsp;</a>
                    <span>&nbsp;{ (item.time) }</span>     
                </div>
                <div className={styles.comment}>
                    
                    <a className={styles.rightborder}><img src='/transfer.svg'></img>&nbsp;{aggregate(item.transfer_count)}&nbsp;</a>  
                    <a className={styles.rightborder}><img src='/comment.svg'></img>&nbsp;{aggregate(item.comments_count)}&nbsp;</a>  
                    <a><img src='/like.svg'></img>&nbsp;{aggregate(item.like_count) }&nbsp;</a>  
                </div>
            </div>
        </div>
    )
    }
function Content({ list }) {
    return (
        <div className={styles.center}>
            <div className={styles.content}>
                <ul id={styles.content_list}>
                { list.map((item) => (
                    <li> { contentbox(item) } </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default  Content
