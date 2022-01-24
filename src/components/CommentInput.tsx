import { ForwardedRef, forwardRef } from "react";
import styles from "../styles/CommentInput.module.css";
import { SendIcon } from "../svg/SendIcon";

interface Props{
    submitCommentAsync: ()=>void
}

const CommentInput = forwardRef(({submitCommentAsync}:Props, inputDivRef:ForwardedRef<HTMLDivElement>):JSX.Element =>{
    return (
        <div className={styles.postCommentWrapper}>
            <div className={styles.userCommentInput} contentEditable ref={inputDivRef} onKeyDown={async(e)=>{
                if(e.key === "Enter"){
                    e.preventDefault();
                    submitCommentAsync()
                }
            }}></div>
            <button className={styles.sendBtn} onClick={async ()=>{
                submitCommentAsync();
            }}>
                <SendIcon width="25px" />
            </button>
        </div>
    )
})

export { CommentInput };