import styles from "../styles/NewDeckCard.module.css";
import cardBase from "../styles/CardBase.module.css";
import { motion } from "framer-motion";
import { Logo } from "../svg/Logo";
import { BasicCardInput } from "./BasicCardInput";
import { Dispatch, useState } from "react";
import { BasicCardTextArea } from "./BasicCardTextArea";
import { EditFocusAction, EditFocusKind } from "../interfaces/EditFocusReducer";

interface Props{
    dispatch: Dispatch<EditFocusAction>;
    prefill?:{
        subject: string,
        title: string,
        description: string,
    }
}
const NewDeckCard = ({dispatch, prefill}:Props) =>{
    // USE DATA FROM CACHE AS DEFAULT
    const [subject, setSubject] = useState(prefill?prefill.subject:"");
    const [title, setTitle] = useState(prefill?prefill.title:"");
    const [description, setDescription] = useState(prefill?prefill.description:"");

    const variants = {
        initial:{
            scale:0, 
            y:"-50%", 
            x:"-50%",
        },
        animate:{
            scale:1,
            y:"-50%",
            x:"-50%",
            transition:{
                duration: .5,
                delay:.3,
            }
        },
        exit:{
            y:"-125vh",
            x:"-50%",
            transition:{
                duration: .5,
            }
        }
    }

    return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className={`${styles.cardWrapper} ${cardBase.wrapper}`}>
            <form onSubmit={(e)=>{
                e.preventDefault();
                // MUTATE CACHE SYNCHRONOUSLY HERE WITH UPDATE VALUE, THEN THE SUBMIT WILL HAPPEN FROM THE OUTSIDE
                dispatch({type:EditFocusKind.Submit, payload:{
                    deckData:{
                        subject,
                        title,
                        description
                    }
                }})
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