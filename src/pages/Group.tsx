import { useParams } from "react-router-dom";
import { PlusSign } from "../svg/PlusSign";

import styles from "../styles/Group.module.css";
import { GroupBulletinBoard } from "../components/GroupBulletinBoard";
import { GroupDiscussions } from "../components/GroupDiscussions";
import { useGroupByID } from "../hooks/api/useGroupById";

const Group = () =>{
    const {groupId} = useParams();
    const {groupData, groupError} = useGroupByID(groupId)

    if(!groupData)return (
        <div>
            Loading
        </div>
    )
    if(groupError) return (
        <div>
            Error!
        </div>
    )

    return (
        <div className={styles.wrapper}>
            <div className={styles.headWrapper}>

        
                <div className={styles.imageTitleBlock}>
                    <div className={styles.headingImage}>
                        <img alt="hero"  src="https://images.unsplash.com/photo-1623239715110-631c5195f442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
                    </div>
                    <div className={styles.subjectTitleBlock}>
                        <h6 className={styles.subject}>Group</h6>
                        <h1>{groupData.group.name}</h1>
                    </div>
                </div>

                <div className={styles.addGroupBtn}>
                    <PlusSign width="35px" />
                </div>
                
            </div>

            <div className={styles.bulletinBoardWrapper}>
                <GroupBulletinBoard groupId={groupId!} />
            </div>
            
            <div className={styles.discussionsWrapper}>
                <GroupDiscussions groupId={groupId!} />
            </div>
            
            <div className={styles.decksWrapper}>

            </div>
        </div>
    )
}

export { Group }