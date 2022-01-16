import styles from "../styles/NewDeckCard.module.css";
import cardBase from "../styles/CardBase.module.css";
import { motion } from "framer-motion";
import { Logo } from "../svg/Logo";
import { BasicCardInput } from "./BasicCardInput";
import { Dispatch, SetStateAction, useState } from "react";
import { BasicCardTextArea } from "./BasicCardTextArea";
import { EditFocusKind } from "../interfaces/EditFocusKind";
import { IDeck } from "../interfaces/IDeck";
import { postDataAsync } from "../utils/postData";
import { APIRoute } from "../utils/APIRoute";
import { useNavigate } from "react-router-dom";

interface Props{
    setEditState?: Dispatch<SetStateAction<EditFocusKind>>;
    editState: EditFocusKind;
    existingDeckData?: IDeck;
}
const NewDeckCard = ({editState, setEditState, existingDeckData}:Props) =>{
    // USE DATA FROM CACHE AS DEFAULT
    const [subject, setSubject] = useState<string>(existingDeckData?existingDeckData.subject:"");
    const [title, setTitle] = useState<string>(existingDeckData?existingDeckData.title:"");
    const [description, setDescription] = useState<string>(existingDeckData?existingDeckData.description:"");
    const [isPublic, setPublic] = useState<boolean>(true);
    const navigate = useNavigate();

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

                }else if(editState === EditFocusKind.NewDeck){
                    const res = await postDataAsync(APIRoute.AddDeck, {
                        title,
                        subject,
                        description,
                        public: isPublic
                    });
                    if(res.id){
                        navigate(`/dashboard/deck/edit/${res.id}`)
                    }else{
                        console.log("ERROR DECK NOT CREATED")
                    }
                }
                // MUTATE CACHE SYNCHRONOUSLY HERE WITH UPDATE VALUE, THEN THE SUBMIT WILL HAPPEN FROM THE OUTSIDE
                if(setEditState){
                    setEditState(EditFocusKind.None)
                }
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