import { useState } from "react";
import Dashboard from "./pages/Dashboard/";
// import PeopleListItem from "./pages/Dashboard/components/PeopleListItem";
import PersonProfile from "./pages/PersonProfile";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";

const App = () => {
  const [hiredPeople, setHiredPeople] = useState([]);

  const addHiringPerson = (person) => setHiredPeople([...hiredPeople, person]);
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/dashboard">Dashboard</Link>
            <Routes>
              <Route
                path="/dashboard"
                element={<Dashboard hiredPeople={hiredPeople} />}
              />
              <Route
                path="/dashboard/profile/:id"
                element={<PersonProfile addHiringPerson={addHiringPerson} />}
              />
            </Routes>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default App;
