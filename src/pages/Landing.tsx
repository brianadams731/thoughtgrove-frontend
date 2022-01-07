import { HeroLogo } from "../components/HeroLogo";
import { RouterBtn } from "../components/RouterBtn";
import styles from "../styles/Landing.module.css";

import { Link } from "react-router-dom";
import { Logo } from "../svg/Logo";
import { LandingCardSlice } from "../components/LandingCardSlice";

const Landing = ():JSX.Element =>{
    const placeHolderDesc = [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sunt in culpa qui officia deserunt mollit anim id est laborum.`,

        `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    ]

    return (
        <div className={styles.wrapper}>
            <Link className={styles.logInLink} to="/login">Log In</Link>
            <article className={styles.heroSlice}>
                <HeroLogo />
                <RouterBtn text="Sign Up" url="/register" />
            </article>
            <article className={styles.cardsSlice}>
                <LandingCardSlice subject="Profile" title="Thought Grove" right={false} body={placeHolderDesc}>
                    <Logo fill="var(--c-main-gray)" svgWidth="30px"/>
                </LandingCardSlice>

                <LandingCardSlice subject="Methodology" title="Spaced Repetition" right={true} body={placeHolderDesc}>
                    <Logo fill="var(--c-main-gray)" svgWidth="30px"/>
                </LandingCardSlice>

                <LandingCardSlice subject="Implementation" title="Frictionless Study" right={false} body={placeHolderDesc}>
                    <Logo fill="var(--c-main-gray)" svgWidth="30px"/>
                </LandingCardSlice>
            </article>
        </div>
    )
}

export {Landing}