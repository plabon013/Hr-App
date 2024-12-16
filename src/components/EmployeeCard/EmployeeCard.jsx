import { useState } from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({
  name,
  role: initialRole,
  department,
  startDate,
  location,
}) => {
  const [role, setRole] = useState(initialRole);

  const promote = () => {
    setRole(role === "Team Leader" ? initialRole : "Team Leader");
  };

  return (
    <div className="employee-card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Department: {department}</p>
      <p>Start Date: {startDate}</p>
      <p>Location: {location}</p>
      <button onClick={promote}>Promote</button>
    </div>
  );
};

export default EmployeeCard;
