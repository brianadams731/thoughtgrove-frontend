import { Logo } from "../svg/Logo";
import styles from "../styles/DeckTop.module.css";
import { Votes } from "./Votes";
import type { IDeckTop } from "../Interfaces/IDeckTop";
import { CommentIcon } from "../svg/CommentIcon";
import { motion } from "framer-motion";

const DeckTop = ({subject, title, description, vote}:IDeckTop):JSX.Element =>{
    return (
        <article className={styles.wrapper}>
            <div className={styles.dataWrapper}>
                <section className={styles.metaData}>
                    <h3 className={styles.subject}>{subject}</h3>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.logoWrapper}>
                        <Logo svgWidth="30px" fill={"var(--c-main-gray)"} />
                    </div>
                </section>
                <Votes numberOfVotes={vote.numberOfVotes} hasUpVoted={vote.hasUpVoted}/>
            </div>

            <section className={styles.descriptionWrapper}>
                <h3 className={styles.descriptionTitle}>Description</h3>
                <p className={styles.description}>{description}</p>
            </section>
            <button className={styles.practiceBtn}>Practice</button>
            <motion.div whileHover={{scale:1.1}} whileTap={{scale:1}} className={styles.commentIconWrapper}>
                <CommentIcon fill="var(--c-main-gray)" hoverFill="var(--c-achievement-blue)" width="40px" />
            </motion.div>
        </article>
    )
}

export { DeckTop }