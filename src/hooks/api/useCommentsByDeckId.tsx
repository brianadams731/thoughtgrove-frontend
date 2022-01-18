import useSWR, { KeyedMutator } from "swr"
import { IComment } from "../../interfaces/IComment";
import { APIRoute } from "../../utils/APIRoute"
import { fetcher, ResError } from "../../utils/fetcher"

const useCommentsByDeckID = (deckId:string|number|undefined):{commentsData: ICommentResponse,  error:ResError, areCommentsLoading: boolean, mutateComments: KeyedMutator<ICommentResponse>} =>{
    const {data, error, mutate} = useSWR( `${APIRoute.CommentsByDeckId}/${deckId}`, fetcher);
    return ({
        commentsData: data,
        areCommentsLoading: !data && !error,
        error,
        mutateComments: mutate
    })
}

interface ICommentResponse{
    deckId:number;
    comments: IComment[];
}

export type { ICommentResponse };
export { useCommentsByDeckID };

/*
{
    "deckId": 1,
    "comments": [
        {
            "id":1,
            "content": "This is a test comment",
            "user": {
                "id": 1,
                "username": "Test"
            }
        },
        {
            "id":2,
            "content": "This is a test comment",
            "user": {
                "id": 1,
                "username": "Test"
            }
        }
    ]
}
*/ 