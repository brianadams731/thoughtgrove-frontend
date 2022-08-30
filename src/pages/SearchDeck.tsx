import { useCallback, useState } from "react";
import { DeckTileGrid } from "../components/DeckTileGrid";
import { TopSearchBar } from "../components/TopSearchBar";
import { IDeck } from "../interfaces/IDeck";
import { useToastStore } from "../stores/toastStore";
import { APIRoute } from "../utils/APIRoute";


const SearchDeck = (): JSX.Element => {
    const [deckData, setDeckData] = useState<IDeck[]>([])
    const [isSearching, setIsSearching] = useState(false);
    
    const addToasts = useToastStore(state => state.addToasts);

    const getDeckData = useCallback(async (inputValue: string) => {
        if (!inputValue) {
            addToasts({ subject: "Tip", description: "Enter a search value" });
            return;
        }
        try {
            setIsSearching(true);
            const res = await fetch(`${APIRoute.SearchDeck}/${inputValue}`);
            const parsed = await res.json() as IDeck[];
            setDeckData(parsed);
        } finally {
            setIsSearching(false);
        }
    },[setIsSearching, setDeckData, addToasts])

    return (
        <TopSearchBar onFormSubmitAsync={getDeckData} isSearching={isSearching}>
            <DeckTileGrid deckTileData={deckData} title={`${deckData.length} results`} />
        </TopSearchBar>
    )
}


export { SearchDeck };