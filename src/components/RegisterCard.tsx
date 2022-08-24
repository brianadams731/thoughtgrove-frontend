import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "../svg/Logo";
import { registerUserAsync } from "../utils/registerUser";
import { CardFormInput } from "./CardFormInput";

import styles from "../styles/RegisterCard.module.css";
import { useToastStore } from "../stores/toastStore";

const RegisterCard = ():JSX.Element =>{
    const navigate = useNavigate();
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const addToasts = useToastStore(state => state.addToasts);
    
    return (
        <div className={styles.wrapper}>
            <form className={styles.formWrapper} onSubmit={async (e)=>{
                e.preventDefault();
                if(!username || !email || !password || password !== confirmPassword){
                    if(!username ){
                        addToasts({subject:"Error", description:"Add a username"});
                    }
                    if(!email){
                        addToasts({subject:"Error", description:"Add a username"});
                    }
                    if(!password){
                        addToasts({subject:"Error", description:"Add a password"});
                    }
                    if(password !== confirmPassword){
                        addToasts({subject:"Error", description:"Passwords don't match"});
                    }
                    return;
                }
                try{
                    await registerUserAsync({username, email, password});
                    navigate("/dashboard")
                }catch(Error){
                    addToasts({subject:"Error", description:"Unable to register user"})
                    console.log("Error Cannot register user")
                }
            }}>
                <CardFormInput subject="Identity" title="User Name" inputValue={username} inputSetter={setUserName}/>
                <CardFormInput subject="Communication" title="Email" inputValue={email} inputSetter={setEmail}/>
                <CardFormInput subject="Security" title="Password" inputValue={password} inputSetter={setPassword}/>
                <CardFormInput subject="Confirmation" title="Confirm Password" inputValue={confirmPassword} inputSetter={setConfirmPassword}/>

                <button type="submit">Register</button>
            </form>
            <div className={styles.svgWrapper}>
                <Logo fill="var(--c-main-gray)" svgWidth="30px"/>
            </div>
        </div>
    )
}

export {RegisterCard};