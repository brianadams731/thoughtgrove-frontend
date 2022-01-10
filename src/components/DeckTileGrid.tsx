import { IDeckTile } from "../interfaces/IDeckTile";
import styles from "../styles/DeckTileGrid.module.css";
import { AddDeckTile } from "./AddDeckTile";
import { DeckTile } from "./DeckTile";



interface Props{
    title: string;
    deckTileData: IDeckTile[];
    hasAddTile?: boolean
}

const DeckTileGrid = ({deckTileData, title, hasAddTile}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.gridTitle}>{title}</h3>
            <div className={styles.gridWrapper}>
                {hasAddTile&&<AddDeckTile />}
                {deckTileData.map((item) => (
                    <DeckTile key={`${item.deckID}`} subject={item.subject} title={item.title} votes={item.votes} deckID={item.deckID}/>
                ))}
            </div>
        </div>
    )
}

export {DeckTileGrid}