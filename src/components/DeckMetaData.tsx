import styles from "../styles/DeckMetaData.module.css";
import type { IDeckMetaData } from "../Interfaces/IDeckMetaData";
import { Logo } from "../svg/Logo";
import { CorrectIcon } from "../svg/CorrectIcon";
import { WrongIcon } from "../svg/WrongIcon";

const DeckMetaData = ({subject, title}:IDeckMetaData) =>{
    return(
        <section className={styles.wrapper}>
            <h3 className={styles.subject}>{subject}</h3>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.logoWrapper}>
                <Logo svgWidth="30px" fill={"var(--c-main-gray)"} />
            </div>
            <CorrectIcon height="50px" fill="var(--c-main-gray)" hoverFill="var(--c-achievement-green)" />
            <WrongIcon width="50px" fill="var(--c-main-gray)" hoverFill="var(--c-achievement-orange)" />
        </section>
    )
}

export { DeckMetaData };