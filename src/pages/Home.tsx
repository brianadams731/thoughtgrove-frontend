import { DeckTileGrid } from "../components/DeckTileGrid";
import { useOwnersDecks } from "../hooks/api/useOwnersDeck";
import { usePopularDecks } from "../hooks/api/usePopularDecks";

import styles from "../styles/Home.module.css";

const Home = ():JSX.Element =>{
    const {popularDecks} = usePopularDecks();
    const {ownersDecks} = useOwnersDecks();

    console.log(popularDecks)
    return (
        <div className={styles.wrapper}>

            {/*
            <DeckTileGrid deckTileData={deckTiles.slice(0,3)} title="Todo" />
            */}
            
            <DeckTileGrid deckTileData={ownersDecks} title="Your Decks" hasAddTile />
            <DeckTileGrid deckTileData={popularDecks} title="Popular Decks" />
        </div>
    )
}

export { Home };