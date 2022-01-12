import styles from "../styles/NewDeckCard.module.css";
import cardBase from "../styles/CardBase.module.css";
import { motion } from "framer-motion";
import { Logo } from "../svg/Logo";
import { BasicCardInput } from "./BasicCardInput";
import { useState } from "react";
import { BasicCardTextArea } from "./BasicCardTextArea";

const NewDeckCard = () =>{
    const [subject, setSubject] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <motion.div initial={{scale:0}} animate={{scale:1}} exit={{y:"-75vh"}} transition={{duration: .5, delay:.4}}className={`${styles.cardWrapper} ${cardBase.wrapper}`}>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(subject);
                console.log(title);
                console.log(description);
            }}>
                <div className={styles.cardMetaData}>
                    <div className={styles.subjectInput}>
                        <BasicCardInput title="Subject" value={subject} updateValue={setSubject} />
                    </div>

                    <div className={styles.titleInput}>
                        <BasicCardInput title="Title" value={title} updateValue={setTitle} />
                    </div>
                    <Logo fill="var(--c-main-gray)" svgWidth="25px"/>
                </div>
                
                <div className={styles.descriptionTextArea}>
                    <BasicCardTextArea title="Description" value={description} updateValue={setDescription} />
                </div>
                <div className={styles.btnWrapper}>
                    <button  className={styles.submitBtn} type="submit">Save</button>
                </div>

            </form>
        </motion.div>
    )
}

export { NewDeckCard };