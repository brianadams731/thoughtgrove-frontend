import { useBulletinsGroupById } from "../hooks/api/useBulletinsByGroupId";
import styles from "../styles/GroupBulletinBoard.module.css";
import { LoadMore } from "./LoadMore";

interface Props{
    groupId:number|string;
}

const GroupBulletinBoard = ({groupId}:Props):JSX.Element =>{

    const {bulletinsData, areBulletinsLoading, bulletinsError} = useBulletinsGroupById(groupId);

    if(areBulletinsLoading) return (
        <div>
            Loading...
        </div>
    )

    if(bulletinsError) return (
        <div>
            Error
        </div>
    )

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Bulletin Board</h2>
            <article className={styles.bulletinWrapper}>
                {bulletinsData.map(item => {
                    return(
                        <div className={styles.bulletinItem} key={item.id}>
                            {item.message}
                        </div>
                    )
                })}
            </article>
            <LoadMore callBackOnClick={()=>{console.log("click")}}/>
        </div>
    )
}

export { GroupBulletinBoard };