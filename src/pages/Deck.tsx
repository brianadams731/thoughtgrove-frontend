import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useReducer, useState } from "react";
import { CardPlain } from "../components/CardPlain";
import { DeckTop } from "../components/DeckTop";
import { CardAction, CardActionKind } from "../interfaces/CardReducer";
import { useParams } from "react-router-dom";
import { useDeckByID } from "../hooks/api/useDeckByID";
import { useCardsByDeckID } from "../hooks/api/useCardsByDeckID";
import { ICard } from "../interfaces/ICard";
import { CommentTray } from "../components/CommentTray";

import styles from "../styles/Deck.module.css";

const Deck = (): JSX.Element => {
    const { deckId } = useParams();
    const { deckData } = useDeckByID(deckId);
    const { cardData } = useCardsByDeckID(deckId);

    const [showDeckTop, setShowDeckTop] = useState(true);
    const [showComments, setShowComments] = useState(false);

    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);

    useEffect(() => {
        if (!cardData) {
            return;
        }
        dispatch({
            type: CardActionKind.Reset, payload: {
                loadDeck: cardData.cards
            }
        })
    }, [cardData])

    const cardStore: CardState = {
        toStudy: [],
        complete: []
    }

    interface CompleteCardData {
        cardID: number;
        correctAnswer: boolean;
    }

    interface CardState {
        toStudy: ICard[];
        complete: CompleteCardData[];
    }

    const cardStoreReducer = (state: CardState, action: CardAction) => {
        // Initializer
        if (action.type === CardActionKind.Reset) {
            return ({
                toStudy: action.payload?.loadDeck ? action.payload.loadDeck : [], //TODO filter out completed, incase revalidate!
                complete: state.complete,
            })
        }

        // Card Logic
        const currentCard = state.toStudy[state.toStudy.length - 1];
        switch (action.type) {
            case CardActionKind.CorrectAnswer:
                return {
                    toStudy: [...state.toStudy.slice(0, state.toStudy.length - 1)],
                    complete: [...state.complete, {
                        cardID: currentCard.id!,
                        correctAnswer: true
                    }],
                }
            case CardActionKind.WrongAnswer:
                return {
                    toStudy: [...state.toStudy.slice(0, state.toStudy.length - 1)],
                    complete: [...state.complete, {
                        cardID: currentCard.id!,
                        correctAnswer: false
                    }],
                }
        }
    }
    const [cardDeck, dispatch] = useReducer(cardStoreReducer, cardStore);

    return (
        <div className={styles.wrapper} onClick={(e) => {
            if (e.target === e.currentTarget) {
                setShowComments(false)
            }
        }}>
            <AnimatePresence>
                {cardDeck.complete.length > 0 && cardDeck.toStudy.length === 0 &&
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }} className={styles.counter}>
                        <h3>Correct: <span className={styles.correct}>{correct}</span></h3>
                        <h3>Incorrect: <span className={styles.incorrect}>{incorrect}</span></h3>
                    </motion.div>
                }

                {deckData && cardDeck.toStudy.map((item) => {
                    return (
                        <CardPlain
                            key={item.id}
                            deckMetaData={{ subject: deckData.subject, title: deckData.title }}
                            prompt={item.prompt}
                            answer={item.answer}
                            dispatch={dispatch}
                            cardIndex={cardDeck.complete.length}
                            setCorrect={setCorrect}
                            setIncorrect={setIncorrect}
                        />
                    )
                })}
                {showDeckTop && deckData &&
                    <DeckTop deckID={deckData.id} key={deckData.subject} setShowDeckTop={setShowDeckTop} setShowComment={setShowComments} />}

                {showComments && deckData && showDeckTop &&
                    <CommentTray deckId={deckData.id} setShowComment={setShowComments} />}
            </AnimatePresence>
        </div>
    )
}

export { Deck };