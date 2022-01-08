import { IDeckTile } from "../Interfaces/IDeckTile";
import styles from "../styles/DeckTileGrid.module.css";
import { AddDeckTile } from "./AddDeckTile";
import { DeckTile } from "./DeckTile";



interface Props{
    title: string;
    deckTileData: IDeckTile[];
}

const DeckTileGrid = ({deckTileData, title}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.gridTitle}>Title</h3>
            <div className={styles.gridWrapper}>
                <AddDeckTile />
                <DeckTile subject="Language" title="French 1" votes="39k" deckID="5"/>
                <DeckTile subject="Language" title="French 1" votes="39k" deckID="5"/>
                <DeckTile subject="Language" title="French 1" votes="39k" deckID="5"/>
                <DeckTile subject="Language" title="French 1" votes="39k" deckID="5"/>
                <DeckTile subject="Language" title="French 1" votes="39k" deckID="5"/>
                <DeckTile subject="Language" title="French 1" votes="39k" deckID="5"/>
            </div>
        </div>
    )
}

export {DeckTileGrid}