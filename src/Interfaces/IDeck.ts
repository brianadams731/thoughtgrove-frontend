import { DeckOwnership } from "./IDeckTile";
import { IVote, VoteState } from "./IVote";

interface IDeck{
    id: number;
    title: string;
    subject: string;
    description: string;
    deckRelation: DeckOwnership;
    user?:{
        id:number,
        username:string
    },
    vote?:IVote;
}

export type { IDeck }