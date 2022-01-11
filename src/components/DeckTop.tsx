import styles from "../styles/DeckTop.module.css";
import cardBase from "../styles/CardBase.module.css";

import { Votes } from "./Votes";
import type { IDeckTop } from "../interfaces/IDeckTop";
import { CommentIcon } from "../svg/CommentIcon";
import { motion } from "framer-motion";
import { DeckMetaData } from "./DeckMetaData";
import { Dispatch, SetStateAction } from "react";

interface Props extends IDeckTop{
    setShowDeckTop: Dispatch<SetStateAction<boolean>>;
}

const DeckTop = ({deckMetaData, description, vote, setShowDeckTop}:Props):JSX.Element =>{
    return (
        <motion.article exit={{x:"-75vw", rotate:"-12deg"}} transition={{mass:.4, duration:.8}} className={`${styles.wrapper} ${cardBase.wrapper}`}>
            <div className={styles.dataWrapper}>
                <DeckMetaData subject={deckMetaData.subject} title={deckMetaData.title} />
                <Votes numberOfVotes={vote.numberOfVotes} hasUpVoted={vote.hasUpVoted}/>
            </div>

            <section className={styles.descriptionWrapper}>
                <h3 className={styles.descriptionTitle}>Description</h3>
                <p className={styles.description}>{description}</p>
            </section>
            <button className={styles.practiceBtn} onClick={()=>{
                setShowDeckTop(false);
            }}>Practice</button>
            <motion.div whileHover={{scale:1.1}} whileTap={{scale:1}} className={styles.commentIconWrapper}>
                <CommentIcon fill="var(--c-main-gray)" hoverFill="var(--c-achievement-blue)" width="40px" />
            </motion.div>
        </motion.article>
    )
}

export { DeckTop }