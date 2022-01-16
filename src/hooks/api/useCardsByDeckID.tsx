import useSWR, { KeyedMutator } from "swr"
import { ICardResponse } from "../../interfaces/ICard"
import { APIRoute } from "../../utils/APIRoute"
import { fetcher, ResError } from "../../utils/fetcher"

const useCardsByDeckID = (cardID:string|number|undefined):{cardData: ICardResponse,  error:ResError, isCardLoading: boolean, mutateCards: KeyedMutator<ICardResponse>} =>{
    const {data, error, mutate} = useSWR( `${APIRoute.CardsByDeckID}/${cardID}`, fetcher);
    return ({
        cardData: data,
        isCardLoading: !data && !error,
        error,
        mutateCards: mutate
    })
}

export { useCardsByDeckID };