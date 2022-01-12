import { ICardTile } from "../interfaces/ICardTile";
import styles from "../styles/DeckTileGrid.module.css";
import { AddCardTile } from "./AddCardTile";
import { CardTile } from "./CardTile";



interface Props{
    title: string;
    cardTileData: ICardTile[];
    callBackOnTileClick: ()=> void;
    hasAddTile?: boolean
}

const CardTileGrid = ({cardTileData, title, hasAddTile, callBackOnTileClick}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.gridTitle}>{title}</h3>
            <div className={styles.gridWrapper}>
                {hasAddTile&&<AddCardTile callBackOnClick={callBackOnTileClick} />}
                {cardTileData.map((item) => (
                    <CardTile key={`${item.cardID}`} prompt={item.prompt} cardID={item.cardID} callBackOnClick={callBackOnTileClick}/>
                ))}
            </div>
        </div>
    )
}

export { CardTileGrid };