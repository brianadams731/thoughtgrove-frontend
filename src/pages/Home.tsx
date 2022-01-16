import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DeckTileGrid } from "../components/DeckTileGrid";
import { FullPageDimmer } from "../components/FullPageDimmer";
import { NewDeckCard } from "../components/NewDeckCard";
import { useOwnersDecks } from "../hooks/api/useOwnersDeck";
import { usePopularDecks } from "../hooks/api/usePopularDecks";
import { EditFocusKind } from "../interfaces/EditFocusKind";

import styles from "../styles/Home.module.css";

const Home = ():JSX.Element =>{
    const {popularDecks} = usePopularDecks();
    const {ownersDecks} = useOwnersDecks();

    const [showAddDeck, setShowAddDeck] = useState<boolean>(false);
    return (
        <div className={styles.wrapper}>

            {/*
            <DeckTileGrid deckTileData={deckTiles.slice(0,3)} title="Todo" />
            */}
            
            <DeckTileGrid deckTileData={ownersDecks} title="Your Decks" hasAddTile addDeckCallBack={()=>setShowAddDeck(true)}/>
            <DeckTileGrid deckTileData={popularDecks} title="Popular Decks" />
            
            <AnimatePresence>
            {showAddDeck &&
                <>
                    <FullPageDimmer key="pageDimmer" callBackOnClick={()=>setShowAddDeck(false)}/>
                    <NewDeckCard key="newDeck" editState={EditFocusKind.NewDeck}/>
                </>
            }
            </AnimatePresence>
        </div>
    )
}

export { Home };