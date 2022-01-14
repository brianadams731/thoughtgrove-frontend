import { DeckOwnership } from "./IDeckTile";

interface IDeck{
    subject: string;
    title: string;
    votes: string;
    id: number;
    deckRelation: DeckOwnership;
}

export type { IDeck }