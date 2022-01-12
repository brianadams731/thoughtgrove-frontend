import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IDeckTile } from "../interfaces/IDeckTile";
import styles from "../styles/DeckTile.module.css";
import { CogIcon } from "../svg/CogIcon";
import { Logo } from "../svg/Logo";

interface Props extends IDeckTile{
    showEditIcon?:boolean;
    suppressOnClick?:boolean;
}

const DeckTile = ({subject,title,votes, deckID, showEditIcon, suppressOnClick}:Props):JSX.Element =>{
    const navigate = useNavigate();
    return (
        <motion.div className={styles.wrapper} onClick={()=>{
            if(suppressOnClick){
                return;
            }
            navigate(`/dashboard/deck/${deckID}`)
        }} whileHover={{scale:1.07}}>
            <div className={styles.mainContent}>
                <div className={styles.textBox}>
                    <h3 className={styles.subject}>{subject}</h3>
                    <h1 className={styles.title}>{title}</h1>
                </div>
                {showEditIcon&&
                <motion.div className={styles.editWrapper} initial={{fill:"var(--c-main-gray)"}} whileHover={{fill:"var(--c-logo-accent)"}} onClick={(e)=>{
                    e.stopPropagation();
                    navigate(`/dashboard/deck/edit/${deckID}`)
                }}>
                    <CogIcon height="30px"/>
                </motion.div>}
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