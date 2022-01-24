import { useEffect } from "react"


const Profile = ():JSX.Element =>{
    useEffect(()=>{
        console.log("here")
    },[])

    return (
        <div>
            User Profile
        </div>
    )
}

export { Profile };