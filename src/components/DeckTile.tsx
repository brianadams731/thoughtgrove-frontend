import { useNavigate } from "react-router-dom";
import styles from "../styles/DeckTile.module.css";
import { Logo } from "../svg/Logo";

interface Props{
    subject: string;
    title: string;
    votes: string;
    deckID: string;
}

const DeckTile = ({subject,title,votes, deckID}:Props):JSX.Element =>{
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper} onClick={()=>{navigate(`deck/${deckID}`)}}>
            <div className={styles.textBox}>
                <h3 className={styles.subject}>{subject}</h3>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.logoVoteBox}>
                <div className={styles.svgWrapper}>
                    <Logo fill="var(--c-main-gray)" svgWidth="30px"/>
                </div>
                <h3 className={styles.votes}>{votes}</h3>
            </div>
        </div>
    )
}

export { DeckTile };