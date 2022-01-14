interface IDeckTile {
    subject: string;
    title: string;
    votes: string;
    deckID: number;
    deckRelation: DeckOwnership;
}

enum DeckOwnership{
    Owner = "owner",
    Subscriber = "subscriber",
    Guest = "guest"
}

export type {IDeckTile}
export { DeckOwnership };