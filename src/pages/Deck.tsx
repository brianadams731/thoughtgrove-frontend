import { DeckTop } from "../components/DeckTop";
import { IDeckTop } from "../Interfaces/IDeckTop";
import styles from "../styles/Deck.module.css";

const Deck = ():JSX.Element =>{
    const exampleDeck:IDeckTop = {
        subject:"Language",
        title:"French 2",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
        vote:{
            numberOfVotes: 50,
            hasUpVoted: true,
        }
    }

    return ( 
        <div className={styles.wrapper}>
            <DeckTop subject={exampleDeck.subject} title={exampleDeck.title} description={exampleDeck.description} vote={exampleDeck.vote} />
        </div>
    )
}

export { Deck };