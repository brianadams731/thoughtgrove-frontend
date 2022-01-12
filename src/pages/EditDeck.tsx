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
import { EditFocusKind, EditFocusAction } from "../interfaces/EditFocusReducer";

const EditDeck = ():JSX.Element =>{
    
    interface EditFocusState{
        card:boolean;
        deck:boolean;
    }

    const editFocusReducer = (state:EditFocusState, action:EditFocusAction) =>{
        switch(action.type){
            case EditFocusKind.EditCard:
                return{
                    card: true,
                    deck: false
                }
            case EditFocusKind.EditDeck:
                return {
                    card: false,
                    deck: true
                }
            case EditFocusKind.EditNone:
                return {
                    card: false,
                    deck: false
                }
            case EditFocusKind.ToggleCard:
                return {
                    ...state,
                    card: !state.card,
                }
            case EditFocusKind.ToggleDeck:
                return {
                    ...state,
                    deck: !state.deck,
                }
        }
    }

    const [editFocus, dispatch] = useReducer(editFocusReducer, {card: false, deck: false})

    const mockDeckTile:IDeckTile = {
        subject:"Language",
        title: "French 1" ,
        deckID: "2" ,
        votes: "30",
        userOwnsDeck: true,
    }

    const mockCardTiles: ICardTile[] = [
        {
            prompt: "Je ne sais pas",
            cardID: 3,
        },
        {
            prompt: "Je ne sais pas",
            cardID: 4,
        },
        {
            prompt: "Je ne sais pas",
            cardID: 5,
        },
        {
            prompt: "Je ne sais pas",
            cardID: 6,
        },
        {
            prompt: "Je ne sais pas",
            cardID: 7,
        },
        {
            prompt: "Je ne sais pas",
            cardID: 8,
        }
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.deckTileWrapper}>
                <div className={styles.DeckTileClickWrapper} onClick={()=>dispatch({type:EditFocusKind.EditDeck})}>
                    <DeckTile subject={mockDeckTile.subject} title={mockDeckTile.title} deckID={mockDeckTile.deckID} votes={mockDeckTile.votes} userOwnsDeck={false} suppressOnClick/>
                </div>
            </div>
            <CardTileGrid cardTileData={mockCardTiles} title="Cards" callBackOnTileClick={()=>{dispatch({type:EditFocusKind.EditCard})}} hasAddTile />

            <AnimatePresence>
                {editFocus.card|| editFocus.deck?<FullPageDimmer key="pageDimmer" callBackOnClick={()=>dispatch({type:EditFocusKind.EditNone})}/>:null}
                {editFocus.card &&<NewCardPlain key="card"/>}
                {editFocus.deck &&<NewDeckCard key="deck"/>}
            </AnimatePresence>
        </div>
    )
}

export { EditDeck };