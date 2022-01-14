import { Dispatch } from "react";
import { EditFocusAction, EditFocusKind } from "../interfaces/EditFocusReducer";
import { ICardTile } from "../interfaces/ICardTile";
import styles from "../styles/DeckTileGrid.module.css";
import { AddCardTile } from "./AddCardTile";
import { CardTile } from "./CardTile";



interface Props{
    title: string|undefined;
    cardTileData: ICardTile[];
    dispatch: Dispatch<EditFocusAction>;
    hasAddTile?: boolean
}

const CardTileGrid = ({cardTileData, title, hasAddTile, dispatch}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.gridTitle}>{title}</h3>
            <div className={styles.gridWrapper}>
                {hasAddTile&&<AddCardTile callBackOnClick={()=>dispatch({type:EditFocusKind.NewCard})} />}
                {cardTileData.map((item) => (
                    <CardTile key={`${item.cardID}`} prompt={item.prompt} cardID={item.cardID} callBackOnClick={()=>dispatch({type:EditFocusKind.EditCard, payload:{selectionID: item.cardID}})}/>
                ))}
            </div>
        </div>
    )
}

export { CardTileGrid };