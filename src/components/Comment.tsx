import { motion } from "framer-motion";

import styles from "../styles/Comment.module.css";
import { CogIcon } from "../svg/CogIcon";

interface Props{
    title:string;
    username:string;
    comment:string;
    userOwnsComment:boolean;
}

const Comment = ({title, username, comment, userOwnsComment}:Props):JSX.Element =>{

    const editIcon = {
        initial:{
            fill:"var(--c-main-gray)",
        },
        whileHover:{
            fill:"var( --c-achievement-green)",
            rotate: "360deg",
            transition:{
                rotate:{
                    type:"tween",
                    ease:"linear",
                    repeat: "Infinity",
                    duration: 3,
                }
            }
        }
    }

    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}} className={styles.wrapper}>
            <div className={styles.commentHead}>
                <div className={styles.userInfoWrapper}>
                    <h5 className={styles.title}>{title}</h5>
                    <h3 className={styles.username}>{username}</h3>
                </div>
                {userOwnsComment&& 
                <motion.div variants={editIcon} initial="initial" whileHover="whileHover" className={styles.editWrapper} >
                    <CogIcon height="25px"/>
                </motion.div>}
            </div>
            <p className={styles.commentBody}>{comment}</p>
        </motion.div>
    )
}

export { Comment };