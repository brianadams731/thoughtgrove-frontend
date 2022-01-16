import styles from "../styles/NewDeckCard.module.css";
import cardBase from "../styles/CardBase.module.css";
import { motion } from "framer-motion";
import { Logo } from "../svg/Logo";
import { BasicCardInput } from "./BasicCardInput";
import { Dispatch, SetStateAction, useState } from "react";
import { BasicCardTextArea } from "./BasicCardTextArea";
import { EditFocusKind } from "../interfaces/EditFocusKind";
import { APIRoute } from "../utils/APIRoute";
import { patchDataAsync } from "../utils/patchData";
import { useDeckByID } from "../hooks/api/useDeckByID";

interface Props{
    deckId:number;
    setEditState: Dispatch<SetStateAction<EditFocusKind>>;
    editState: EditFocusKind;
}
const EditDeckCard = ({deckId,editState, setEditState}:Props) =>{
    const {deckData, mutateDeck} = useDeckByID(deckId);
    const [subject, setSubject] = useState<string>(deckData.subject);
    const [title, setTitle] = useState<string>(deckData.title);
    const [description, setDescription] = useState<string>(deckData.description);
    // TODO: ADD SET PUBLIC FIELD 
    const [isPublic] = useState<boolean>(true);

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
            <form onSubmit={async (e)=>{
                e.preventDefault();
                if(editState === EditFocusKind.EditDeck){
                    await patchDataAsync(`${APIRoute.DeckByID}/${deckId}`,{
                        subject,
                        title,
                        description,
                        public: isPublic
                    })
                    mutateDeck();
                }
                setEditState(EditFocusKind.None)
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

export { EditDeckCard };