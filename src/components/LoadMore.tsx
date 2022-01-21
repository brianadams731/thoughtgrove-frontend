import { VoteChevron } from "../svg/VoteChevron";

import styles from "../styles/LoadMore.module.css";
import { motion } from "framer-motion";

interface Props{
    callBackOnClick: ()=>void;
}
const LoadMore = ({callBackOnClick}:Props) =>{
    return(
        <motion.div className={styles.wrapper} >
            <p className={styles.loadMoreText}>Load More</p>
            <div className={styles.chevronWrapper} onClick={()=>{callBackOnClick()}}>
                <VoteChevron fill="var(--c-main-gray)" hoverFill="var(--c-achievement-blue)" width="40px" />
            </div>
        </motion.div>
    )
}

export { LoadMore };