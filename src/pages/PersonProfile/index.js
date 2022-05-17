import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HireForm from "./components/HireForm";

function PersonProfile({ addHiringPerson }) {
  const [person, setPerson] = useState(null);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    const personData = location.state.person;
    setPerson(personData);
  }, []);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} addHiringPerson={addHiringPerson} />
    </article>
  );
}

export default PersonProfile;
