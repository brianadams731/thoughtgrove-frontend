interface IComment{
    id:number;
    content:string;
    user:{
        id:number,
        username:string
    }
}

export type {IComment};