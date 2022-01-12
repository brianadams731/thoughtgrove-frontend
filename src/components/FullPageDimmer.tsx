import { motion } from "framer-motion";

interface Props{
    callBackOnClick: ()=>void;
}

const FullPageDimmer = ({callBackOnClick}:Props) =>{
    const variants = {
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                duration: .6,
            }
        },
        exit:{
            opacity:0,
            transition:{
                duration: .4,
            }
        }
    }

    return (
        <motion.div style={{
            position:"fixed",
            top:0,
            left:0,
            width:"100vw",
            height:"100vh",
            backgroundColor:"var(--c-dark-gray-opaque)"
        }} variants={variants} initial="initial" animate="animate" exit="exit" onClick={(e)=>{
            e.stopPropagation();
            callBackOnClick();
        }}></motion.div>
    )
}

export { FullPageDimmer };