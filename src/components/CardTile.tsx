import { motion } from "framer-motion";
import deckTile from "../styles/DeckTile.module.css";
import styles from "../styles/CardTile.module.css";

interface Props{
    prompt:string;
    cardID:number;
}

const DeckTile = ({prompt,cardID}:Props):JSX.Element =>{
    return (
        <motion.div className={`${deckTile.wrapper} ${styles.wrapper}`} onClick={()=>{console.log(cardID)}} whileHover={{scale:1.07}}>
            <h3 className={styles.promptText}>{prompt}</h3>
        </motion.div>
    )
}

export { DeckTile };