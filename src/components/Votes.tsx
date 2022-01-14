import styles from "../styles/Votes.module.css";
import type { IVote } from "../interfaces/IVote";
import { VoteState } from "../interfaces/IVote";
import { VoteChevron } from "../svg/VoteChevron";
import { useEffect, useReducer } from "react";



const Votes = ({count, voteCast}:IVote):JSX.Element =>{

    interface voteStore{
        votes: number;
        voteState:VoteState;
    }
    interface VoteAction{
        type: VoteState;
    }
    const votesReducer = (state:voteStore, action:VoteAction) =>{
        switch(action.type){
            case VoteState.UpVoted:
                if(state.voteState === VoteState.UpVoted){
                    return {
                        votes: state.votes - 1,
                        voteState: VoteState.NotVoted
                    };
                }else if(state.voteState === VoteState.DownVoted){
                    return {
                        votes: state.votes + 2,
                        voteState: VoteState.UpVoted
                    }
                }
                return {
                    votes: state.votes + 1,
                    voteState: VoteState.UpVoted
                };
            case VoteState.DownVoted:
                if(state.voteState === VoteState.DownVoted){
                    return {
                        votes: state.votes + 1,
                        voteState: VoteState.NotVoted
                    };
                }else if(state.voteState === VoteState.UpVoted){
                    return {
                        votes: state.votes - 2,
                        voteState: VoteState.DownVoted
                    }
                }
                return {
                    votes: state.votes - 1,
                    voteState: VoteState.DownVoted
                };
            default:
                return state;
        }
    }


    useEffect(()=>{
        return ()=>{
            console.log("On Clean up update votes")
        }
    },[])

    const [votesStore, dispatch] = useReducer(votesReducer, {votes: count, voteState: voteCast})

    return (
        <div className={styles.wrapper}>
            <div className={styles.upVoteWrapper} onClick={()=>{dispatch({type:VoteState.UpVoted})}}>
                <VoteChevron fill={votesStore.voteState === VoteState.UpVoted?"var(--c-achievement-green)":"var(--c-main-gray)"} width="45px" isUpVote={true} />
            </div>

            <h5 className={styles.numberOfVotes}>{votesStore.votes}</h5>

            <div className={styles.downVoteWrapper} onClick={()=>{dispatch({type: VoteState.DownVoted})}}>
                <VoteChevron fill={votesStore.voteState === VoteState.DownVoted?"var(--c-achievement-orange)":"var(--c-main-gray)"} width="45px" isUpVote={false} />
            </div>
        </div>
    )
}

export { Votes }