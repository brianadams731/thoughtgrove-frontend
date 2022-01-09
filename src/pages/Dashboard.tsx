import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { MenuBar } from "../components/MenuBar";
import styles from "../styles/Dashboard.module.css";
import { Home } from "./Home";

const Dashboard = ():JSX.Element =>{
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="deck/*" element={ } />*/}
            </Routes>
        </div>
    )
}

export { Dashboard };