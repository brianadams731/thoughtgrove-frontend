import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { KeyedMutator } from "swr";
import { ICommentResponse } from "../hooks/api/useCommentsByDeckId";

import styles from "../styles/Comment.module.css";
import { CogIcon } from "../svg/CogIcon";
import { APIRoute } from "../utils/APIRoute";
import { deleteDataAsync } from "../utils/deleteData";

interface Props{
    id:number;
    title:string;
    username:string;
    comment:string;
    userOwnsComment:boolean;
    parentClicked: boolean;
    commentsData:ICommentResponse;
    mutateComments: KeyedMutator<ICommentResponse>;
}

const Comment = ({id,title, username, comment, userOwnsComment, mutateComments, commentsData, parentClicked}:Props):JSX.Element =>{
    const [showEditMenu, setShowEditMenu] = useState(false);

    useEffect(()=>{
        if(showEditMenu){
            setShowEditMenu(false);
        }
        //eslint-disable-next-line
    },[parentClicked])

    const editIcon = {
        initial:{
            fill:"var(--c-main-gray)",
        },
        whileHover:{
            fill:"var(--c-achievement-green)",
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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.7}} className={styles.wrapper} onClick={()=>setShowEditMenu(false)}>
            <div className={styles.commentHead}>
                <div className={styles.userInfoWrapper}>
                    <h5 className={styles.title}>{title}</h5>
                    <h3 className={styles.username}>{username}</h3>
                </div>
                {userOwnsComment&& 
                <motion.div variants={editIcon} initial="initial" whileHover="whileHover" className={styles.editWrapper} onClick={(e)=>{
                    e.stopPropagation();
                    setShowEditMenu(prev=>!prev);
                }}>
                    <CogIcon height="25px"/>
                </motion.div>}
            </div>
            <p className={styles.commentBody}>{comment}</p>
            
            <AnimatePresence>
            {showEditMenu && userOwnsComment&&
            <motion.div initial={{x:"105%", y:"-50%"}} animate={{x:"0%", y:"-50%"}}  exit={{x:"115%", y:"-50%"}} transition={{duration:.7, type:"spring", bounce:.4}} className={styles.editMenu}>
                <motion.div animate={{backgroundColor:"var(--c-white)"}} whileHover={{backgroundColor:"var(--c-achievement-blue)", color:"var(--c-white)"}} className={styles.editCommentWrapper}>
                    <h5>Edit Comment</h5>
                </motion.div>
                <motion.div animate={{backgroundColor:"var(--c-white)"}} whileHover={{backgroundColor:"var(--c-achievement-orange)", color:"var(--c-white)"}} className={styles.deleteCommentWrapper} onClick={async ()=>{
                    mutateComments({
                        deckId: commentsData.deckId,
                        comments: commentsData.comments.filter(item => item.id !== id)
                    }, false)
                    await deleteDataAsync(`${APIRoute.CommentById}/${id}`)
                }}>
                    <h5>Delete Comment</h5>
                </motion.div>
            </motion.div>
            }
            </AnimatePresence>
        </motion.div>
    )
}

export { Comment };