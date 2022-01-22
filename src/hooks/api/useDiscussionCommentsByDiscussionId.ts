import useSWR, { KeyedMutator } from "swr"
import { APIRoute } from "../../utils/APIRoute"
import { fetcher, ResError } from "../../utils/fetcher"

interface IDiscussionCommentsByDiscussionIdResponse{
    id:number;
    content: string;
    author:{
        id:number;
        username:string;
    }
}

const useDiscussionCommentsByDiscussionId = (discussionId:string|number|undefined):{discussionCommentsData: IDiscussionCommentsByDiscussionIdResponse,  discussionCommentsError:ResError, areDiscussionCommentsLoading: boolean, mutateDiscussionComments: KeyedMutator<IDiscussionCommentsByDiscussionIdResponse>} =>{
    const {data, error, mutate} = useSWR( `${APIRoute.DiscussionCommentsByDiscussionId}/${discussionId}`, fetcher)
    return ({
        discussionCommentsData: data,
        areDiscussionCommentsLoading: !data && !error,
        discussionCommentsError: error,
        mutateDiscussionComments: mutate
    })
}

export { useDiscussionCommentsByDiscussionId };