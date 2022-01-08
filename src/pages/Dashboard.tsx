import { Routes } from "react-router-dom";
import { DeckTileGrid } from "../components/DeckTileGrid";
import styles from "../styles/Dashboard.module.css";

const Dashboard = ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <DeckTileGrid title="test" deckTileData={[]} />
            <Routes>
                {/*<Route path="/" element={<DeckTile subject="Language" title="French 1" votes="39k" deckID="5"/>} />*/}
                {/*<Route path="deck/*" element={ } />*/}
            </Routes>
        </div>
    )
}

export { Dashboard };