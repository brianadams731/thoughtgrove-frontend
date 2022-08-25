import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDiscussionsByGroupID } from "../hooks/api/useDiscussionsByGroupId";
import styles from "../styles/GroupDiscussions.module.css"
import { CommentIcon } from "../svg/CommentIcon"
import { LoadMore } from "./LoadMore"

interface Props{
    groupId:number|string;
}

    const GroupDiscussions = ({groupId}:Props):JSX.Element =>{
        const navigate = useNavigate();
        const {groupDiscussionsData, groupDiscussionsError, areGroupDiscussionsLoading} = useDiscussionsByGroupID(groupId);

        if(areGroupDiscussionsLoading) return (
            <div>
                Loading...
            </div>
        )
        if(groupDiscussionsError) return(
            <div>
                Error...
            </div>
        )
        return(
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Discussions</h2>
                <div>
                    {groupDiscussionsData.map(item =>{
                        return (
                            <motion.div initial={{borderBottom:"2px solid transparent"}} animate={{scale:1, borderColor: "transparent"}} whileHover={{scale:1.02, borderColor:"var(--c-main-gray)"}} whileTap={{scale:.99}} className={styles.discussionWrapper} key={item.id} onClick={()=>{
                                navigate(`/dashboard/discussion/${item.id}`)
                            }}>
                                <div className={styles.discussionMetaData}>
                                    <h4 className={styles.title}>{item.title}</h4>
                                    <h6 className={styles.authorUsername}>{item.author.username}</h6>
                                </div>
                                <div className={styles.commentWrapper}>
                                    <CommentIcon fill="var(--c-main-gray)" hoverFill="var(--c-achievement-blue)" width="25px"/>
                                    <p className={styles.commentCount}>{item.commentCount}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
                <LoadMore callBackOnClick={()=>console.log("click")}/>
            </div>
        )
}

export { GroupDiscussions };