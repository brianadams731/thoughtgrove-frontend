import { motion } from "framer-motion";
import deckTile from "../styles/DeckTile.module.css";
import styles from "../styles/CardTile.module.css";

import type { ICardTile } from "../interfaces/ICardTile";

interface Props extends ICardTile{
    callBackOnClick: ()=> void;
}

const CardTile = ({prompt,cardID, callBackOnClick}:Props):JSX.Element =>{
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