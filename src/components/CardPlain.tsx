import cardBase from "../styles/CardBase.module.css";
import styles from "../styles/CardPlain.module.css";

import { ICardPlain } from "../Interfaces/ICardPlain";
import { DeckMetaData } from "./DeckMetaData";
import { CorrectIcon } from "../svg/CorrectIcon";
import { WrongIcon } from "../svg/WrongIcon";
import { Dispatch, useState } from "react";
import { motion } from "framer-motion";


interface Props extends ICardPlain{
    dispatch: Dispatch<any>
}

const CardPlain = ({prompt, answer, deckMetaData, dispatch}:Props):JSX.Element =>{
    const [shouldFlip,setShouldFlip] = useState<boolean>(false);
    const [cardCorrect, setCardCorrect] = useState<boolean>(false)

    const flipVariant = {
        initial:{

        },
        flip:{
            y:[0,-30,0],
            rotateY:"180deg",
            transition:{
                duration:1.1,
            }
        },
        exitLeft:{
            x:"-75vw",
            rotate:"-15deg",
            transition:{
                duration:1
            }
        },
        exitRight:{
            x:"75vw",
            rotate:"15deg",
            transition:{
                duration:1
            }
        }
    }

    return (
        <motion.div variants={flipVariant} animate={shouldFlip?"flip":"initial"} exit={cardCorrect?"exitRight":"exitLeft"} className={`${cardBase.wrapper} ${cardBase.wrapperFlip} ${shouldFlip?cardBase.triggerFlip:""} ${styles.wrapper}`}>

                <div className={`${cardBase.front} ${styles.front}`}>
                    <DeckMetaData title={deckMetaData.title} subject={deckMetaData.subject}/>
                    <h3 className={styles.prompt}>{prompt}</h3>
                    <button className={styles.showAnswerBtn} onClick={()=>setShouldFlip(true)}>Show Answer</button>
                </div>

                <div className={`${cardBase.back} ${styles.back}`}>
                    <DeckMetaData title={deckMetaData.title} subject={deckMetaData.subject}/>
                    <h3 className={styles.answer}>{answer}</h3>

                    <div className={styles.evaluationWrapper}>
                        <motion.div animate={{fill:"var(--c-main-gray)"}} whileHover={{fill:"var(--c-achievement-orange)"}} className={styles.wrongIconWrapper} onClick={()=>{
                            setCardCorrect(false);
                            dispatch({type:"wrongAnswer", payload:false})
                        }}>
                            <WrongIcon width="50px" />
                        </motion.div>
                        <motion.div animate={{fill:"var(--c-main-gray)"}} whileHover={{fill:"var(--c-achievement-green)"}} className={styles.correctIconWrapper} onClick={()=>{
                            setCardCorrect(true);
                            dispatch({type:"correctAnswer", payload:true})
                        }}>
                            <CorrectIcon height="50px" />
                        </motion.div>
                    </div>
                </div>


        </motion.div>
    )
}

export { CardPlain };