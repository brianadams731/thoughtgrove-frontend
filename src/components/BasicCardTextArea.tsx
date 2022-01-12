import { Dispatch, SetStateAction } from "react";
import styles from "../styles/BasicCardTextArea.module.css";

interface Props{
    value:string;
    title?:string;
    updateValue: Dispatch<SetStateAction<string>>;
}

const BasicCardTextArea = ({value, updateValue, title}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            {title&&<h5 className={styles.title}>{title}</h5>}
            <textarea className={styles.input} value={value} onChange={(e)=>{
                updateValue(e.target.value)
            }} />
        </div>
    )
}

export { BasicCardTextArea };