import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentInput } from "../components/CommentInput";
import { DiscussionComment } from "../components/DiscussionComment";
import { useDiscussionById } from "../hooks/api/useDiscussionByIs";
import { useDiscussionCommentsByDiscussionId } from "../hooks/api/useDiscussionCommentsByDiscussionId";
import { useOwner } from "../hooks/api/useOwner";
import { useDimension } from "../hooks/useDimension";

import styles from "../styles/Discussion.module.css";
import { APIRoute } from "../utils/APIRoute";
import { postDataAsync } from "../utils/postData";

const Discussion = ():JSX.Element =>{
    const { discussionId } = useParams();
    const { owner } = useOwner();

    const { discussionData, isDiscussionLoading, discussionError } = useDiscussionById(discussionId);
    const { discussionCommentsData, mutateDiscussionComments } = useDiscussionCommentsByDiscussionId(discussionId)

    const [scrollToBottom, setScrollToBottom] = useState<boolean>(false);
    const inputDiv = useRef<HTMLDivElement>(null);

    const [dimensionCommentTray, commentTrayRef] = useDimension<HTMLDivElement>();

    const submitContentAsync = async() =>{
        const comment = inputDiv.current!.innerText;
        if(comment === ""){
            return;
        }
        inputDiv.current!.innerHTML = "";
        await postDataAsync(`${APIRoute.AddDiscussionComment}/${discussionId}`,{
            content:comment,
            groupId: discussionData.groupId
        });
        setScrollToBottom(true);
        mutateDiscussionComments();
    }

    useEffect(()=>{
        if(scrollToBottom){
            var timeout = setTimeout(()=>{
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
            },200)
            setScrollToBottom(false);
        }
        return ()=>{
            clearTimeout(timeout);
        }
        //eslint-disable-next-line
    },[discussionCommentsData])

    
    if(isDiscussionLoading) return (
        <div>
            Loading...
        </div>
    )

    if(discussionError) return (
        <div>
            Error
        </div>
    )

    return(
        <div className={styles.wrapper}>
            <section className={styles.headBlock}>
                <h5 className={styles.author}>{discussionData.author.username}</h5>
                <h1 className={styles.title}>{discussionData.title}</h1>
                <p className={styles.content}>{discussionData.content}</p>
            </section>
            <div className={styles.commentWrapper} style={{paddingBottom:dimensionCommentTray?.height}}>
                {discussionCommentsData?.map(item=>{
                    return (
                        <DiscussionComment content={item.content} username={item.author.username} userId={item.author.id} isOwner={item.author.id === owner?.id} key={item.id} />
                    )
                })}
            </div>
            <div className={styles.commentInputWrapper} ref={commentTrayRef}>
                <CommentInput submitCommentAsync={submitContentAsync} ref={inputDiv}/>
            </div>
        </div>
    )
}

export { Discussion }