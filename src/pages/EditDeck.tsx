import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CardTileGrid } from "../components/CardTileGrid";
import { DeckTile } from "../components/DeckTile";
import { FullPageDimmer } from "../components/FullPageDimmer";
import { NewCardPlain } from "../components/NewCardPlain";
import { NewDeckCard } from "../components/NewDeckCard";
import styles from "../styles/EditDeck.module.css";
import { EditFocusKind } from "../interfaces/EditFocusKind";
import { useParams } from "react-router-dom";
import { useDeckByID } from "../hooks/api/useDeckByID";
import { useCardsByDeckID } from "../hooks/api/useCardsByDeckID";

const EditDeck = ():JSX.Element =>{
    const {deckId} = useParams();
    const {deckData} = useDeckByID(deckId);
    const {cardData} = useCardsByDeckID(deckId);

    const [editState, setEditState] = useState<EditFocusKind>(EditFocusKind.None);
    const [selectedCardId, setSelectedCardId] = useState<number>(-1)

    const findCardData = ():any =>{
        const cardIndex = cardData.cards.findIndex(item=>{
            return item.id === selectedCardId;
        });
        return cardData.cards[cardIndex];
    }

    return (
        <div className={styles.wrapper}>

            {deckData&&
            <div className={styles.deckTileWrapper}>
                <div className={styles.DeckTileClickWrapper} onClick={()=>setEditState(EditFocusKind.EditDeck)}>
                    <DeckTile subject={deckData.subject} title={deckData.title} deckID={deckData.id} votes={deckData.vote} deckRelation={deckData.deckRelation} suppressOnClick/>
                </div>
            </div>}
            
            {cardData&&
            <CardTileGrid cardTileData={cardData.cards} title="Cards" setSelectedCardId={setSelectedCardId} setEditState={setEditState} hasAddTile />}

            <AnimatePresence>
                {editState !== EditFocusKind.None && <FullPageDimmer key="pageDimmer" callBackOnClick={()=>setEditState(EditFocusKind.None)}/>}

                {editState === EditFocusKind.NewCard && <NewCardPlain key="newCard" setEditState={setEditState} editState={editState} deckId={deckData.id} />}
                {editState === EditFocusKind.NewDeck && <NewDeckCard key="newDeck" setEditState={setEditState} editState={editState}/>}

                {editState === EditFocusKind.EditCard && <NewCardPlain key="editCard" setEditState={setEditState} existingCardData={findCardData()} editState={editState} deckId={deckData.id}/>}
                {editState === EditFocusKind.EditDeck && <NewDeckCard key="editDeck" setEditState={setEditState} existingDeckData={deckData} editState={editState}/>}

                {editState === EditFocusKind.DeleteDeck && <div>DELETE DECK</div>}
            </AnimatePresence>
        </div>
    )
}

export { EditDeck };