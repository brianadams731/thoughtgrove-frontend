import { useState } from "react";
import { DeckTileGrid } from "../components/DeckTileGrid";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { IDeck } from "../interfaces/IDeck";
import { useToastStore } from "../stores/toastStore";

import homeStyles from "../styles/Home.module.css";
import styles from "../styles/SearchDeck.module.css";
import { APIRoute } from "../utils/APIRoute";


const SearchDeck = (): JSX.Element => {
    const [queryKey, setQuery] = useState<string>("");
    const [deckData, setDeckData] = useState<IDeck[]>([])
    const [isSearching, setIsSearching] = useState(false);
    
    const addToasts = useToastStore(state => state.addToasts);

    const getDeckData = async () => {
        if (!queryKey) {
            addToasts({ subject: "Tip", description: "Enter a search value" });
            return;
        }
        try {
            setIsSearching(true);
            const res = await fetch(`${APIRoute.SearchDeck}/${queryKey}`);
            const parsed = await res.json() as IDeck[];
            setDeckData(parsed);
        } finally {
            setIsSearching(false);
        }
    }

    return (
        <div className={homeStyles.wrapper}>
            <div>
                <form className={styles.searchForm} onSubmit={async (e) => {
                    e.preventDefault();
                    await getDeckData();
                }}>
                    <input type="text" value={queryKey} onChange={(e) => {
                        setQuery(e.target.value);
                    }} onKeyDown={async (e) => {
                        if (e.key === "Enter") {
                            await getDeckData();
                        }
                    }} />
                    <button type="submit">Search</button>
                </form>
            </div>

            {isSearching ? <LoadingSpinner />:<DeckTileGrid deckTileData={deckData} title={`${deckData.length} results`} />}
        </div>
    )
}

export { SearchDeck };