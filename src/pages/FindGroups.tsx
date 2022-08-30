import { useCallback, useState } from "react";
import { useToastStore } from "../stores/toastStore";
import { APIRoute } from "../utils/APIRoute";

import { TopSearchBar } from "../components/TopSearchBar";
import { IGroupTile } from "../components/GroupTile";
import { GroupGrid } from "../components/GroupGrid";

const FindGroups = (): JSX.Element => {
    const [groupData, setGroupData] = useState<IGroupTile[]>([])
    const [isSearching, setIsSearching] = useState(false);
    const addToasts = useToastStore(state => state.addToasts);

    const getGroupData = useCallback(async (inputVal:string) => {
        if (!inputVal) {
            addToasts({ subject: "Tip", description: "Enter a search value" });
            return;
        }
        try {
            setIsSearching(true);
            const res = await fetch(`${APIRoute.SearchForGroup}/${inputVal}`);
            const parsed = await res.json() as IGroupTile[];
            setGroupData(parsed);
        } finally {
            setIsSearching(false);
        }
    },[setIsSearching, setGroupData, addToasts])

    return (
        <TopSearchBar onFormSubmitAsync={getGroupData} isSearching={isSearching}>
            <GroupGrid groupTileData={groupData} title={`Results: ${groupData.length}`}/>
        </TopSearchBar>
    )
}

export { FindGroups };