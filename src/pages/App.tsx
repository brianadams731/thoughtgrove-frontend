import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Register } from "./Register";
import { Login } from "./Login";
import { Footer } from "../components/Footer";
import styles from "../styles/App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
