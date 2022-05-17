import { useState } from "react";

function HireForm({ person, addHiringPerson, location }) {
  const [wage, setWage] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    addHiringPerson({ ...person, wage: wage });
    location.pathname = "/dashboard";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
