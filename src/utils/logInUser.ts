interface IRegisteredUser{
    email:string;
    password:string;
}

const logInUserAsync = async(logInUser:IRegisteredUser) => {
    const res = await fetch("",{
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email: logInUser.email,
            password: logInUser.password,
        })
    })
    const parsedRes = await res.json();
    return parsedRes;
}


export {logInUserAsync};