import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IDeckTile } from "../interfaces/IDeckTile";
import styles from "../styles/DeckTile.module.css";
import { Logo } from "../svg/Logo";

const DeckTile = ({subject,title,votes, deckID}:IDeckTile):JSX.Element =>{
    const navigate = useNavigate();
    return (
        <motion.div className={styles.wrapper} onClick={()=>{navigate(`deck/${deckID}`)}} whileHover={{scale:1.07}}>
            <div className={styles.textBox}>
                <h3 className={styles.subject}>{subject}</h3>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.logoVoteBox}>
                <div className={styles.svgWrapper}>
                    <Logo fill="var(--c-main-gray)" svgWidth="30px"/>
                </div>
                <h3 className={styles.votes}>{votes}</h3>
            </div>
        </motion.div>
    )
}

export { DeckTile };