import { AnimatePresence } from "framer-motion";
import { useEffect, useReducer, useState } from "react";
import { CardPlain } from "../components/CardPlain";
import { DeckTop } from "../components/DeckTop";
import { ICardPlain } from "../interfaces/ICardPlain";
import { IDeckTop } from "../interfaces/IDeckTop";
import { CardAction, CardActionKind } from "../interfaces/CardReducer";
import styles from "../styles/Deck.module.css";

const Deck = ():JSX.Element =>{
    const [showDeckTop, setShowDeckTop] = useState(true);
    const exampleDeck:IDeckTop = {
        deckMetaData:{
            subject:"Language",
            title:"French 1",
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam`,
        vote:{
            numberOfVotes: 50,
            hasUpVoted: undefined,
        }
    }
    const cardStore:CardState = {
        toStudy: [
        {
            prompt: "Je ne sais pas",
            answer: "I don't know",
            correctAnswer:undefined
        },
        {
            prompt: "S'il vous plait",
            answer: "If it pleases you",
            correctAnswer:undefined
        }],
        complete:[]
    }

    interface CardData extends ICardPlain{
        correctAnswer:boolean|undefined;
    }
    interface CardState{
        toStudy: CardData[];
        complete: CardData[];
    }

    const cardStoreReducer = (state:CardState, action:CardAction) =>{
        const currentCard = state.toStudy[state.toStudy.length -1];
        switch(action.type){
            case CardActionKind.CorrectAnswer:
                currentCard.correctAnswer = true;
                return {
                    toStudy:[...state.toStudy.slice(0, state.toStudy.length-1)],
                    complete:[...state.complete, currentCard],
                }

            case CardActionKind.WrongAnswer:
                currentCard.correctAnswer = false;
                return {
                    toStudy:[...state.toStudy.slice(0, state.toStudy.length-1)],
                    complete:[...state.complete, currentCard],
                }
        }
    }

    useEffect(()=>{
        const updateDeckOnServer = () =>{
            // SEND UPDATED DECK DATA BACK TO THE SERVER HERE
            console.log(cardDeck.complete);
        }
        window.addEventListener('beforeunload',updateDeckOnServer)
        return () =>{
            updateDeckOnServer();
            window.removeEventListener('beforeunload', updateDeckOnServer)
        }
        //eslint-disable-next-line
    },[])

    const [cardDeck, dispatch] = useReducer(cardStoreReducer, cardStore)

    return ( 
        <div className={styles.wrapper}>
            <AnimatePresence>
                {cardDeck.toStudy?.map((item)=>{
                    return (
                        <CardPlain key={item.prompt} deckMetaData={exampleDeck.deckMetaData} prompt={item.prompt} answer={item.answer} dispatch={dispatch} />
                    )             
                })}
                {showDeckTop&&
                <DeckTop deckMetaData={exampleDeck.deckMetaData} description={exampleDeck.description} vote={exampleDeck.vote} key={exampleDeck.deckMetaData.title} setShowDeckTop={setShowDeckTop}/>}
            </AnimatePresence>
        </div>
    )
}

export { Deck };