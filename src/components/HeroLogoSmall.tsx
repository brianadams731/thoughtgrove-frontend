import styles from '../styles/HeroLogoSmall.module.css';
import { Logo } from '../svg/Logo';

const HeroLogoSmall= ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h3>T</h3>
            <div className={styles.logoTextWrapper}><Logo fill="var(--c-logo-accent)" svgWidth='25px' /><h3>G</h3></div>
        </div>
    )
}

export { HeroLogoSmall };