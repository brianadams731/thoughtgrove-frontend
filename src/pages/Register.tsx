import { HeroLogo } from "../components/HeroLogo";
import { PreHeader } from "../components/PreHeader";
import { RegisterCard } from "../components/RegisterCard";
import { useDimension } from "../hooks/useDimension";
import styles from "../styles/Register.module.css";

const Register = ():JSX.Element =>{
    // Used to prevent clipping when height preHeader overlaps location of card
    const [dimensions, refEle] = useDimension<HTMLDivElement>();

    return (
        <>
            <PreHeader url="/login" tag="Log In" ref={refEle} />
            <div className={styles.wrapper} style={dimensions?.height?{paddingTop:`${dimensions.height}px`, paddingBottom:`${dimensions.height}px`}:{}}>
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