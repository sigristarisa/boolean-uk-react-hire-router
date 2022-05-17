import { useState } from "react";
import { useNavigate } from "react-router";

function HireForm({ person, addHiringPerson }) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    addHiringPerson({ ...person, wage: wage });
    navigate("/dashboard");
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
