import { DeckTileGrid } from "../components/DeckTileGrid";
import { IDeckTile } from "../interfaces/IDeckTile";

import styles from "../styles/Home.module.css";

const Home = ():JSX.Element =>{
    const deckTiles:IDeckTile[] = [
        {title: "French 1", subject: "Language", votes:"65k", deckID:"1", userOwnsDeck:true},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"2", userOwnsDeck:true},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"3", userOwnsDeck:true},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"4", userOwnsDeck:true},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"5", userOwnsDeck:true},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"6", userOwnsDeck:true},
        {title: "French 1", subject: "Language", votes:"65k", deckID:"7", userOwnsDeck:true},
    ]

    return (
        <div className={styles.wrapper}>
            <DeckTileGrid deckTileData={deckTiles.slice(0,3)} title="Todo" />
            <DeckTileGrid deckTileData={deckTiles.slice()} hasAddTile={true} title="Your Decks"/>
            <DeckTileGrid deckTileData={deckTiles} title="Popular Decks" />
        </div>
    )
}

export { Home };