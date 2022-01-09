import { Route, Routes } from "react-router-dom";
import styles from "../styles/Dashboard.module.css";
import { Home } from "./Home";

const Dashboard = ():JSX.Element =>{
    
    return (
        <div className={styles.wrapper}>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="deck/*" element={ } />*/}
            </Routes>
        </div>
    )
}

export { Dashboard };