import styles from "../styles/DeckMetaData.module.css";
import type { IDeckMetaData } from "../Interfaces/IDeckMetaData";
import { Logo } from "../svg/Logo";

interface Props extends IDeckMetaData{
    fade?:boolean;
}

const DeckMetaData = ({subject, title, fade}:Props) =>{
    return(
        <section className={styles.wrapper}>
            <h3 className={styles.subject}>{subject}</h3>
            <h2 style={fade?{color:"var(--c-main-gray)", fontWeight:"400"}:{}} className={styles.title}>{title}</h2>
            <div className={styles.logoWrapper}>
                <Logo svgWidth="30px" fill={"var(--c-main-gray)"} />
            </div>
        </section>
    )
}

export { DeckMetaData };