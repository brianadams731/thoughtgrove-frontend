import ReactDOM from "react-dom";
import styles from "../styles/Toaster.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useToastStore } from "../stores/toastStore";
import { useEffect } from "react";

const Toaster = ():JSX.Element =>{
    const toasts = useToastStore(state => state.toasts);
    const removeTopToast = useToastStore(state => state.removeTopToast)

    useEffect(()=>{
        if(toasts.length > 0){
            setTimeout(()=>{
                removeTopToast();
            },2500)
        }
        //eslint-disable-next-line
    },[toasts])

    const displayToast = () =>{
        if(toasts.length === 0){
            return null;
        }else{
            return (
                <motion.div key={toasts[0].description} initial={{opacity:0, y:"-100%", x:"-50%"}} animate={{opacity:1, y:"50%", x:"-50%"}} exit={{opacity:0, y:"-100%", x:"-50%"}} transition={{
                    type:"spring",
                    duration: .5
                }}className={styles.toastWrapper}>
                    <h3>{toasts[0].subject}: {toasts[0].description}</h3>
                </motion.div>
            )
        }
    }

    return ReactDOM.createPortal(
        <>
            <AnimatePresence exitBeforeEnter={true}>
                {displayToast()}
            </AnimatePresence>
        </>,

        document.querySelector("#toaster")!
    )
}

export { Toaster }