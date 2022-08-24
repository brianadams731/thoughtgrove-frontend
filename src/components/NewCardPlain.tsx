import styles from "../styles/NewCardPlain.module.css";
import cardBase from "../styles/CardBase.module.css";
import { DeckMetaData } from "./DeckMetaData";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { BasicCardTextArea } from "./BasicCardTextArea";
import { motion } from "framer-motion";
import { EditFocusKind } from "../interfaces/EditFocusKind";
import { APIRoute } from "../utils/APIRoute";
import { postDataAsync } from "../utils/postData";
import { TrashCan } from "../svg/TrashCan";
import { deleteDataAsync } from "../utils/deleteData";
import { useCardsByDeckID } from "../hooks/api/useCardsByDeckID";
import { patchDataAsync } from "../utils/patchData";
import { useDeckByID } from "../hooks/api/useDeckByID";

interface Props{
    setEditState: Dispatch<SetStateAction<EditFocusKind>>;
    editState: EditFocusKind;
    deckId:number;
    cardId?:number;
}

const NewCardPlain = ({editState ,setEditState, deckId, cardId}:Props):JSX.Element =>{
    const {cardData, mutateCards} = useCardsByDeckID(deckId);
    const {deckData} = useDeckByID(deckId);
    const cardIndex = useRef<number>(cardData.cards.findIndex(item => item.id === cardId))

    const [prompt, setPrompt] = useState(cardIndex.current>=0 && cardData?.cards[cardIndex.current!]?.prompt ? cardData.cards[cardIndex.current!].prompt:"");
    const [answer, setAnswer] = useState(cardIndex.current>=0 && cardData?.cards[cardIndex.current]?.answer ? cardData.cards[cardIndex.current].answer:"");


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

    return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className={`${cardBase.wrapper} ${styles.cardWrapper}`}>
            <div className={styles.deckTop}>
                <DeckMetaData subject={deckData.subject} title={deckData.title} fade/>
                {editState === EditFocusKind.EditCard && <motion.div initial={{fill:"var(--c-main-gray)"}} whileHover={{fill:"var(--c-achievement-orange)", scale:1.1, cursor:"pointer"}} whileTap={{fill:"var(--c-black)", scale:1}} transition={{duration:.3}} className={styles.trash} onClick={async ()=>{
                    if(editState !== EditFocusKind.EditCard){
                        setEditState(EditFocusKind.None)
                        return;
                    }
                    debugger;
                    await deleteDataAsync(`${APIRoute.CardByID}/${cardId}`);
                    mutateCards({
                        ...cardData,
                        cards: cardData.cards.filter((_,index) => index !== cardIndex.current),
                    })
                    setEditState(EditFocusKind.None);
                }}>
                    <TrashCan height="30px"/>
                </motion.div>}
            </div>
            <form onSubmit={async (e)=>{
                e.preventDefault();
                if(editState === EditFocusKind.EditCard){
                    mutateCards({
                        ...cardData,
                        cards:[...cardData.cards.filter((_,index) => index !== cardIndex.current), {
                            id:cardId,
                            prompt,
                            answer
                        }]
                    }, false);
                    await patchDataAsync(`${APIRoute.CardByID}/${cardId}`,{
                        prompt,
                        answer
                    })
                    mutateCards();
                }else if(editState === EditFocusKind.NewCard){
                    await postDataAsync(`${APIRoute.CardsByDeckID}/${deckId}`,{
                        prompt,
                        answer
                    })
                    mutateCards()
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