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

  const promoteToTeamLead = () => {
    setRole(role === "Team Lead" ? initialRole : "Team Lead");
  };

  const yearsWorked = () => {
    const start = new Date(startDate);
    const today = new Date();
    const diff = today - start;
    return diff / (1000 * 60 * 60 * 24 * 365); // Years
  };

  const roundedYearsWorked = Math.floor(yearsWorked());

  const isProbation = yearsWorked() < 0.5;
  const isAnniversary = roundedYearsWorked > 0 && roundedYearsWorked % 5 === 0;

  return (
    <div className="employee-card">
      <h3>
        {name} {role === "Team Lead" && <span>⭐</span>}
      </h3>
      <p>Role: {role}</p>
      <p>Department: {department}</p>
      <p>Start Date: {startDate}</p>
      <p>Location: {location}</p>
      <p>Years Worked: {roundedYearsWorked}</p>
      {isProbation && <p className="reminder">📋 Schedule probation review</p>}
      {isAnniversary && (
        <p className="reminder">🎉 Schedule recognition meeting</p>
      )}
      <button onClick={promoteToTeamLead}>
        {role === "Team Lead"
          ? "Demote from Team Lead"
          : "Promote to Team Lead"}
      </button>
    </div>
  );
};

export default EmployeeCard;
