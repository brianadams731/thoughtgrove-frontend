interface IDeckTile {
    subject: string;
    title: string;
    votes: string;
    deckID: number;
    deckRelation: DeckOwnership;
}

enum DeckOwnership{
    Owner,
    Subscriber,
    Guest
}

export type {IDeckTile}
export { DeckOwnership };