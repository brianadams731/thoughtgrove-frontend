import { AnimatePresence } from "framer-motion";
import { useReducer } from "react";
import { CardTileGrid } from "../components/CardTileGrid";
import { DeckTile } from "../components/DeckTile";
import { FullPageDimmer } from "../components/FullPageDimmer";
import { NewCardPlain } from "../components/NewCardPlain";
import { NewDeckCard } from "../components/NewDeckCard";
import { ICardTile } from "../interfaces/ICardTile";
import { IDeckTile } from "../interfaces/IDeckTile";
import styles from "../styles/EditDeck.module.css";
import { EditFocusAction, EditFocusKind } from "../interfaces/EditFocusReducer";

const EditDeck = ():JSX.Element =>{
    
    interface EditFocusState{
        currentState: EditFocusKind;
        selectionID?: number;
    }

    const editFocusReducer = (state:EditFocusState, action:EditFocusAction) =>{
        switch(action.type){
            case EditFocusKind.EditCard:
                return {
                    currentState: EditFocusKind.EditCard,
                    selectionID: action.payload
                }
            case EditFocusKind.EditDeck:
                return {
                    currentState: EditFocusKind.EditDeck,
                    selectionID: action.payload
                }
            case EditFocusKind.DeleteDeck:
                return {
                    currentState: EditFocusKind.DeleteDeck,
                    selectionID: action.payload
                }
            case EditFocusKind.DeleteCard:
                return {
                    currentState: EditFocusKind.DeleteCard,
                    selectionID: action.payload
                }
            case EditFocusKind.None:
                return {currentState: EditFocusKind.None}
            case EditFocusKind.NewCard:
                return {currentState: EditFocusKind.NewCard}
            case EditFocusKind.NewDeck:
                return {currentState: EditFocusKind.NewDeck}

            case EditFocusKind.Submit:
                if(state.currentState === EditFocusKind.NewCard){
                    // Post new card here
                }else if(state.currentState === EditFocusKind.NewDeck){
                    // Post new deck here
                }else if(state.currentState === EditFocusKind.EditCard){
                    // put updated card here
                    // use selection id
                }else if(state.currentState === EditFocusKind.EditDeck){
                    // put updated deck here
                    // use selection id
                }else if(state.currentState === EditFocusKind.DeleteCard){
                    // delete card here
                    // use selection id
                }else if(state.currentState === EditFocusKind.DeleteDeck){
                    // delete deck here
                    // use selection id
                }
                return { currentState: EditFocusKind.None } // Resets state after submission
        }
    }

    const [editFocus, dispatch] = useReducer(editFocusReducer, {currentState: EditFocusKind.None })

    /*To Remove*/
    interface MockCardData extends ICardTile{
        answer:string;
    }
    const mockCardTiles: MockCardData[] = [
        {
            prompt: "Je ne sais pas",
            answer: "I don't know",
            cardID: 3,
        },
        {
            prompt: "Je ne sais pas",
            answer: "I don't know",
            cardID: 4,
        },
        {
            prompt: "Je ne sais pas",
            answer: "I don't know",
            cardID: 5,
        },
        {
            prompt: "Je ne sais pas",
            answer: "I don't know",
            cardID: 6,
        },
        {
            prompt: "Je ne sais pas",
            answer: "I don't know",
            cardID: 7,
        },
        {
            prompt: "Je ne sais pas",
            answer: "I don't know",
            cardID: 8,
        }
    ]
    const mockDeckTile:IDeckTile = {
        subject:"Language",
        title: "French 1" ,
        deckID: 2 ,
        votes: "30",
        userOwnsDeck: true,
    }
    const makeCardPrefill = ():any =>{
        const card = mockCardTiles.filter(card=>card.cardID === editFocus.selectionID);
        return {
            prompt: card[0]?.prompt,
            answer: card[0]?.answer
        }
    }
    /*End to remove*/
    return (
        <div className={styles.wrapper}>
            <div className={styles.deckTileWrapper}>
                <div className={styles.DeckTileClickWrapper} onClick={()=>dispatch({type:EditFocusKind.EditDeck, payload: mockDeckTile.deckID})}>
                    <DeckTile subject={mockDeckTile.subject} title={mockDeckTile.title} deckID={mockDeckTile.deckID} votes={mockDeckTile.votes} userOwnsDeck={false} suppressOnClick/>
                </div>
            </div>
            <CardTileGrid cardTileData={mockCardTiles} title="Cards" dispatch={dispatch} hasAddTile />

            <AnimatePresence>
                {editFocus.currentState !== EditFocusKind.None && <FullPageDimmer key="pageDimmer" callBackOnClick={()=>dispatch({type:EditFocusKind.None})}/>}

                {editFocus.currentState === EditFocusKind.NewCard && <NewCardPlain key="newCard" />}
                {editFocus.currentState === EditFocusKind.NewDeck && <NewDeckCard key="newDeck" />}

                {editFocus.currentState === EditFocusKind.EditCard && <NewCardPlain key="editCard" prefill={
                    // PREFILL FOR DEV, SWITCH TO FETCHING CARD DATA FROM CACHE GIVEN SELECTION ID
                    makeCardPrefill()
                } />}

                {editFocus.currentState === EditFocusKind.EditDeck && <NewDeckCard key="editDeck" prefill={{
                    // PREFILL FOR DEV, SWITCH TO FETCHING DECK DATA FROM CACHE GIVEN SELECTION ID
                    subject:mockDeckTile.subject,
                    title: mockDeckTile.title,
                    description: "Change this to pull from store data!! Use selection ID for both card and deck"
                }}/>}

                {editFocus.currentState === EditFocusKind.DeleteDeck && <div>DELETE DECK</div>}
            </AnimatePresence>
        </div>
    )
}

export { EditDeck };