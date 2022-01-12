import { ICardTile } from "../interfaces/ICardTile";
import styles from "../styles/DeckTileGrid.module.css";
import { AddCardTile } from "./AddCardTile";
import { CardTile } from "./CardTile";



interface Props{
    title: string;
    cardTileData: ICardTile[];
    hasAddTile?: boolean
}

const CardTileGrid = ({cardTileData, title, hasAddTile}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.gridTitle}>{title}</h3>
            <div className={styles.gridWrapper}>
                {hasAddTile&&<AddCardTile />}
                {cardTileData.map((item) => (
                    <CardTile key={`${item.cardID}`} prompt={item.prompt} cardID={item.cardID} />
                ))}
            </div>
        </div>
    )
}

export { CardTileGrid };