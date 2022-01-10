import { AnimatePresence } from "framer-motion";
import { useEffect, useReducer } from "react";
import { CardPlain } from "../components/CardPlain";
import { DeckTop } from "../components/DeckTop";
import { ICardPlain } from "../interfaces/ICardPlain";
import { IDeckTop } from "../interfaces/IDeckTop";
import { CardAction, CardActionKind } from "../interfaces/CardReducer";
import styles from "../styles/Deck.module.css";

const Deck = ():JSX.Element =>{

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
            prompt: "Test Prompt 1",
            answer: "Test Answer 1",
            correctAnswer:undefined
        },
        {
            prompt: "Test Prompt 2",
            answer: "Test Answer 2",
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
        return () =>{
            console.log(cardDeck.toStudy);
        }
        //eslint-disable-next-line
    },[])

    const [cardDeck, dispatch] = useReducer(cardStoreReducer, cardStore)

    return ( 
        <div className={styles.wrapper}>
            <DeckTop deckMetaData={exampleDeck.deckMetaData} description={exampleDeck.description} vote={exampleDeck.vote} key={exampleDeck.deckMetaData.title} />
            <AnimatePresence>
                {cardDeck.toStudy?.map((item)=>{
                    return (
                        <CardPlain key={item.prompt} deckMetaData={exampleDeck.deckMetaData} prompt={item.prompt} answer={item.answer} dispatch={dispatch} />
                    )             
                })}
            </AnimatePresence>
        </div>
    )
}

export { Deck };