import useSWR, { KeyedMutator } from "swr"
import { IDeck } from "../../interfaces/IDeck";
import { APIRoute } from "../../utils/APIRoute";
import { fetcher, ResError } from "../../utils/fetcher";

const usePopularDecks = ():{popularDecks?: IDeck[], isPopularDecksLoading:boolean, error: ResError, popularDecksMutate: KeyedMutator<IDeck>} =>{
    const { data, error, mutate } = useSWR(APIRoute.PopularDecks, fetcher);

    return {
        popularDecks: data,
        isPopularDecksLoading: !data && !error,
        error,
        popularDecksMutate: mutate
    }
}

export { usePopularDecks }