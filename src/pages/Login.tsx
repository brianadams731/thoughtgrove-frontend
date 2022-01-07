import { HeroLogo } from "../components/HeroLogo";
import { LoginCard } from "../components/LoginCard";
import { PreHeader } from "../components/PreHeader";
import { useDimension } from "../hooks/useDimension";
import styles from "../styles/Login.module.css";

const Login = ():JSX.Element =>{
    // Used to prevent clipping when height preHeader overlaps location of card
    const [dimensions, refEle] = useDimension<HTMLDivElement>();

    return (
        <>
            <PreHeader ref={refEle} url="/register" tag="Register" />
            <div className={styles.wrapper} style={dimensions?.height?{paddingTop:`${dimensions.height}px`, paddingBottom:`${dimensions.height}px`}:{}}>
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