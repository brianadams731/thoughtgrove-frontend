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

interface EditFocusAction{
    type: EditFocusKind;
    payload?: number;
}

export { EditFocusKind };
export type { EditFocusAction }