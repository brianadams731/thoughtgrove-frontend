import { HeroLogo } from "../components/HeroLogo";
import { LoginCard } from "../components/LoginCard";
import styles from "../styles/Login.module.css";

const Login = ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <div>
                <LoginCard />                
            </div>
            <div className={styles.heroLogoWrapper}>
                <HeroLogo />
            </div>
        </div>
    )
}

export {Login};