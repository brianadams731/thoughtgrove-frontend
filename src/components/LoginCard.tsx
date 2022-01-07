import { useState } from "react";

import { CardFormInput } from "./CardFormInput";
import { Logo } from "../svg/Logo";

import styles from "../styles/LoginCard.module.css"

const LoginCard = ():JSX.Element =>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.wrapper}>
            <form className={styles.formWrapper} onSubmit={(e)=>{
                e.preventDefault();
            }}>

                <CardFormInput  subject="Communication" title="Email" inputValue={email} inputSetter={setEmail} />
                <CardFormInput  subject="Security" title="Password" inputValue={password} inputSetter={setPassword} />

                <button>Log In</button>
            </form>
            <div className={styles.svgWrapper}>
                <Logo fill="var(--c-main-gray)" svgWidth="30px"/>
            </div>
        </div>
    )
}

export { LoginCard };