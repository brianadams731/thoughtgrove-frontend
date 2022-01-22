import useSWR, { KeyedMutator } from "swr"
import { APIRoute } from "../../utils/APIRoute"
import { fetcher, ResError } from "../../utils/fetcher"

interface IGroupByIdResponse{
    userRole:"owner"|"moderator"|"user"|"banned"|"none";
    group:{
        id:number;
        name:string;
        description:string;
    }
}

const useGroupByID = (groupID:string|number|undefined):{groupData: IGroupByIdResponse,  groupError:ResError, isGroupLoading: boolean, mutateGroup: KeyedMutator<IGroupByIdResponse>} =>{
    const {data, error, mutate} = useSWR( `${APIRoute.GroupById}/${groupID}`, fetcher)
    return ({
        groupData: data,
        isGroupLoading: !data && !error,
        groupError: error,
        mutateGroup: mutate
    })
}

export { useGroupByID };