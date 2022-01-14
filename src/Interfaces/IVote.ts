interface IVote{
    count: number;
    // true, has up voted, false has down voted, undefined has not voted
    voteCast: VoteState;
}

enum VoteState{
    UpVoted = "upVote",
    DownVoted = "downVote",
    NotVoted = "NotVoted"
}

export { VoteState }
export type {IVote};