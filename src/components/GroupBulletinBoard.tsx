import styles from "../styles/GroupBulletinBoard.module.css";
import { LoadMore } from "./LoadMore";

interface Props{
    groupId:number|string;
}

const GroupBulletinBoard = ({groupId}:Props):JSX.Element =>{
    const mockBulletin = [
        {
            id:1,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },{
            id:2,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Bulletin Board</h2>
            <article className={styles.bulletinWrapper}>
                {mockBulletin.map(item => {
                    return(
                        <div className={styles.bulletinItem} key={item.id}>
                            {item.content}
                        </div>
                    )
                })}
            </article>
            <LoadMore callBackOnClick={()=>{console.log("click")}}/>
        </div>
    )
}

export { GroupBulletinBoard };