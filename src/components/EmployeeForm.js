import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    position: ''
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    </div>
  );
}

export default EmployeeForm;