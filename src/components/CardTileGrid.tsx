import { Dispatch, SetStateAction } from "react";
import { EditFocusKind } from "../interfaces/EditFocusKind";
import { ICard } from "../interfaces/ICard";
import styles from "../styles/DeckTileGrid.module.css";
import { AddCardTile } from "./AddCardTile";
import { CardTile } from "./CardTile";



interface Props{
    title: string|undefined;
    cardTileData: ICard[];
    setEditState: Dispatch<SetStateAction<EditFocusKind>>;
    setSelectedCardId: Dispatch<SetStateAction<number>>;
    hasAddTile?: boolean
}

const CardTileGrid = ({cardTileData, title, hasAddTile, setEditState, setSelectedCardId}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.gridTitle}>{title}</h3>
            <div className={styles.gridWrapper}>
                {hasAddTile&&<AddCardTile callBackOnClick={()=>setEditState(EditFocusKind.NewCard)} />}
                {cardTileData.map((item) => (
                    <CardTile key={`${item.id}`} prompt={item.prompt} answer={item.answer} callBackOnClick={()=>{
                        setEditState(EditFocusKind.EditCard);
                        setSelectedCardId(item.id!);
                    }}/>
                ))}
            </div>
        </div>
    )
}

export { CardTileGrid };