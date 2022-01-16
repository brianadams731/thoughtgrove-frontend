import styles from "../styles/Votes.module.css";
import { VoteState } from "../interfaces/IVote";
import { VoteChevron } from "../svg/VoteChevron";
import { APIRoute } from "../utils/APIRoute";
import { useDeckByID } from "../hooks/api/useDeckByID";
import { postDataAsync } from "../utils/postData";
import { deleteDataAsync } from "../utils/deleteData";
import { useEffect } from "react";

interface Props{
    deckID: number;
}

const Votes = ({deckID}:Props):JSX.Element =>{

    const {deckData, mutateDeck} = useDeckByID(deckID);
    useEffect(()=>{
        console.log(deckData);
    },[deckData])
    const deleteVoteRemote = async() =>{
        const res = await deleteDataAsync(`${APIRoute.PostVotes}/${deckID}`);
        if(res.count !== deckData.vote?.count){
            mutateDeck();
            console.log("ERROR: OFF COUNT")
        }
        return res;
    }
    const updateVoteRemote = async(isUpVote:boolean) =>{
        const res = await postDataAsync(`${APIRoute.PostVotes}/${deckID}`,{isUpVote})
        return res;
    }

    const mutateCache = (countIncrement:number, voteState:VoteState) =>{
        if(!deckData?.vote){
            return;
        }
        mutateDeck({
            ...deckData,
            vote:{
                voteCast: voteState,
                count: deckData.vote.count += countIncrement
            }
        },false)
    }

    const upVote = async() =>{
        if(!deckData.vote){
            return;
        }
        let res;
        if(deckData.vote.voteCast === VoteState.UpVoted){
            mutateCache(-1,VoteState.NotVoted);
            res = await deleteVoteRemote();
        }else if(deckData.vote.voteCast === VoteState.DownVoted){
            mutateCache(2,VoteState.UpVoted);
            res = await updateVoteRemote(true);
            mutateDeck()
        }else{
            mutateCache(1,VoteState.UpVoted);
            res = await updateVoteRemote(true);
            mutateDeck()
        }

        if(res.count !== deckData.vote.count ){
            console.log("ERROR: OFF COUNT")
            mutateDeck();
        }
    }

    const downVote = async() =>{
        if(!deckData.vote){
            return;
        }
        let res;
        if(deckData.vote.voteCast === VoteState.DownVoted){
            mutateCache(1,VoteState.NotVoted);
            res = await deleteVoteRemote();
        }else if(deckData.vote.voteCast === VoteState.UpVoted){
            mutateCache(-2,VoteState.DownVoted);
            res = await updateVoteRemote(false);
        }else{
            mutateCache(-1,VoteState.DownVoted);
            res = await updateVoteRemote(false);
        }
        if(res.count !== deckData.vote.count ){
            console.log("ERROR: OFF COUNT")
            mutateDeck();
        }
    }

    return (
        <div className={styles.wrapper}>
            {deckData&&
            <>
            <div className={styles.upVoteWrapper} onClick={upVote}>
                <VoteChevron fill={deckData.vote?.voteCast === VoteState.UpVoted?"var(--c-achievement-green)":"var(--c-main-gray)"} width="45px" isUpVote={true} />
            </div>

            <h5 className={styles.numberOfVotes}>{deckData.vote?.count}</h5>

            <div className={styles.downVoteWrapper} onClick={downVote}>
                <VoteChevron fill={deckData.vote?.voteCast === VoteState.DownVoted?"var(--c-achievement-orange)":"var(--c-main-gray)"} width="45px" isUpVote={false} />
            </div>
            </>}
        </div>
    )
}

export { Votes }