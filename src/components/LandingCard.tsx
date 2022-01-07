import styles from "../styles/LandingCard.module.css";

interface Props{
    subject:string;
    title:string;
    body:string[];
    children:JSX.Element;
}

const LandingCard = ({subject,title,body, children}:Props):JSX.Element =>{
    return (
        <article className={styles.wrapper}>
            <h5 className={styles.subject}>{subject}</h5>
            <h2 className={styles.title}>{title}</h2>
            <section className={styles.body}>
                {body.map((item,index) => <p key={index}>{item}</p>)}
            </section>
            <div className={styles.icon}>
                {children}
            </div>
        </article>
    )
}

export {LandingCard};