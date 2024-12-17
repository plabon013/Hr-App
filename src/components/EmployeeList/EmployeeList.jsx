import { useState } from "react";
import "./EmployeeList.css";
import employees from "../../data/employees";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const EmployeeList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleLogin}>{isLoggedIn ? "Log Out" : "Log In"}</button>
      {!isLoggedIn ? (
        <p>Please log in to see the employee list.</p>
      ) : (
        <div className="employee-list">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} {...employee} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
