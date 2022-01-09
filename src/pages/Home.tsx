import { DeckTileGrid } from "../components/DeckTileGrid";

import styles from "../styles/Home.module.css";

const Home = ():JSX.Element =>{
    const deckTiles = [
        {title: "French 1", subject: "Language", votes:"65k", deckID:"1"},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"2"},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"3"},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"4"},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"5"},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"6"},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"7"},
    ]

    return (
        <div className={styles.wrapper}>
            <DeckTileGrid deckTileData={deckTiles.slice(0,3)} title="Todo" />
            <DeckTileGrid deckTileData={deckTiles} hasAddTile={true} title="Your Decks"/>
            <DeckTileGrid deckTileData={deckTiles} title="Popular Decks" />
        </div>
    )
}

export { Home };