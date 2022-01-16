import styles from "../styles/NewCardPlain.module.css";
import cardBase from "../styles/CardBase.module.css";
import { DeckMetaData } from "./DeckMetaData";
import { IDeckMetaData } from "../interfaces/IDeckMetaData";
import { Dispatch, SetStateAction, useState } from "react";
import { BasicCardTextArea } from "./BasicCardTextArea";
import { motion } from "framer-motion";
import { EditFocusKind } from "../interfaces/EditFocusKind";
import { ICard } from "../interfaces/ICard";
import { APIRoute } from "../utils/APIRoute";
import { postDataAsync } from "../utils/postData";
import { TrashCan } from "../svg/TrashCan";
import { deleteDataAsync } from "../utils/deleteData";
import { useCardsByDeckID } from "../hooks/api/useCardsByDeckID";

interface Props{
    setEditState: Dispatch<SetStateAction<EditFocusKind>>;
    editState: EditFocusKind;
    existingCardData?: ICard;
    deckId:number;
}

const NewCardPlain = ({editState ,setEditState, existingCardData, deckId}:Props):JSX.Element =>{
    const {cardData, mutateCards} = useCardsByDeckID(deckId);
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

    // USE VALUE FROM CACHE
    const [prompt, setPrompt] = useState(existingCardData?existingCardData.prompt:"");
    const [answer, setAnswer] = useState(existingCardData?existingCardData.answer:"");

    return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className={`${cardBase.wrapper} ${styles.cardWrapper}`}>
            <div className={styles.deckTop}>
                <DeckMetaData subject={mockDeckMetaData.subject} title={mockDeckMetaData.title} fade/>
                {editState === EditFocusKind.EditCard && <motion.div initial={{fill:"var(--c-main-gray)"}} whileHover={{fill:"var(--c-achievement-orange)", scale:1.1, cursor:"pointer"}} whileTap={{fill:"var(--c-black)", scale:1}} transition={{duration:.3}} className={styles.trash} onClick={async ()=>{
                    if(editState !== EditFocusKind.EditCard){
                        setEditState(EditFocusKind.None)
                        return;
                    }
                    await deleteDataAsync(`${APIRoute.CardByID}/${existingCardData?.id}`);
                    mutateCards({
                        ...cardData,
                        cards: cardData.cards.filter((item) => item.id !== existingCardData?.id),
                    })
                    setEditState(EditFocusKind.None)
                }}>
                    <TrashCan height="30px"/>
                </motion.div>}
            </div>
            <form onSubmit={async (e)=>{
                e.preventDefault();
                if(editState === EditFocusKind.EditCard){

                }else if(editState === EditFocusKind.NewCard){
                    const res = await postDataAsync(`${APIRoute.CardsByDeckID}/${deckId}`,{
                        prompt,
                        answer
                    })
                    mutateCards({
                        ...cardData,
                        cards: [...cardData.cards, res],
                    })
                }
                setEditState(EditFocusKind.None)
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