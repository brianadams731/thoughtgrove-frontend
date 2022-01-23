import useSWR, { KeyedMutator } from "swr"
import { APIRoute } from "../../utils/APIRoute"
import { fetcher, ResError } from "../../utils/fetcher"

interface IDiscussion{
    id:number,
    title:string,
    commentCount: number,
    author:{
        id:number;
        username:string;
    }
}

const useDiscussionsByGroupID = (groupID:string|number|undefined):{groupDiscussionsData: IDiscussion[],  groupDiscussionsError:ResError, areGroupDiscussionsLoading: boolean, mutateGroupDiscussions: KeyedMutator<IDiscussion[]>} =>{
    const {data, error, mutate} = useSWR( `${APIRoute.DiscussionsByGroupId}/${groupID}`, fetcher)
    return ({
        groupDiscussionsData: data,
        areGroupDiscussionsLoading: !data && !error,
        groupDiscussionsError: error,
        mutateGroupDiscussions: mutate
    })
}

export { useDiscussionsByGroupID };