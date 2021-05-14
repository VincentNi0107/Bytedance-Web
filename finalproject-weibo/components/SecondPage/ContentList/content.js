import styles from './content.module.css'

import Image from 'next/image'
import Link from 'next/link'




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
            </div>
            <div className={styles.abstract}>
                {item.abstract}
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
