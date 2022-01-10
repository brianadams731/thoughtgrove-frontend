import styles from "../styles/DeckMetaData.module.css";
import type { IDeckMetaData } from "../Interfaces/IDeckMetaData";
import { Logo } from "../svg/Logo";


const DeckMetaData = ({subject, title}:IDeckMetaData) =>{
    return(
        <section className={styles.wrapper}>
            <h3 className={styles.subject}>{subject}</h3>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.logoWrapper}>
                <Logo svgWidth="30px" fill={"var(--c-main-gray)"} />
            </div>
        </section>
    )
}

export { DeckMetaData };