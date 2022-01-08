import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Register } from "./Register";
import { Login } from "./Login";
import styles from "../styles/App.module.css";
import { Dashboard } from "./Dashboard";
import { Toaster } from "../components/Toaster";

function App() {
  return (
    <div className={styles.wrapper}>
      <Toaster />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
