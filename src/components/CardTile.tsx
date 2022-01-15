import { motion } from "framer-motion";
import deckTile from "../styles/DeckTile.module.css";
import styles from "../styles/CardTile.module.css";

import { ICard } from "../interfaces/ICard";

interface Props extends ICard{
    callBackOnClick: ()=> void;
}

const CardTile = ({prompt,id, callBackOnClick}:Props):JSX.Element =>{
    return (
        <motion.div className={`${deckTile.wrapper} ${styles.wrapper}`} whileHover={{scale:1.07}} onClick={(e)=>{
            e.stopPropagation();
            if(callBackOnClick){
                callBackOnClick();
            }
        }}>
            <h3 className={styles.promptText}>{prompt}</h3>
        </motion.div>
    )
}

export { CardTile };