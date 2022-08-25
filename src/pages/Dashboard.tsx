import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { MenuBar } from "../components/MenuBar";
import styles from "../styles/Dashboard.module.css";

import { Home } from "./Home";
import { Deck } from "./Deck";
import { EditDeck } from "./EditDeck";
import { Group } from "./Group";
import { Profile } from "./Profile";
import { Discussion } from "./Discussion";
import { CreateGroup } from "./CreateGroup";
import { SearchDeck } from "./SearchDeck";
import { StartPracticing } from "./StartPracticing";
import { FindGroups } from "./FindGroups";

const Dashboard = ():JSX.Element =>{
    // Consider pushing into global state
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="deck/search" element={<SearchDeck />} />
                <Route path="deck/edit/:deckId" element={<EditDeck />} />
                <Route path="deck/start-practicing" element={<StartPracticing />} />
                <Route path="deck/:deckId" element={<Deck />} />
                <Route path="group/find" element={<FindGroups />} />
                <Route path="group/:groupId" element={<Group />} />
                <Route path="create-group" element={<CreateGroup />} />
                <Route path="discussion/:discussionId" element={<Discussion />} />
                <Route path="profile/:profileId" element={<Profile />} />
            </Routes>
        </div>
    )
}

export { Dashboard };