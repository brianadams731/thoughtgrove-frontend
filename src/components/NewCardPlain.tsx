import styles from "../styles/NewCardPlain.module.css";
import cardBase from "../styles/CardBase.module.css";
import { DeckMetaData } from "./DeckMetaData";
import { IDeckMetaData } from "../interfaces/IDeckMetaData";
import { useState } from "react";
import { BasicCardTextArea } from "./BasicCardTextArea";
import { motion } from "framer-motion";

const NewCardPlain = ():JSX.Element =>{
    const mockDeckMetaData:IDeckMetaData = {
        subject: "Language",
        title:"French 1"
    }

    const variants = {
        initial:{
            y:"-50%", 
            x:"125vw",
        },
        animate:{
            y:"-50%",
            x:"-50%",
            transition:{
                duration: .7,
            }
        },
        exit:{
            y:"-50%",
            x:"-125vw",
            transition:{
                duration: .7,
            }
        }
    }

    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");

    return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className={`${cardBase.wrapper} ${styles.cardWrapper}`}>
            <DeckMetaData subject={mockDeckMetaData.subject} title={mockDeckMetaData.title} fade/>
            <form onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <div className={styles.textArea}>
                    <BasicCardTextArea value={prompt} updateValue={setPrompt} title="Prompt"/>
                </div>
                <div className={styles.textArea}>
                    <BasicCardTextArea value={answer} updateValue={setAnswer} title="Answer"/>
                </div>
                <div className={styles.saveBtnWrapper}>
                    <button className={styles.saveBtn} type="submit">Save</button>
                </div>
            </form>
        </motion.div>
    )
}

export { NewCardPlain };