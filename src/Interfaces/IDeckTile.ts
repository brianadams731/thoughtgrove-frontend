interface IDeckTile {
    subject: string;
    title: string;
    votes: string;
    deckID: number;
    userOwnsDeck?:boolean;
}

export type {IDeckTile}