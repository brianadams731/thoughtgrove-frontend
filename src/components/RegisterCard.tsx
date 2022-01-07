import { useState } from "react";
import styles from "../styles/RegisterCard.module.css";
import { Logo } from "../svg/Logo";
import { CardFormInput } from "./CardFormInput";

const RegisterCard = ():JSX.Element =>{
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    return (
        <div className={styles.wrapper}>
            <form className={styles.formWrapper} onSubmit={(e)=>{
                e.preventDefault();
                // TODO ADD POST REQUEST TO BACKEND HERE
            }}>
                <CardFormInput subject="Identity" title="User Name" inputValue={userName} inputSetter={setUserName}/>
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