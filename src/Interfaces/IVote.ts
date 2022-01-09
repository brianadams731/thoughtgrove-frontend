interface IVote{
    numberOfVotes: number;
    // true, has up voted, false has down voted, undefined has not voted
    hasUpVoted: boolean|undefined;
}

export type {IVote};