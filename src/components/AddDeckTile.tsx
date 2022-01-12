import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AddDeckTile.module.css";
import { AddDeckBorder } from "../svg/AddDeckBorder";
import { PlusSign } from "../svg/PlusSign";

const AddDeckTile = () =>{
    const navigate = useNavigate();
    
    return(
        <motion.div className={styles.wrapper} onClick={()=>navigate("/dashboard/deck/edit")} style={{fill:"var(--c-main-gray)", stroke:"var(--c-main-gray)"}} animate={{fill:"var(--c-main-gray)", stroke:"var(--c-main-gray)"}} 
        whileHover={{fill:"var(--c-logo-accent)", stroke:"var(--c-logo-accent)"}}>
            <div className={styles.borderWrapper}>
                <AddDeckBorder height={200} width={300} />
            </div>
            <div className={styles.addWrapper} >
                <PlusSign width="75px" />
            </div>
        </motion.div>
    )
}

export {AddDeckTile};