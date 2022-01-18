import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useCommentsByDeckID } from "../hooks/api/useCommentsByDeckId";
import styles from "../styles/CommentTray.module.css";
import { SendIcon } from "../svg/SendIcon";
import { WrongIcon } from "../svg/WrongIcon";
import { APIRoute } from "../utils/APIRoute";
import { postDataAsync } from "../utils/postData";
import { Comment } from "./Comment";

interface Props{
    deckId:number;
    setShowComment:Dispatch<SetStateAction<boolean>>;
}

const CommentTray = ({deckId, setShowComment}:Props):JSX.Element =>{

    const {commentsData, areCommentsLoading, mutateComments} = useCommentsByDeckID(deckId);
    const [parentClicked, setParentClicked] = useState(false);
    const [scrollToBottom, setScrollToBottom] = useState<boolean>(false);

    const commentWrapperDiv = useRef<HTMLDivElement>(null);
    const inputDiv = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        setParentClicked(false);
    },[parentClicked])

    useEffect(()=>{
        if(scrollToBottom && commentWrapperDiv.current){
            var timeout = setTimeout(()=>{
                commentWrapperDiv.current!.scrollTo({top:commentWrapperDiv.current!.scrollHeight, behavior:"smooth"});
            },200)
            setScrollToBottom(false);
        }
        return ()=>{
            clearTimeout(timeout);
        }
        //eslint-disable-next-line
    },[commentsData])

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

    async function submitCommentAsync(){
        const comment = inputDiv.current!.innerText;
        if(comment ===""){
            return;
        }
        inputDiv.current!.innerHTML = "";
        await postDataAsync(`${APIRoute.AddComment}/${deckId}`,{
            content: comment
        });
        setScrollToBottom(true);
        mutateComments();
    }
    
    return (
        <motion.div variants={variants} initial="initial" animate={areCommentsLoading?"initial":"animate"} exit="exit" className={styles.wrapper} onClick={(e)=>{
            e.stopPropagation();
            setParentClicked(true);
        }}>
            <motion.div initial={{fill:"var(--c-main-gray)"}} whileHover={{fill:"var(--c-achievement-orange)", scale:1.05}} whileTap={{scale:.95}} className={styles.exitIcon} onClick={()=>{
                setShowComment(false);
            }}>
                <WrongIcon width="25px" />
            </motion.div>
            <div className={styles.commentWrapper} ref={commentWrapperDiv}>
                {commentsData?.comments?.length === 0 && !areCommentsLoading &&
                    <div className={styles.noCommentsToShowWrapper}>
                        <h3>There are no comments yet!</h3>
                    </div>
                }
                <AnimatePresence>
                    {commentsData &&
                    commentsData.comments.map((item, index) =>{
                        return(
                            <Comment title={"Placeholder"}
                            comment={item.content}
                            username={item.user.username} 
                            userOwnsComment={item.userOwnsComment}
                            id={item.id}
                            commentsData={commentsData} 
                            mutateComments={mutateComments}
                            parentClicked={parentClicked} 
                            key={`${item.id}+${item.user.id}`} />
                        )
                    })}
                </AnimatePresence>
            </div>
            <div className={styles.postCommentWrapper}>
                <div className={styles.userCommentInput} contentEditable ref={inputDiv} onKeyDown={async(e)=>{
                    if(e.key === "Enter"){
                        e.preventDefault();
                        submitCommentAsync();
                    }
                }}></div>
                <button className={styles.sendBtn} onClick={async ()=>{
                    submitCommentAsync();
                }}>
                    <SendIcon width="25px" />
                </button>
            </div>
        </motion.div>
    )
}

export { CommentTray };