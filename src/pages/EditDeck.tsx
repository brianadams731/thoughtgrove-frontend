import { AnimatePresence } from "framer-motion";
import { NewCardPlain } from "../components/NewCardPlain";
import { NewDeckCard } from "../components/NewDeckCard";
import styles from "../styles/EditDeck.module.css";

const EditDeck = ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <AnimatePresence>
                <NewCardPlain />
                <NewDeckCard />
            </AnimatePresence>
        </div>
    )
}

export { EditDeck };