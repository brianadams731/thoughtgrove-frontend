import {APIRoute} from "../utils/APIRoute";

interface IRegisteredUser{
    email:string;
    password:string;
}

const logInUserAsync = async(logInUser:IRegisteredUser) => {
    const res = await fetch(APIRoute.LogIn,{
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email: logInUser.email,
            password: logInUser.password,
        })
    })
    if(res.ok){
        const parsedRes = await res;
        return parsedRes;
    }
    return Promise.reject(res);
}


export {logInUserAsync};