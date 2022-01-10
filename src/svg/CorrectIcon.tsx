import { motion } from "framer-motion";

interface Props{
    height:string;
    fill:string;
    hoverFill:string;
}

const CorrectIcon = ({height, fill, hoverFill}:Props):JSX.Element =>{
    return(
        <svg height={height} style={{fill}} viewBox="0 0 75 57" xmlns="http://www.w3.org/2000/svg">
            <motion.path animate={{fill}} whileHover={{fill:hoverFill}} transition={{duration:.2}} d="M25.4733 55.3658L1.0983 30.9908C-0.366101 29.5264 -0.366101 27.1521 1.0983 25.6875L6.40148 20.3842C7.86588 18.9196 10.2404 18.9196 11.7048 20.3842L28.125 36.8042L63.2951 1.63419C64.7595 0.169788 67.1341 0.169788 68.5985 1.63419L73.9016 6.93751C75.366 8.40191 75.366 10.7763 73.9016 12.2408L30.7766 55.366C29.3121 56.8304 26.9377 56.8304 25.4733 55.3658V55.3658Z" />
        </svg>
    )
}

export { CorrectIcon };