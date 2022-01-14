interface IVote{
    count: number;
    voteCast: VoteState;
}

enum VoteState{
    UpVoted = "upVote",
    DownVoted = "downVote",
    NotVoted = "notVoted"
}

export { VoteState }
export type {IVote};