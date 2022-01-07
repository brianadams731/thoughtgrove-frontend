import { HeroLogo } from "../components/HeroLogo";
import { LoginCard } from "../components/LoginCard";
import { PreHeader } from "../components/PreHeader";
import styles from "../styles/Login.module.css";

const Login = ():JSX.Element =>{
    return (
        <>
            <PreHeader url="/register" tag="Register" />
            <div className={styles.wrapper}>
                <div>
                    <LoginCard />                
                </div>
                <div className={styles.heroLogoWrapper}>
                    <HeroLogo />
                </div>
            </div>
        </>
    )
}

export {Login};