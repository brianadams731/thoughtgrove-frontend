import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditFocusKind } from "../interfaces/EditFocusKind";
import { IDeck } from "../interfaces/IDeck";
import styles from "../styles/DeleteDeckConfirmation.module.css";
import { APIRoute } from "../utils/APIRoute";
import { deleteDataAsync } from "../utils/deleteData";
import { BasicCardInput } from "./BasicCardInput";

interface Props{
    existingDeckData:IDeck;
    setEditState: Dispatch<SetStateAction<EditFocusKind>>;
    editState: EditFocusKind;
}

const DeleteDeckConfirmation = ({existingDeckData, setEditState, editState}:Props) =>{
    const [deleteDeckString, setDeleteDeckString] = useState<string>("");
    const [canDelete, setCanDelete] = useState<boolean>(false)
    const navigate = useNavigate();

    useEffect(()=>{
        setCanDelete(deleteDeckString === existingDeckData.title)
    },[deleteDeckString, existingDeckData])

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

    const deleteVariants = {
        initial:{
            backgroundColor:"var(--c-main-gray)"
        },
        animate:{
            backgroundColor:"var(--c-achievement-orange)"
        },
        whileTap:{
            backgroundColor:"var(--c-light-red)", 
            scale:.95
        },
        whileHover:{
            scale:1.05
        }
    }

    return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className={styles.wrapper}>
            <p>To delete the {existingDeckData.title} deck, type <span className={styles.confirmationString}>{existingDeckData.title}</span> in the input below</p>
            <div className={styles.inputWrapper}>
                <BasicCardInput value={deleteDeckString} updateValue={setDeleteDeckString} />
            </div>
            <div className={styles.btnWrapper}>
                <motion.button variants={deleteVariants} className={styles.deleteBtn}
                initial="initial" 
                animate={canDelete?"animate":""}
                whileTap={canDelete?"whileTap":""}
                whileHover={canDelete?"whileHover":""} 
                onClick={async ()=>{
                    if(editState !== EditFocusKind.DeleteDeck){
                        setEditState(EditFocusKind.None);
                        return;
                    }
                    if(!canDelete){
                        return;
                    }
                    await deleteDataAsync(`${APIRoute.DeckByID}/${existingDeckData.id}`);
                    navigate("/dashboard")
                }}>DELETE DECK</motion.button>
                <button className={styles.cancelBtn} onClick={()=>setEditState(EditFocusKind.None)}>Cancel</button>
            </div>
        </motion.div>
    )
}

export {DeleteDeckConfirmation}