import { motion } from "framer-motion";

interface Props{
    fill:string;
    width:string;
    hoverFill?:string;
    isUpVote?:boolean
}

const VoteChevron = ({fill, width, isUpVote}:Props):JSX.Element =>{
    return(
        <motion.svg width={width} viewBox="0 0 39 27" animate={{fill}} transition={{duration:.2}} style={isUpVote?{transform:"scaleY(-1)"}:{}} xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9796 25.5934L0.627544 6.31335C-0.209328 5.38349 -0.209328 3.87594 0.627544 2.94618L2.65138 0.697474C3.48683 -0.230801 4.84085 -0.232588 5.67826 0.693504L19.4949 15.9733L33.3114 0.693407C34.1488 -0.232685 35.5028 -0.230902 36.3383 0.697372L38.3621 2.94608C39.199 3.87595 39.199 5.38348 38.3621 6.31325L21.01 25.5933C20.1733 26.5232 18.8165 26.5232 17.9796 25.5934Z" />
        </motion.svg>
    )
}

export { VoteChevron };