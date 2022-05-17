import { useState } from "react";
import Dashboard from "./pages/Dashboard/index";
import "./styles.css";

const App = () => {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Dashboard hiredPeople={hiredPeople} />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default App;
