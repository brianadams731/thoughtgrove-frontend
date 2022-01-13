enum EditFocusKind{
    NewCard,
    EditCard,
    NewDeck,
    EditDeck,
    DeleteDeck,
    DeleteCard,
    None,
    Submit,
}

interface CardData{
    prompt:string,
    answer:string,
}

interface DeckData{
    subject:string,
    title:string,
    description:string,
}

interface EditFocusAction{
    type: EditFocusKind;
    payload?: {
        selectionID?: number,
        cardData?: CardData,
        deckData?: DeckData,
    };
}

export { EditFocusKind };
export type { EditFocusAction, CardData, DeckData }