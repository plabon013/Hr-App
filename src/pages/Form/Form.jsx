import { useState } from "react";
import Button from "../../components/Button/Button";
import "./Form.css";

const Form = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    role: "",
    department: "",
    startDate: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeData);
    alert("Added Successfully!");
    setEmployeeData({
      name: "",
      role: "",
      department: "",
      startDate: "",
      location: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="employeeForm">
      <h2>Add New Employee</h2>
      <label>
        Name:{" "}
        <input
          name="name"
          value={employeeData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Role:{" "}
        <input
          name="role"
          value={employeeData.role}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Department:{" "}
        <input
          name="department"
          value={employeeData.department}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Start Date:{" "}
        <input
          type="date"
          name="startDate"
          value={employeeData.startDate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Location:{" "}
        <input
          name="location"
          value={employeeData.location}
          onChange={handleInputChange}
        />
      </label>
      <Button text="Add New" type="submit" />
    </form>
  );
};

export default Form;
