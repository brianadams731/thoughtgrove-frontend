import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "../svg/Logo";
import { registerUserAsync } from "../utils/registerUser";
import { CardFormInput } from "./CardFormInput";

import styles from "../styles/RegisterCard.module.css";

const RegisterCard = ():JSX.Element =>{
    const navigate = useNavigate();
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    return (
        <div className={styles.wrapper}>
            <form className={styles.formWrapper} onSubmit={async (e)=>{
                e.preventDefault();
                try{
                    await registerUserAsync({username, email, password});
                    navigate("/dashboard")
                }catch(Error){
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