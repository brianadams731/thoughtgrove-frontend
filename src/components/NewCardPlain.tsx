import styles from "../styles/NewCardPlain.module.css";
import cardBase from "../styles/CardBase.module.css";
import { DeckMetaData } from "./DeckMetaData";
import { IDeckMetaData } from "../interfaces/IDeckMetaData";
import { useState } from "react";
import { BasicCardTextArea } from "./BasicCardTextArea";

const NewCardPlain = ():JSX.Element =>{
    const mockDeckMetaData:IDeckMetaData = {
        subject: "Language",
        title:"French 1"
    }
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");

    return (
        <div className={`${cardBase.wrapper} ${styles.cardWrapper}`}>
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
        </div>
    )
}

export { NewCardPlain };