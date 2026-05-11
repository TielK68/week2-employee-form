import React, { useState, useEffect } from 'react';
import './EmployeeForm.css';

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    position: ''
  });

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees'));

    if (savedEmployees) {
      setEmployees(savedEmployees);
    }
  }, []);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEmployees = [...employees, employee];

    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    setEmployee({
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      position: ''
    });

    alert('Employee Submitted Successfully');
  };

  return (
    <div className="form-container">
      <h2>New Employee Form</h2>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
        />

        <label>Department</label>
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
        />

        <label>Position</label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleChange}
        />

        <button type="submit">Submit Employee</button>
      </form>

      <h3>Employee Data</h3>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.firstName} {emp.lastName} - {emp.email} - {emp.department} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeForm;