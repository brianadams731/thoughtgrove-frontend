import useSWR, { KeyedMutator } from "swr"
import { APIRoute } from "../../utils/APIRoute"
import { fetcher, ResError } from "../../utils/fetcher"

interface IDiscussionById{
    id:number,
    title:string,
    content:string,
    groupId:number,
    author:{
        id:number;
        username:string;
    }
}

const useDiscussionById = (discussionId:string|number|undefined):{discussionData: IDiscussionById,  discussionError:ResError, isDiscussionLoading: boolean, mutateDiscussion: KeyedMutator<IDiscussionById>} =>{
    const {data, error, mutate} = useSWR( `${APIRoute.DiscussionById}/${discussionId}`, fetcher)
    return ({
        discussionData: data,
        isDiscussionLoading: !data && !error,
        discussionError: error,
        mutateDiscussion: mutate
    })
}

export { useDiscussionById };