import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import styles from "../styles/Dashboard.module.css";
import { Home } from "./Home";

const Dashboard = ():JSX.Element =>{
    
    return (
        <div className={styles.wrapper}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="deck/*" element={ } />*/}
            </Routes>
        </div>
    )
}

export { Dashboard };