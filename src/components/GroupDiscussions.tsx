import styles from "../styles/GroupDiscussions.module.css"
import { CommentIcon } from "../svg/CommentIcon"
import { LoadMore } from "./LoadMore"

interface Props{
    groupId:number|string;
}

    const GroupDiscussions = ({groupId}:Props):JSX.Element =>{
        const mockDiscussions = [
            {
                id:1,
                title: "How do you pernounce bois?",
                authorUserName: "badams72",
                commentCount:1
            },{
                id:2,
                title: "How do you pernounce bois?",
                authorUserName: "badams72",
                commentCount: 52
            },{
                id:3,
                title: "How do you pernounce bois?",
                authorUserName: "badams72",
                commentCount: 15
            },
        ]

        return(
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Discussions</h2>
                <div>
                    {mockDiscussions.map(item =>{
                        return (
                            <div className={styles.discussionWrapper} key={item.id}>
                                <div className={styles.discussionMetaData}>
                                    <h4>{item.title}</h4>
                                    <h6>{item.authorUserName}</h6>
                                </div>
                                <div className={styles.commentWrapper}>
                                    <CommentIcon fill="var(--c-main-gray)" hoverFill="var(--c-achievement-blue)" width="25px"/>
                                    <p className={styles.commentCount}>{item.commentCount}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <LoadMore callBackOnClick={()=>console.log("click")}/>
            </div>
        )
}

export { GroupDiscussions };