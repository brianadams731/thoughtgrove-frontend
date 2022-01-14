import useSWR, { KeyedMutator } from "swr"
import { IDeck } from "../../interfaces/IDeck";
import { APIRoute } from "../../utils/APIRoute";
import { fetcher, ResError } from "../../utils/fetcher";

const useOwnersDecks = ():{ownersDecks?: IDeck[], isOwnersDecksLoading:boolean, error: ResError, ownersDecksMutate: KeyedMutator<IDeck>} =>{
    const { data, error, mutate } = useSWR(APIRoute.OwnersDecks, fetcher);

    return {
        ownersDecks: data,
        isOwnersDecksLoading: !data && !error,
        error,
        ownersDecksMutate: mutate
    }
}

export { useOwnersDecks }