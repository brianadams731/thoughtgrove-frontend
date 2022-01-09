import styles from "../styles/Votes.module.css";
import type { IVote } from "../Interfaces/IVote";
import { VoteChevron } from "../svg/VoteChevron";
import { useEffect, useState } from "react";



const Votes = ({numberOfVotes, hasUpVoted}:IVote):JSX.Element =>{

    const [localHasUpVoted, setLocalHasUpVoted] = useState<boolean|undefined>(hasUpVoted);

    useEffect(()=>{
        console.log(localHasUpVoted);
    },[localHasUpVoted])

    const calcVote = ():number =>{
        if(localHasUpVoted){
            return numberOfVotes + 1;
        }else if(localHasUpVoted === false){
            return numberOfVotes - 1;
        }
        return numberOfVotes;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.upVoteWrapper} onClick={(e)=>{
                if(localHasUpVoted){
                    return setLocalHasUpVoted(undefined);
                }
                setLocalHasUpVoted(true);
            }}>
                <VoteChevron fill={localHasUpVoted?"var(--c-achievement-green)":"var(--c-main-gray)"} width="45px" isUpVote={true} />
            </div>

            <h5 className={styles.numberOfVotes}>{calcVote()}</h5>

            <div className={styles.downVoteWrapper} onClick={(e)=>{
                if(localHasUpVoted === false){
                    return setLocalHasUpVoted(undefined);
                }
                setLocalHasUpVoted(false)
            }}>
                <VoteChevron fill={localHasUpVoted === false?"var(--c-achievement-orange)":"var(--c-main-gray)"} width="45px" isUpVote={false} />
            </div>
        </div>
    )
}

export { Votes }