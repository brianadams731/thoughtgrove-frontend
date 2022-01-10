import styles from "../styles/DeckTop.module.css";
import cardBase from "../styles/CardBase.module.css";

import { Votes } from "./Votes";
import type { IDeckTop } from "../Interfaces/IDeckTop";
import { CommentIcon } from "../svg/CommentIcon";
import { motion } from "framer-motion";
import { DeckMetaData } from "./DeckMetaData";

const DeckTop = ({deckMetaData, description, vote}:IDeckTop):JSX.Element =>{
    return (
        <article className={`${styles.wrapper} ${cardBase.wrapper}`}>
            <div className={styles.dataWrapper}>
                <DeckMetaData subject={deckMetaData.subject} title={deckMetaData.title} />
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