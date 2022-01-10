import { IDeckMetaData } from "./IDeckMetaData";

interface ICard{
    deckMetaData: IDeckMetaData;
    prompt:string;
    answer:string;
}

export type {ICard};