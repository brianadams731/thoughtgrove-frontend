import {Link} from "react-router-dom"
import styles from "../styles/RouterBtn.module.css";

interface Props{
    text:string;
    url:string;
}

const RouterBtn = ({url,text}:Props):JSX.Element =>{
    return (
        <>
            <Link to={url} className={styles.wrapper}>{text}</Link>
        </>
    )
}

export {RouterBtn}