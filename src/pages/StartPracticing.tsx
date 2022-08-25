import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/LoadingSpinner"
import { useOwnersDecks } from "../hooks/api/useOwnersDeck"

import styles from "../styles/StartPracticing.module.css";

const StartPracticing = ():JSX.Element =>{
    const {ownersDecks, isOwnersDecksLoading, error} = useOwnersDecks();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!error && !isOwnersDecksLoading && ownersDecks.length > 0){
            const randChoice = Math.floor(Math.random() * ownersDecks.length);
            navigate(`/dashboard/deck/${ownersDecks[randChoice].id}`)
        }
    },[ownersDecks, error, isOwnersDecksLoading, navigate])


    if(ownersDecks.length === 0 && !isOwnersDecksLoading){
        return (
            <div className={styles.wrapper}>
                <h2>Looks like you don't have any decks to study!</h2> 
                <h2>Create some <Link to="/dashboard">here</Link> or subscribe to other decks</h2>
            </div>
        )
    }
    
    return (
        <div className={styles.wrapper}>
            <LoadingSpinner />
        </div>
    )
}

export {StartPracticing}