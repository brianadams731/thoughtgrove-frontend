import { AnimatePresence } from "framer-motion";
import { useReducer } from "react";
import { CardPlain } from "../components/CardPlain";
import { DeckTop } from "../components/DeckTop";
import { ICardPlain } from "../Interfaces/ICardPlain";
import { IDeckTop } from "../Interfaces/IDeckTop";
import styles from "../styles/Deck.module.css";

const Deck = ():JSX.Element =>{
    const exampleDeck:IDeckTop = {
        deckMetaData:{
            subject:"Language",
            title:"French 1",
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
        vote:{
            numberOfVotes: 50,
            hasUpVoted: undefined,
        }
    }

    interface CardData extends ICardPlain{
        correctAnswer:boolean|undefined;
    }
    interface CardState{
        toStudy: CardData[];
        complete: CardData[];
    }
    enum CardActionKind{
        CorrectAnswer = "correctAnswer",
        WrongAnswer = "wrongAnswer"
    }
    interface CardAction{
        type: CardActionKind;
        payload: boolean;
    }
    const cardStore:CardState = {
        toStudy: [
        {
            deckMetaData:{
                subject:"Language",
                title:"French 1",
            },
            prompt: "Test Prompt 1",
            answer: "Test Answer 1",
            correctAnswer:undefined
        },
        {
            deckMetaData:{
                subject:"Language",
                title:"French 2",
            },
            prompt: "Test Prompt 2",
            answer: "Test Answer 2",
            correctAnswer:undefined
        }],
        complete:[]
    }


    const cardStoreReducer = (state:CardState, action:CardAction) =>{
        switch(action.type){
            case CardActionKind.CorrectAnswer:
                let oldItem = state.toStudy[state.toStudy.length - 1];
                oldItem.correctAnswer = true;
                return {
                    toStudy:[...state.toStudy.slice(0, state.toStudy.length-1)],
                    complete:[...state.complete, oldItem],
                }

            case CardActionKind.WrongAnswer:
                const item = state.toStudy[state.toStudy.length - 1];
                item.correctAnswer = true;
                return {
                    toStudy:[...state.toStudy.slice(0, state.toStudy.length-1)],
                    complete:[...state.complete, item],
                }
            default:
                return state;
        }
    }

    const [cardDeck, dispatch] = useReducer(cardStoreReducer, cardStore)

    return ( 
        <div className={styles.wrapper}>
            <DeckTop deckMetaData={exampleDeck.deckMetaData} description={exampleDeck.description} vote={exampleDeck.vote} key={exampleDeck.deckMetaData.title} />
            <AnimatePresence>
                {cardDeck.toStudy?.map((item)=>{
                    return (
                        <CardPlain key={item.prompt} deckMetaData={item.deckMetaData} prompt={item.prompt} answer={item.answer} dispatch={dispatch} />
                    )             
                })}
            </AnimatePresence>
        </div>
    )
}

export { Deck };