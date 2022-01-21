import { useParams } from "react-router-dom";
import { PlusSign } from "../svg/PlusSign";

import styles from "../styles/Group.module.css";
import { GroupBulletinBoard } from "../components/GroupBulletinBoard";
import { GroupDiscussions } from "../components/GroupDiscussions";

const Group = () =>{
    const {groupId} = useParams();

    const mockGroup = {
        title:"The French Quarter",
        id:1,
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.headWrapper}>

        
                <div className={styles.imageTitleBlock}>
                    <div className={styles.headingImage}>
                        <img alt="hero"  src="https://images.unsplash.com/photo-1623239715110-631c5195f442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
                    </div>
                    <div className={styles.subjectTitleBlock}>
                        <h6 className={styles.subject}>Group</h6>
                        <h1>{mockGroup.title}</h1>
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