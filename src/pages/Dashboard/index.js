import { useState, useEffect } from "react";
import PeopleList from "./components/PeopleList";

const Dashboard = ({ hiredPeople }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((peopleData) => setPeople(peopleData.results));
  }, []);

  console.log(people);
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
};

export default Dashboard;
