import { BrowserRouter } from "react-router-dom";
import { Landing } from "./Landing";
import { Footer } from "../components/Footer";
import styles from "../styles/App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Landing />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
