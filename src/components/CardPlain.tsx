import cardBase from "../styles/CardBase.module.css";
import styles from "../styles/CardPlain.module.css";

import { ICardPlain } from "../interfaces/ICardPlain";
import { DeckMetaData } from "./DeckMetaData";
import { CorrectIcon } from "../svg/CorrectIcon";
import { WrongIcon } from "../svg/WrongIcon";
import { Dispatch, useState } from "react";
import { motion } from "framer-motion";

import { CardAction, CardActionKind } from "../interfaces/CardReducer";
import { IDeckMetaData } from "../interfaces/IDeckMetaData";


interface Props extends ICardPlain{
    deckMetaData?: IDeckMetaData|undefined;
    cardIndex: number;
    dispatch: Dispatch<CardAction>;
}

const CardPlain = ({prompt, answer, deckMetaData, dispatch, cardIndex}:Props):JSX.Element =>{
    const [shouldFlip,setShouldFlip] = useState<boolean>(false);
    const [cardCorrect, setCardCorrect] = useState<boolean>(false)

    const formatIndexNumber = (index:number):string =>{
        return (index < 10? "0":"") + (index + 1);
    }

    const flipVariant = {
        initial:{

        },
        flip:{
            y:[0,-25,0],
            rotateY:"180deg",
            transition:{
                mass:.4,
                duration:.65,
            }
        },
        exitLeft:{
            x:"-75vw",
            rotate:"-12deg",
            transition:{
                mass:.4,
                duration:.8
            }
        },
        exitRight:{
            x:"75vw",
            rotate:"12deg",
            transition:{
                mass:.4,
                duration:.8
            }
        },
    }

    return (
        <motion.div variants={flipVariant} animate={shouldFlip?"flip":"initial"} exit={cardCorrect?"exitRight":"exitLeft"} className={`${cardBase.wrapper} ${cardBase.wrapperFlip} ${shouldFlip?cardBase.triggerFlip:""} ${styles.wrapper}`}>

                <div className={`${cardBase.front} ${styles.front}`}>
                    <DeckMetaData title={deckMetaData!.title} subject={deckMetaData!.subject} fade={true}/>
                    <h3 className={styles.prompt}>{prompt}</h3>
                    <button className={styles.showAnswerBtn} onClick={()=>setShouldFlip(true)}>Show Answer</button>
                </div>

                <div className={`${cardBase.back} ${styles.back}`}>
                    <div className={styles.cardNumber}>
                        {formatIndexNumber(cardIndex)}
                    </div>
                    <h3 className={styles.answer}>{answer}</h3>

                    <div className={styles.evaluationWrapper}>
                        <motion.div animate={{fill:"var(--c-main-gray)"}} whileHover={{fill:"var(--c-achievement-orange)"}} className={styles.wrongIconWrapper} onClick={()=>{
                            setCardCorrect(false);
                            dispatch({type: CardActionKind.WrongAnswer})
                        }}>
                            <WrongIcon width="50px" />
                        </motion.div>
                        <motion.div animate={{fill:"var(--c-main-gray)"}} whileHover={{fill:"var(--c-achievement-green)"}} className={styles.correctIconWrapper} onClick={()=>{
                            setCardCorrect(true);
                            dispatch({type: CardActionKind.CorrectAnswer})
                        }}>
                            <CorrectIcon height="50px" />
                        </motion.div>
                    </div>
                </div>


        </motion.div>
    )
}

export { CardPlain };