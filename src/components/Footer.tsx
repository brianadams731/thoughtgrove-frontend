import styles from "../styles/Footer.module.css";

const Footer = ():JSX.Element =>{
    return (
        <footer className={styles.wrapper}>
            <p>Copyright {new Date().getFullYear()}</p>
        </footer>
    )
}

export {Footer};