import { HeroLogo } from "../components/HeroLogo";
import { RouterBtn } from "../components/RouterBtn";
import styles from "../styles/Landing.module.css";

import { Link } from "react-router-dom";

const Landing = ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <Link className={styles.logInLink} to="/login">Log In</Link>
            <article className={styles.heroSlice}>
                <HeroLogo />
                <RouterBtn text="Sign Up" url="/" />
            </article>
        </div>
    )
}

export {Landing}