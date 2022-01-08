import {APIRoute} from "../utils/APIRoute";

interface IRegisteredUser{
    username:string;
    email:string;
    password:string;
}

const registerUserAsync = async(registerUser:IRegisteredUser) =>{
    const res = await fetch(APIRoute.Register,{
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            username: registerUser.username,
            email: registerUser.email,
            password: registerUser.password,
        })
    })
    if(res.ok){
        const parsedRes = await res;
        return parsedRes;
    }
    return Promise.reject(res);
}

export {registerUserAsync};