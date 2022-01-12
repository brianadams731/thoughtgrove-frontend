interface IDeckTile {
    subject: string;
    title: string;
    votes: string;
    deckID: string;
    userOwnsDeck?:boolean;
}

export type {IDeckTile}