import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";

const EmployeeList = () => {
  const employees = [
    {
      name: "John Doe",
      role: "Developer",
      department: "IT",
      startDate: "01-10-2022",
      location: "Helsinki",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      department: "Marketing",
      startDate: "01-05-2022",
      location: "Oslo",
    },
  ];

  return (
    <div className="employee-list">
      {employees.map((employee, index) => (
        <EmployeeCard key={index} {...employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
