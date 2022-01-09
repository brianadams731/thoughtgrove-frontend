import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react"
import { CardCompleteIcon } from "../svg/CardCompleteIcon";
import { Flame } from "../svg/Flame";
import { Trophy } from "../svg/Trophy";

import styles from "../styles/MenuBar.module.css";

enum CurrentSubSelection{
    Profile,
    Decks,
    Groups
}

interface Props{
    menuOpen:boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

interface SubMenu{
    title:string;
    url:string;
}

const MenuBar = ({menuOpen, setMenuOpen}:Props):JSX.Element =>{

    const [showChildMenu, setShowChildMenu] = useState<boolean>(false);
    const currentSelection = useRef<CurrentSubSelection>();
    const [parentLeft, setParentLeft] = useState(0);
    const refEle = useRef<HTMLDivElement>(); 



    useEffect(()=>{
        if(!menuOpen){
            setShowChildMenu(false);
        }
    },[menuOpen])

    useEffect(()=>{
        if(!refEle.current){
            return;
        }
        const observer = new ResizeObserver( _ =>{    
            if(refEle.current){
                setParentLeft(refEle.current.getBoundingClientRect().width)
            }
        })
        observer.observe(refEle.current);
        return ()=>{
            observer.disconnect();
        }
        
    },[menuOpen])

    const profileSubMenu:SubMenu[] = [
        {title:"Profile", url:"/"},
        {title:"Test", url:"/"},
        {title:"Test", url:"/"},
    ]

    const decksSubMenu:SubMenu[] = [
        {title:"Deck", url:"/"},
        {title:"Test", url:"/"},
        {title:"Test", url:"/"},
    ]

    const groupsSubMenu:SubMenu[] = [
        {title:"Group", url:"/"},
        {title:"Test", url:"/"},
        {title:"Test", url:"/"},
    ]

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
        },
        end:{
            opacity:0,
            transition:{
                duration: .3,
                delay: showChildMenu?.35:0,
            }
        }
    }

    const menuBar = {
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
        end:{
            x:"100%",
            transition:{
                type:"tween",
                duration: .3,
                delay: showChildMenu?.35:0,
            }
        }
    }

    const childBar = {
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
        end:{
            x:"100%",
            opacity:0,
            transition:{
                type:"tween",
                x:{
                    duration: .3
                },
                opacity:{
                    delay:.3,
                    duration:.01,
                }
            }
        }
    }

    const getSelection =():SubMenu[]|undefined=>{
        switch(currentSelection.current){
            case CurrentSubSelection.Decks:
                return decksSubMenu;
            case CurrentSubSelection.Groups:
                return groupsSubMenu;
            case CurrentSubSelection.Profile:
                return profileSubMenu;
        }
    }

    return (
        <AnimatePresence>
            {menuOpen&&
            <motion.div className={styles.dashboardOverlay} key="overlay" variants={dashOverlay} initial="initial" animate="animated" exit="end" onClick={()=>setMenuOpen(false)}></motion.div>}

            {showChildMenu&&
            <motion.div key="menuBarChild" className={styles.menuBarChild} style={{right:`${parentLeft}px`}} variants={childBar} initial="initial" animate="animated" exit="end">
                <div className={styles.achievementBox}></div>
                    {getSelection()?.map((item, index) =>{
                        return (
                            <div className={styles.itemBox} key={index}>
                                <h3>{item.title}</h3>
                            </div>
                        )
                    })}
            </motion.div>}

            {menuOpen&&
            <motion.div className={styles.menuBarParent} key="menuBarParent" variants={menuBar} initial="initial" animate="animated" exit="end" ref={refEle as RefObject<HTMLDivElement>}>
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

                <div className={styles.itemBox} onClick={()=>{
                    setShowChildMenu(prev=>!prev);
                    currentSelection.current = CurrentSubSelection.Profile;
                }}>
                    <h3>Profile</h3>
                </div>
                <div className={styles.itemBox} onClick={()=>{
                    setShowChildMenu(prev=>!prev);
                    currentSelection.current = CurrentSubSelection.Decks;
                }}>
                    <h3>Decks</h3>
                </div>
                <div className={styles.itemBox} onClick={()=>{
                    setShowChildMenu(prev=>!prev)
                    currentSelection.current = CurrentSubSelection.Groups;
                }}>
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