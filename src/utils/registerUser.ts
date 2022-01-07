interface IRegisteredUser{
    username:string;
    email:string;
    password:string;
}

const registerUserAsync = async(registerUser:IRegisteredUser) =>{
    const res = await fetch("",{
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            username:registerUser.username,
            email:registerUser.email,
            password:registerUser.password,
        })
    })
    if(res.status !== 200){
        
    }
    const parsedRes = await res.json();
    return parsedRes;
}

export {registerUserAsync};