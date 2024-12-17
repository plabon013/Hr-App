import "./EmployeeList.css";
import employees from "../../data/employees";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const EmployeeList = () => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} {...employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
