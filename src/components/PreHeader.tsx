import { Link } from "react-router-dom";
import styles from "../styles/PreHeader.module.css";
import { HeroLogoSmall } from "./HeroLogoSmall";

interface Props{
    url:string;
    tag: string;
}

const PreHeader = ({url,tag}:Props):JSX.Element =>{
    return (
        <nav className={styles.wrapper}>
            <div className={styles.smallLogoWrapper}>
                <HeroLogoSmall />
            </div>
            <Link to={url}>{tag}</Link>
        </nav>
    )
}

export {PreHeader};