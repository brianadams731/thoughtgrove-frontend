import { HeroLogo } from "../components/HeroLogo";
import { LoginCard } from "../components/LoginCard";
import { PreHeader } from "../components/PreHeader";
import styles from "../styles/Login.module.css";

const Login = ():JSX.Element =>{
    // write get bottom y value hook then add it to the padding for log in card!!! 
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