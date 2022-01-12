import { Dispatch, SetStateAction } from "react";
import styles from "../styles/BasicCardInput.module.css";

interface Props{
    value:string;
    title?:string;
    updateValue: Dispatch<SetStateAction<string>>;
}

const BasicCardInput = ({value, updateValue, title}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            {title&&<h5 className={styles.title}>{title}</h5>}
            <input className={styles.input} type="text" value={value} onChange={(e)=>{
                updateValue(e.target.value)
            }} />
        </div>
    )
}

export { BasicCardInput };