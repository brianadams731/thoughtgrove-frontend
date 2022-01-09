import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../styles/Header.module.css";
import { HeroLogoSmall } from "./HeroLogoSmall";

const Header = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const upperLine = {
        init:{
            top:"0%",
            rotate:0,
            translateY:"-50%",
            transition:{
                top:{
                    delay:.4,
                },
            }
        },

        animate:{
            top:"50%",
            rotate:45,
            translateY:"-50%",
            transition:{
                rotate:{
                    delay:.4,
                },
            }
        },
    }

    const lowerLine = {
        init:{
            bottom:"0%",
            rotate:0,
            translateY:"50%",
            transition:{
                bottom:{
                    delay:.4,
                },
            }
        },

        animate:{
            bottom:"50%",
            rotate:-45,
            translateY:"50%",
            transition:{
                rotate:{
                    delay:.4,
                },
            }
        },

    }

    const middleLine = {
        init:{
            opacity:1,
            transition:{
                delay:.2,
            }
        },
        animate:{
            opacity:0,
            transition:{
                duration:.1,
                delay:.2,
            }
        }
    }

    return (
        <header className={styles.wrapper}>
            <HeroLogoSmall />
            <div className={styles.menuIcon} onClick={()=>{setMenuOpen(prev => !prev);}}>
                <motion.div initial="init" animate={menuOpen?"animate":"init"} variants={upperLine} className={styles.lineTop}></motion.div>
                <motion.div initial="init" animate={menuOpen?"animate":"init"} variants={middleLine} className={styles.lineMiddle}></motion.div>
                <motion.div initial="init" animate={menuOpen?"animate":"init"} variants={lowerLine} className={styles.lineBottom}></motion.div>
            </div>
        </header>
    )
}

export { Header };