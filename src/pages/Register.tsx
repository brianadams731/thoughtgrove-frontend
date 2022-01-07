import { HeroLogo } from "../components/HeroLogo";
import { PreHeader } from "../components/PreHeader";
import { RegisterCard } from "../components/RegisterCard";
import styles from "../styles/Register.module.css";

const Register = ():JSX.Element =>{
    return (
        <>
            <PreHeader url="/login" tag="Log In" />
            <div className={styles.wrapper}>
                <div className={styles.heroLogoWrapper}>
                    <HeroLogo />
                </div>
                <div className={styles.registerCardWrapper}>
                    <RegisterCard />
                </div>
            </div>
        </>
    )
}

export {Register};