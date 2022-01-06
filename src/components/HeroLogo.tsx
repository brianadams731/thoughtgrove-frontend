import { Logo } from "../svg/Logo";
import styles from "../styles/HeroLogo.module.css";

const HeroLogo = ():JSX.Element =>{
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.thought}>
                Thought
            </h1>
            <div className={styles.textLogoWrapper}>
                <div className={styles.logoWrapper}>
                    <Logo fill="var(--c-logo-accent)" svgWidth="70px" />
                </div>
                <h1 className={styles.grove}>
                    Grove
                </h1>
            </div>
            <p className={styles.tagline}>
                An Idea Platform
            </p>
        </section>
    )
}

export {HeroLogo};