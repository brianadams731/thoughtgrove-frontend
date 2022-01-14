import { AnimatePresence } from "framer-motion";
import { useEffect, useReducer, useState } from "react";
import { CardPlain } from "../components/CardPlain";
import { DeckTop } from "../components/DeckTop";
import { ICardPlain } from "../interfaces/ICardPlain";
import { IDeckTop } from "../interfaces/IDeckTop";
import { CardAction, CardActionKind } from "../interfaces/CardReducer";
import styles from "../styles/Deck.module.css";
import { VoteState } from "../interfaces/IVote";

const Deck = ():JSX.Element =>{
    // Mock Data Start


    const exampleDeck:IDeckTop = {
        deckMetaData:{
            subject:"Language",
            title:"French 1",
        },
        userOwnsDeck: true,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam`,
        vote:{
            count: 50,
            voteCast: VoteState.NotVoted
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
    // Mock Data End

    const [showDeckTop, setShowDeckTop] = useState(true);

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
            // SEND UPDATED DECK DATA BACK TO THE SERVER HERE, use beacon
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
                        <CardPlain key={item.prompt} deckMetaData={exampleDeck.deckMetaData} prompt={item.prompt} answer={item.answer} dispatch={dispatch} cardIndex={cardDeck.complete.length}/>
                    )             
                })}
                {showDeckTop&&
                <DeckTop deckMetaData={exampleDeck.deckMetaData} description={exampleDeck.description} vote={exampleDeck.vote} key={exampleDeck.deckMetaData.title} setShowDeckTop={setShowDeckTop} userOwnsDeck={exampleDeck.userOwnsDeck}/>}
            </AnimatePresence>
        </div>
    )
}

export { Deck };