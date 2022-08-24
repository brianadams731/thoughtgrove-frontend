import styles from "../styles/NewDeckCard.module.css";
import cardBase from "../styles/CardBase.module.css";
import { motion } from "framer-motion";
import { Logo } from "../svg/Logo";
import { BasicCardInput } from "./BasicCardInput";
import {  useState } from "react";
import { BasicCardTextArea } from "./BasicCardTextArea";
import { postDataAsync } from "../utils/postData";
import { APIRoute } from "../utils/APIRoute";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "../stores/toastStore";

const NewDeckCard = () =>{
    const [subject, setSubject] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    // TODO: ADD SET PUBLIC FIELD 
    const [isPublic] = useState<boolean>(true);
    const navigate = useNavigate();

    const addToasts = useToastStore(state => state.addToasts);


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
                if(!subject || !title){
                    if(!subject){
                        addToasts({subject:"Error", description:"Add a subject"});
                    }
                    if(!title){
                        addToasts({subject:"Error", description:"Add a title"});
                    }
                    return;
                }
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
