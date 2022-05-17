import { Link } from "react-router-dom";

const PeopleListItem = ({ person }) => {
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/dashboard/profile/${person.login.uuid}`} state={{ person }}>
        Profile
      </Link>

      {/* {person.wage && <p>Wage: £{person.wage}</p>} */}
    </li>
  );
};

export default PeopleListItem;
