import { DeckTileGrid } from "../components/DeckTileGrid";
import { useOwnersDecks } from "../hooks/api/useOwnersDeck";
import { usePopularDecks } from "../hooks/api/usePopularDecks";
import { DeckOwnership, IDeckTile } from "../interfaces/IDeckTile";

import styles from "../styles/Home.module.css";

const Home = ():JSX.Element =>{

    const {popularDecks} = usePopularDecks();
    const {ownersDecks} = useOwnersDecks();

    /*const deckTiles:IDeckTile[] = [
        {title: "French 1", subject: "Language", votes:"65k", deckID:1, deckRelation: DeckOwnership.Owner},
        {title: "French 1", subject: "Language", votes:"65k", deckID:2, deckRelation: DeckOwnership.Owner},
        {title: "French 1", subject: "Language", votes:"65k", deckID:3, deckRelation: DeckOwnership.Owner},
        {title: "French 1", subject: "Language", votes:"65k", deckID:4, deckRelation: DeckOwnership.Owner},
        {title: "French 1", subject: "Language", votes:"65k", deckID:5, deckRelation: DeckOwnership.Owner},
        {title: "French 1", subject: "Language", votes:"65k", deckID:6, deckRelation: DeckOwnership.Owner},
        {title: "French 1", subject: "Language", votes:"65k", deckID:7, deckRelation: DeckOwnership.Owner},
    ]*/

    return (
        <div className={styles.wrapper}>

            {/*
            <DeckTileGrid deckTileData={deckTiles.slice(0,3)} title="Todo" />
            <DeckTileGrid deckTileData={deckTiles.slice()} hasAddTile={true} title="Your Decks"/>
            */}
            
            <DeckTileGrid deckTileData={ownersDecks} title="Your Decks" hasAddTile />
            <DeckTileGrid deckTileData={popularDecks} title="Popular Decks" />
        </div>
    )
}

export { Home };