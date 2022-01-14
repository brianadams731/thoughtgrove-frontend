import { AnimatePresence } from "framer-motion";
import { useEffect, useReducer, useState } from "react";
import { CardPlain } from "../components/CardPlain";
import { DeckTop } from "../components/DeckTop";
import { IDeckTop } from "../interfaces/IDeckTop";
import { CardAction, CardActionKind } from "../interfaces/CardReducer";
import styles from "../styles/Deck.module.css";
import { VoteState } from "../interfaces/IVote";
import { useParams } from "react-router-dom";
import { useDeckByID } from "../hooks/api/useDeckByID";
import { useCardsByDeckID } from "../hooks/api/useCardsByDeckID";
import { ICard } from "../interfaces/ICard";

const Deck = ():JSX.Element =>{
    // Mock Data Start
    const {deckId} = useParams();

    const {deckData} = useDeckByID(deckId);
    const {cardData} = useCardsByDeckID(deckId);

    console.log(cardData.cards)

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
        toStudy: cardData.cards, // This is being consumed syncronusly, fix so it is async
        complete:[]
    }
    // Mock Data End

    const [showDeckTop, setShowDeckTop] = useState(true);

    interface CardData extends ICard{
        correctAnswer:boolean|undefined;
    }

    interface CardState{
        toStudy: ICard[];
        complete: CardData[];
    }

    const cardStoreReducer = (state:CardState, action:CardAction) =>{
        const currentCard = state.toStudy[state.toStudy.length -1];

        const cardChange:CardData = {
            prompt: currentCard.prompt,
            answer: currentCard.answer,
            correctAnswer: undefined
        }

        switch(action.type){
            case CardActionKind.CorrectAnswer:
                cardChange.correctAnswer = true
                return {
                    toStudy:[...state.toStudy.slice(0, state.toStudy.length-1)],
                    complete:[...state.complete, cardChange],
                }

            case CardActionKind.WrongAnswer:
                cardChange.correctAnswer = false;
                return {
                    toStudy:[...state.toStudy.slice(0, state.toStudy.length-1)],
                    complete:[...state.complete, cardChange],
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
            {console.log(deckData)}
            <AnimatePresence>
                {cardDeck.toStudy?.map((item)=>{
                    return (
                        <CardPlain key={item.prompt} deckMetaData={exampleDeck.deckMetaData} prompt={item.prompt} answer={item.answer} dispatch={dispatch} cardIndex={cardDeck.complete.length}/>
                    )             
                })}
                {showDeckTop && deckData &&
                <DeckTop deckMetaData={exampleDeck.deckMetaData} description={deckData.description} vote={exampleDeck.vote} key={deckData.id} setShowDeckTop={setShowDeckTop} userOwnsDeck={exampleDeck.userOwnsDeck}/>}
            </AnimatePresence>
        </div>
    )
}

export { Deck };