import styles from "../styles/Votes.module.css";
import { VoteState } from "../interfaces/IVote";
import { VoteChevron } from "../svg/VoteChevron";
import { APIRoute } from "../utils/APIRoute";
import { useDeckByID } from "../hooks/api/useDeckByID";
import { postDataAsync } from "../utils/postData";
import { deleteDataAsync } from "../utils/deleteData";

interface Props{
    deckID: number;
}

const Votes = ({deckID}:Props):JSX.Element =>{

    const {deckData, mutateDeck} = useDeckByID(deckID);

    const deleteVoteRemote = async() =>{
        await deleteDataAsync(`${APIRoute.PostVotes}/${deckID}`);
    
    }
    const updateVoteRemote = async(isUpVote:boolean) =>{
        await postDataAsync(`${APIRoute.PostVotes}/${deckID}`,{isUpVote})
        return;
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

        if(deckData.vote.voteCast === VoteState.UpVoted){
            mutateCache(-1,VoteState.NotVoted);
            deleteVoteRemote();
        }else if(deckData.vote.voteCast === VoteState.DownVoted){
            mutateCache(2,VoteState.UpVoted);
            updateVoteRemote(true);
        }else{
            mutateCache(1,VoteState.UpVoted);
            updateVoteRemote(true);
        }
    }

    const downVote = async() =>{
        if(!deckData.vote){
            return;
        }

        if(deckData.vote.voteCast === VoteState.DownVoted){
            mutateCache(1,VoteState.NotVoted);
            deleteVoteRemote();
        }else if(deckData.vote.voteCast === VoteState.UpVoted){
            mutateCache(-2,VoteState.DownVoted);
            updateVoteRemote(false);
        }else{
            mutateCache(-1,VoteState.DownVoted);
            updateVoteRemote(false);
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