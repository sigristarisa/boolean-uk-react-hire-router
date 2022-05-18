import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard/";
import PersonProfile from "./pages/PersonProfile";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

const App = () => {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  const removeHiringPerson = (hiredPerson) => {
    const newPeopleList = people.filter(
      (person) => person.login.uuid !== hiredPerson.login.uuid
    );
    setPeople(newPeopleList);
  };

  const addHiringPerson = (hiredPerson) => {
    setHiredPeople([...hiredPeople, hiredPerson]);
    removeHiringPerson(hiredPerson);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((peopleData) => setPeople(peopleData.results));
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <Dashboard hiredPeople={hiredPeople} people={people} />
                }
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
