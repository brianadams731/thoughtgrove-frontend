import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react"
import styles from "../styles/MenuBar.module.css";
import { CardCompleteIcon } from "../svg/CardCompleteIcon";
import { Flame } from "../svg/Flame";
import { Trophy } from "../svg/Trophy";

interface Props{
    menuOpen:boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuBar = ({menuOpen, setMenuOpen}:Props):JSX.Element =>{

    const [showChildMenu, setShowChildMenu] = useState(false);

    const dashOverlay = {
        initial:{
            opacity:0,
            transition:{
                duration: .3,
            }
        },
        animated:{
            opacity:1,
            transition:{
                duration: .3,
            }
        }
    }

    const menuBarParent = {
        initial:{
            x:"100%",
            transition:{
                type:"tween",
                duration: .3,
            }
        },
        animated:{
            x:"0%",
            transition:{
                type:"tween",
                duration: .3,
            }
        },
    }

    return (
        <AnimatePresence>
            {menuOpen&&
            <motion.div className={styles.dashboardOverlay} key="overlay" variants={dashOverlay} initial="initial" animate="animated" exit="initial" onClick={()=>setMenuOpen(false)}></motion.div>}

            {menuOpen&&
            <motion.div className={styles.menuBarParent} key="menuBarParent" variants={menuBarParent} initial="initial" animate="animated" exit="initial">
                <div className={styles.achievementBox}>
                    <div>
                        <Flame fill={"var(--c-achievement-orange)"} />
                        <h5>
                            20
                        </h5>
                    </div>
                    <div className={styles.trophyWrapper}>
                        <Trophy fill={"var(--c-achievement-green)"} />
                        <h5>
                            15
                        </h5>
                    </div>
                    <div>
                        <CardCompleteIcon fill={"var(--c-achievement-blue)"} />
                        <h5>
                            10
                        </h5>
                    </div>
                </div>
                <div className={styles.itemBox}>
                    <h3>Profile</h3>
                </div>
                <div className={styles.itemBox}>
                    <h3>Decks</h3>
                </div>
                <div className={styles.itemBox}>
                    <h3>Groups</h3>
                </div>
                <div className={styles.logoutBox}>
                    <h4>Log Out</h4>
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}

export { MenuBar }