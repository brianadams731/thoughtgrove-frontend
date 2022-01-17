import { motion } from "framer-motion";

import styles from "../styles/Comment.module.css";

interface Props{
    title:string;
    username:string;
    comment:string;
}

const Comment = ({title, username, comment}:Props):JSX.Element =>{
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}} className={styles.wrapper}>
            <h5 className={styles.title}>{title}</h5>
            <h3 className={styles.username}>{username}</h3>
            <p className={styles.commentBody}>{comment}</p>
        </motion.div>
    )
}

export { Comment };