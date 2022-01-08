import { useState } from "react";

import { CardFormInput } from "./CardFormInput";
import { Logo } from "../svg/Logo";

import styles from "../styles/LoginCard.module.css"
import { logInUserAsync } from "../utils/logInUser";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "../stores/toastStore";

const LoginCard = ():JSX.Element =>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addToasts = useToastStore(state => state.addToasts);


    return (
        <div className={styles.wrapper}>
            <form className={styles.formWrapper} onSubmit={async(e)=>{
                e.preventDefault();
                try{
                    await logInUserAsync({email,password}); 
                    navigate("/dashboard");
                }catch(Error){
                    addToasts({subject:"Error", description:"Invalid Login Credentials"})
                }
                
                
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