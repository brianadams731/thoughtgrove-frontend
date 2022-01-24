
import { useNavigate } from 'react-router-dom';
import styles from '../styles/DiscussionComment.module.css';

interface Props{
    content:string;
    userId:number;
    username:string;
    isOwner:boolean;
}

const DiscussionComment = ({ content, userId, username, isOwner }:Props):JSX.Element =>{
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.authorBox}>
                <h4 className={styles.username} onClick={()=>{
                    navigate(`/dashboard/profile/${userId}`)
                }}>{username}</h4>
            </div>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    )
}

export { DiscussionComment }