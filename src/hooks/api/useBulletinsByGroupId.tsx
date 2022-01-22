import useSWR, { KeyedMutator } from "swr";
import { APIRoute } from "../../utils/APIRoute";
import { fetcher, ResError } from "../../utils/fetcher";

interface IBulletinsByGroupIdResponse{
    id:number;
    message:string;
}

const useBulletinsGroupById = (groupID:string|number|undefined):{bulletinsData: IBulletinsByGroupIdResponse[],  bulletinsError:ResError, areBulletinsLoading: boolean, mutateBulletins: KeyedMutator<IBulletinsByGroupIdResponse[]>} =>{
    const {data, error, mutate} = useSWR( `${APIRoute.BulletinsByGroupId}/${groupID}`, fetcher)
    return ({
        bulletinsData: data,
        areBulletinsLoading: !data && !error,
        bulletinsError: error,
        mutateBulletins: mutate
    })
}

export { useBulletinsGroupById };