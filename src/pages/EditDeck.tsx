import { AnimatePresence } from "framer-motion";
import { CardTileGrid } from "../components/CardTileGrid";
import { DeckTile } from "../components/DeckTile";
import { NewCardPlain } from "../components/NewCardPlain";
import { NewDeckCard } from "../components/NewDeckCard";
import { ICardTile } from "../interfaces/ICardTile";
import { IDeckTile } from "../interfaces/IDeckTile";
import styles from "../styles/EditDeck.module.css";

const EditDeck = ():JSX.Element =>{
    const mockDeckTile:IDeckTile = {
        subject:"Language",
        title: "French 1" ,
        deckID: "2" ,
        votes: "30",
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
            {/*<AnimatePresence>
                <NewCardPlain />
                <NewDeckCard />
            </AnimatePresence>*/}
            <div className={styles.deckTileWrapper}>
                <DeckTile subject={mockDeckTile.subject} title={mockDeckTile.title} deckID={mockDeckTile.deckID} votes={mockDeckTile.votes} />
            </div>
            <CardTileGrid cardTileData={mockCardTiles} title="Cards" hasAddTile />
        </div>
    )
}

export { EditDeck };