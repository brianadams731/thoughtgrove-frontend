import type { IDeckMetaData } from "./IDeckMetaData";
import type { IVote } from "./IVote";

interface IDeckTop{
    deckMetaData: IDeckMetaData
    description?: string;
    vote: IVote
}

export type {IDeckTop};