import { LandingCard } from "./LandingCard";
import styles from "../styles/LandingCardSlice.module.css";

interface Props{
    subject:string;
    title:string;
    body:string[];
    right?:boolean;
    children:JSX.Element;
}

const LandingCardSlice = ({subject, title, body ,right , children}:Props):JSX.Element =>{
    return (
        <article className={styles.wrapper} style={right?{}:{flexDirection:"row-reverse"}}>
            <div className={styles.accentLineWrapper}>
                <div className={styles.accentLine}></div>
            </div>
            <div className={styles.LandingCardWrapper} style={right?{}:{justifyContent:"flex-end"}} >
                <LandingCard subject={subject} title={title} body={body}>
                    {children}
                </LandingCard>
            </div>
        </article>
    )
}

export {LandingCardSlice};