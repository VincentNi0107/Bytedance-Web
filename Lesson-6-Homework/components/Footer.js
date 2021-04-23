import styles from "./Footer.module.css"
export default function FootBar(){
    return(

        <div className={styles.footBar}>
            <div className={styles.song}>
                <img className={styles.footImage} src="https://unsplash.it/200"/>
                <div>
                    <p className={styles.word}>If It Ain't Love</p>
                    <p className={styles.word}>Catson Derulo</p>
                </div>
            </div>
            <div className={styles.control}>
                <i className="fa fa-step-backward"/>
                <i className="fa fa-pause"/>
                <i className="fa fa-step-forward"/>
                <i className="fa fa-rotate-right sm-hide"/>
                <i className="fa fa-random sm-hide"/>
            </div>

        </div>
    )
}