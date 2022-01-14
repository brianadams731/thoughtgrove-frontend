import { DeckOwnership } from "./IDeckTile";
import { IVote, VoteState } from "./IVote";

interface IDeck{
    title: string;
    subject: string;
    id: number;
    deckRelation: DeckOwnership;
    user?:{
        id:number,
        username:string
    },
    votes?:IVote;
}

export type { IDeck }