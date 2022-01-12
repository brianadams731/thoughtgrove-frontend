enum EditFocusKind{
    EditCard = "card",
    EditDeck = "deck",
    EditNone = "none",
    ToggleCard = "toggleCard",
    ToggleDeck = "toggleDeck"
}

interface EditFocusAction{
    type: EditFocusKind;
}

export { EditFocusKind };
export type { EditFocusAction };