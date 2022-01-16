import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CardTileGrid } from "../components/CardTileGrid";
import { DeckTile } from "../components/DeckTile";
import { FullPageDimmer } from "../components/FullPageDimmer";
import { NewCardPlain } from "../components/NewCardPlain";
import styles from "../styles/EditDeck.module.css";
import { EditFocusKind } from "../interfaces/EditFocusKind";
import { useParams } from "react-router-dom";
import { useDeckByID } from "../hooks/api/useDeckByID";
import { useCardsByDeckID } from "../hooks/api/useCardsByDeckID";
import { DeleteDeckConfirmation } from "../components/DeleteDeckConfirmation";
import { EditDeckCard } from "../components/EditDeckCard";

const EditDeck = ():JSX.Element =>{
    const {deckId} = useParams();
    const {deckData} = useDeckByID(deckId);
    const {cardData} = useCardsByDeckID(deckId);

    const [editState, setEditState] = useState<EditFocusKind>(EditFocusKind.None);
    const [selectedCardId, setSelectedCardId] = useState<number>(-1)

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

            <button className={styles.deleteBtn} onClick={()=>setEditState(EditFocusKind.DeleteDeck)}>Delete Deck</button>

            <AnimatePresence>
                {editState !== EditFocusKind.None && <FullPageDimmer key="pageDimmer" callBackOnClick={()=>setEditState(EditFocusKind.None)}/>}

                {editState === EditFocusKind.NewCard && <NewCardPlain key="newCard" setEditState={setEditState} editState={editState} deckId={deckData.id} />}
                {editState === EditFocusKind.EditCard && <NewCardPlain key="editCard" setEditState={setEditState} editState={editState} cardId={selectedCardId} deckId={deckData.id} />}
                {editState === EditFocusKind.EditDeck && <EditDeckCard deckId={deckData.id} setEditState={setEditState} editState={editState} key="editDeck"/>}

                {editState === EditFocusKind.DeleteDeck && <DeleteDeckConfirmation existingDeckData={deckData} setEditState={setEditState} editState={editState}/>}
            </AnimatePresence>
        </div>
    )
}

export { EditDeck };