import { CardPlain } from "../components/CardPlain";
import { DeckTop } from "../components/DeckTop";
import { ICardPlain } from "../Interfaces/ICardPlain";
import { IDeckTop } from "../Interfaces/IDeckTop";
import styles from "../styles/Deck.module.css";

const Deck = ():JSX.Element =>{
    const exampleDeck:IDeckTop = {
        deckMetaData:{
            subject:"Language",
            title:"French 1",
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
        vote:{
            numberOfVotes: 50,
            hasUpVoted: undefined,
        }
    }

    const cardData:ICardPlain = {
        deckMetaData:{
            subject:"Language",
            title:"French 1",
        },
        prompt: "Test Prompt",
        answer: "Test Answer"
    }

    return ( 
        <div className={styles.wrapper}>
            {/*<CardPlain deckMetaData={cardData.deckMetaData} prompt={cardData.prompt} answer={cardData.answer}/>*/}

            <DeckTop deckMetaData={exampleDeck.deckMetaData} description={exampleDeck.description} vote={exampleDeck.vote} key={exampleDeck.deckMetaData.title} />
        </div>
    )
}

export { Deck };