import { BrowserRouter } from "react-router-dom";
import { Landing } from "./Landing";
import styles from "../styles/App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
