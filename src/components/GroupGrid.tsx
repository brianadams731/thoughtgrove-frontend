import styles from "../styles/DeckTileGrid.module.css";
import { GroupTile, IGroupTile } from "./GroupTile";




interface Props {
    title: string;
    groupTileData: IGroupTile[];

}

const GroupGrid = ({groupTileData, title }: Props): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.gridTitle}>{title}</h3>
            <div className={styles.gridWrapper}>

                {groupTileData?.map((item) => {
                    return (
                        <GroupTile id={item.id} description={item.description} name={item.name} userCount={item.userCount}/>
                    )
                })}

            </div>
        </div>
    )
}

export { GroupGrid };