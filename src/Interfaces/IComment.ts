interface IComment{
    id:number;
    content:string;
    userOwnsComment:boolean;
    user:{
        id:number,
        username:string
    }
}

export type {IComment};