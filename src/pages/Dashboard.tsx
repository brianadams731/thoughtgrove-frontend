import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { MenuBar } from "../components/MenuBar";
import styles from "../styles/Dashboard.module.css";

import { Home } from "./Home";
import { Deck } from "./Deck";
import { EditDeck } from "./EditDeck";

const Dashboard = ():JSX.Element =>{
    // Consider pushing into global state
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="deck/edit/*" element={<EditDeck />} />
                <Route path="deck/:deckId" element={<Deck />} />
            </Routes>
        </div>
    )
}

export { Dashboard };