import cardBase from "../styles/CardBase.module.css";
import styles from "../styles/CardPlain.module.css";

import { ICardPlain } from "../Interfaces/ICardPlain";
import { DeckMetaData } from "./DeckMetaData";
import { CorrectIcon } from "../svg/CorrectIcon";
import { WrongIcon } from "../svg/WrongIcon";
import { useState } from "react";

const CardPlain = ({prompt, answer, deckMetaData}:ICardPlain):JSX.Element =>{
    const [shouldFlip,setShouldFlip] = useState(false);

    return (
        <div className={`${cardBase.wrapper} ${cardBase.wrapperFlip} ${shouldFlip?cardBase.triggerFlip:""} ${styles.wrapper}`}>

                <div className={cardBase.front}>
                    <DeckMetaData title={deckMetaData.title} subject={deckMetaData.subject}/>
                    <h3>{prompt}</h3>
                    <button onClick={()=>setShouldFlip(true)}>Show Answer</button>
                </div>

                <div className={cardBase.back}>
                    <DeckMetaData title={deckMetaData.title} subject={deckMetaData.subject}/>
                    <h3>{answer}</h3>

                    <div>
                        <WrongIcon width="50px" fill="var(--c-main-gray)" hoverFill="var(--c-achievement-orange)"/>
                    </div>
                    <div>
                        <CorrectIcon height="50px" fill="var(--c-main-gray)" hoverFill="var(--c-achievement-green)"/>
                    </div>
                </div>


        </div>
    )
}

export { CardPlain };