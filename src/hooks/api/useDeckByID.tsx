import useSWR, { KeyedMutator } from "swr"
import { IDeck } from "../../interfaces/IDeck"
import { APIRoute } from "../../utils/APIRoute"
import { fetcher, ResError } from "../../utils/fetcher"

const useDeckByID = (deckID:string|number|undefined):{deckData: IDeck,  error:ResError, isDeckLoading: boolean, mutateDeck: KeyedMutator<IDeck>} =>{
    const {data, error, mutate} = useSWR( `${APIRoute.DeckByID}/${deckID}`, fetcher)
    return ({
        deckData: data,
        isDeckLoading: !data && !error,
        error,
        mutateDeck: mutate
    })
}

export { useDeckByID };