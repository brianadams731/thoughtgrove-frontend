import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "../styles/GroupTile.module.css";
import { Person } from "../svg/Person";
interface IGroupTile{
    name: string;
    description: string;
    userCount: number;
    id: string|number;
}

interface Props extends IGroupTile{}

const GroupTile = ({name, description, id, userCount}:Props):JSX.Element =>{
    const navigate = useNavigate();
    return (
        <motion.div key={id} className={styles.wrapper} whileHover={{scale:1.07}} onClick={()=>{
            navigate(`/dashboard/group/${id}`)
        }}>
            <section className={styles.text}>
                <h5 className={styles.name}>{name.substring(0,23)}</h5>
                <p className={styles.description}>{description.substring(0,120)}</p>
            </section>
            <section className={styles.count}>
                <Person fill="var(--c-main-gray)" hoverFill="var(--c-logo-accent)" />
                <p className={styles.userCount}>{userCount}</p>
            </section>
        </motion.div>
    )
}

export type {IGroupTile};
export {GroupTile};