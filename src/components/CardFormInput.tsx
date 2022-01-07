import { Dispatch, SetStateAction } from "react";
import styles from "../styles/CardFormInput.module.css";

interface Props{
    subject: string;
    title: string;

    inputValue: string;
    inputSetter: Dispatch<SetStateAction<string>>;
}

const CardFormInput = ({subject, title, inputValue, inputSetter}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h5 className={styles.subject}>{subject}</h5>
            <h2 className={styles.title}>{title}</h2>
            <input className={styles.inputArea} type="text" value={inputValue} onChange={(e)=>{
                inputSetter(e.target.value);
            }}/>
        </div>
    )
}

export {CardFormInput};