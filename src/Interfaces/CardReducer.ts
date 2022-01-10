enum CardActionKind{
    CorrectAnswer = "correctAnswer",
    WrongAnswer = "wrongAnswer"
}

interface CardAction{
    type: CardActionKind;
    payload: boolean;
}

export { CardActionKind };
export type { CardAction };