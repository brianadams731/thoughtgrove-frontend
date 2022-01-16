import { IDeck } from "../interfaces/IDeck";
import { DeckOwnership } from "../interfaces/IDeckTile";
import styles from "../styles/DeckTileGrid.module.css";
import { AddDeckTile } from "./AddDeckTile";
import { DeckTile } from "./DeckTile";



interface Props{
    title: string;
    deckTileData: IDeck[];
    hasAddTile?: boolean;
    addDeckCallBack?: ()=>any;
}

const DeckTileGrid = ({deckTileData, title, hasAddTile, addDeckCallBack}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.gridTitle}>{title}</h3>
            <div className={styles.gridWrapper}>
                {hasAddTile&&<AddDeckTile callbackOnClick={()=>{
                    if(addDeckCallBack){
                        addDeckCallBack();
                    }
                }}/>}
                {deckTileData?.map((item) => {
                    return(
                        <DeckTile key={`${item.id}`} subject={item.subject} title={item.title} votes={item.vote} deckID={item.id} deckRelation={item.deckRelation} showEditIcon={item.deckRelation === DeckOwnership.Owner} />
                    )
                })}
            </div>
        </div>
    )
}

export {DeckTileGrid}