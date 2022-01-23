import styles from "../styles/DeckTop.module.css";
import cardBase from "../styles/CardBase.module.css";

import { Votes } from "./Votes";
import { CommentIcon } from "../svg/CommentIcon";
import { motion } from "framer-motion";
import { DeckMetaData } from "./DeckMetaData";
import { Dispatch, SetStateAction } from "react";
import { useDeckByID } from "../hooks/api/useDeckByID";

interface Props{
    deckID:number;
    setShowComment:Dispatch<SetStateAction<boolean>>;
    setShowDeckTop: Dispatch<SetStateAction<boolean>>;
}

const DeckTop = ({deckID, setShowDeckTop, setShowComment}:Props):JSX.Element =>{
    
    const {deckData} = useDeckByID(deckID);
    return (
        <motion.article exit={{x:"-75vw", rotate:"-12deg"}} transition={{mass:.4, duration:.8}} className={`${styles.wrapper} ${cardBase.wrapper}`}>
            <div className={styles.dataWrapper}>
                <DeckMetaData subject={deckData.subject} title={deckData.title} />
                <Votes deckID={deckID}/>
            </div>

            <section className={styles.descriptionWrapper}>
                <h3 className={styles.descriptionTitle}>Description</h3>
                <p className={styles.description}>{deckData.description}</p>
            </section>
            <button className={styles.practiceBtn} onClick={()=>{
                setShowDeckTop(false);
            }}>Practice</button>
            <motion.div whileHover={{scale:1.1}} whileTap={{scale:1}} className={styles.commentIconWrapper} onClick={(e)=>{
                setShowComment(prev => !prev);
            }}>
                <CommentIcon fill="var(--c-main-gray)" hoverFill="var(--c-achievement-blue)" width="40px" />
            </motion.div>
        </motion.article>
    )
}

export { DeckTop }