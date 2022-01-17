import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import styles from "../styles/CommentTray.module.css";
import { SendIcon } from "../svg/SendIcon";
import { WrongIcon } from "../svg/WrongIcon";
import { Comment } from "./Comment";

interface Props{
    deckId:number;
    setShowComment:Dispatch<SetStateAction<boolean>>;
}
const CommentTray = ({deckId, setShowComment}:Props):JSX.Element =>{


    const variants = {
        initial:{
            y:"110%",
            x:"-50%",
        },
        animate:{
            y:"0%",
            x:"-50%",
            transition:{
                duration:.6
            }
        },
        exit:{
            y:"110%",
            x:"-50%",
            transition:{
                duration:.6
            }
        }
    }

    return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className={styles.wrapper} onClick={(e)=>e.stopPropagation()}>
            <motion.div initial={{fill:"var(--c-main-gray)"}} whileHover={{fill:"var(--c-achievement-orange)", scale:1.05}} whileTap={{scale:.95}} className={styles.exitIcon} onClick={()=>{
                setShowComment(false);
            }}>
                <WrongIcon width="25px" />
            </motion.div>

            <div className={styles.commentWrapper}>
                <Comment title="achevement" username="brianadams731" comment="
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                "/>
                <Comment title="achevement" username="brianadams731" comment="
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                "/>
                <Comment title="achevement" username="brianadams731" comment="
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                "/>
                <Comment title="achevement" username="brianadams731" comment="
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                "/>
                <Comment title="achevement" username="brianadams731" comment="
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                "/>
                <Comment title="achevement" username="brianadams731" comment="
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                "/>
            </div>
            <div className={styles.postCommentWrapper}>
                <div className={styles.userCommentInput} contentEditable></div>
                <button className={styles.sendBtn}>
                    <SendIcon width="25px" />
                </button>
            </div>
        </motion.div>
    )
}

export { CommentTray };