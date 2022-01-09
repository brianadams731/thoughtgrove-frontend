import type {IVote} from "./IVote";

interface IDeckTop{
    subject: string;
    title: string;
    description?: string;
    vote: IVote
}

export type {IDeckTop};