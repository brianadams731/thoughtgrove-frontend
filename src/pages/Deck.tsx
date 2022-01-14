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
    const {deckId} = useParams();
    const {deckData} = useDeckByID(deckId);
    const {cardData} = useCardsByDeckID(deckId);
    const [showDeckTop, setShowDeckTop] = useState(true);

    useEffect(()=>{
        const updateDeckOnServer = () =>{
            // SEND UPDATED DECK DATA BACK TO THE SERVER HERE, use beacon
        }
        window.addEventListener('beforeunload',updateDeckOnServer)
        return () =>{
            updateDeckOnServer();
            window.removeEventListener('beforeunload', updateDeckOnServer)
        }
        //eslint-disable-next-line
    },[])

    useEffect(()=>{
        if(!cardData){
            return;
        }
        dispatch({type:CardActionKind.Reset, payload: {
            loadDeck: cardData.cards
        }})
    },[cardData])

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
        toStudy: [],
        complete:[]
    }
    interface CompletedCard extends ICard{
        correctAnswer?:boolean|undefined;
    }
    interface CardState{
        toStudy: ICard[];
        complete: CompletedCard[];
    }
    const cardStoreReducer = (state:CardState, action:CardAction) =>{
        // Initializer
        if(action.type === CardActionKind.Reset){
            return ({
                toStudy: action.payload?.loadDeck?action.payload.loadDeck:[], //TODO filter out completed, incase revalidate!
                complete: state.complete,
            })
        }

        // Card Logic
        const currentCard = state.toStudy[state.toStudy.length - 1];
        const cardChange: CompletedCard = {
            prompt: currentCard.prompt,
            answer: currentCard.answer,
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
    const [cardDeck, dispatch] = useReducer(cardStoreReducer, cardStore);
    

    return ( 
        <div className={styles.wrapper}>
            <AnimatePresence>
                {cardDeck.toStudy.map((item)=>{
                    return (
                        <CardPlain key={item.id} deckMetaData={exampleDeck.deckMetaData} prompt={item.prompt} answer={item.answer} dispatch={dispatch} cardIndex={cardDeck.complete.length}/>
                    )             
                })}
                {showDeckTop && deckData &&
                <DeckTop deckMetaData={exampleDeck.deckMetaData} description={deckData.description} vote={exampleDeck.vote} key={deckData.subject} setShowDeckTop={setShowDeckTop} userOwnsDeck={exampleDeck.userOwnsDeck}/>}
            </AnimatePresence>
        </div>
    )
}

export { Deck };