import { Route, Routes } from "react-router-dom";
import { AddDeckTile } from "../components/AddDeckTile";
import { DeckTile } from "../components/DeckTile";
import styles from "../styles/Dashboard.module.css";

const Dashboard = ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <DeckTile subject="Language" title="French 1" votes="39k" deckID="5"/>
            <AddDeckTile />
            <Routes>
                <Route path="/" element={<DeckTile subject="Language" title="French 1" votes="39k" deckID="5"/>} />
                {/*<Route path="deck/*" element={ } />*/}
            </Routes>
        </div>
    )
}

export { Dashboard };