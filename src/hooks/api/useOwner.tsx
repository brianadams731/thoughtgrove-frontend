import useSWR, { KeyedMutator } from "swr";
import { IOwner } from "../../interfaces/IOwner";
import { APIRoute } from "../../utils/APIRoute";
import { fetcher, ResError } from "../../utils/fetcher";

const useOwner = ():{owner:IOwner, isLoading:boolean ,error: ResError, mutate: KeyedMutator<IOwner>} =>{
    const {data, error, mutate} = useSWR(APIRoute.Owner,fetcher);
    return ({
        owner: data,
        isLoading: !data && !error,
        error,
        mutate
    })
}

export { useOwner };