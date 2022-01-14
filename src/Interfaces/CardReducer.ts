import { ICard } from "./ICard";

enum CardActionKind{
    CorrectAnswer = "correctAnswer",
    WrongAnswer = "wrongAnswer",
    Reset = "reset",
}

interface CardAction{
    type: CardActionKind;
    payload?: {
        loadDeck?: ICard[];
    };
}

export { CardActionKind };
export type { CardAction };