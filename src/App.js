import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeList from "./EmployeeList.js";
import AddEmployeeForm from "./Form.js"
// import { Link } from "react-router-dom";

const App = () => {

  const initEmpList= [
    {id: 1,
    name: "Charlie Murphy",
    role: "Sr. Dev",
    email: "abc@123.com"    
    },
    {id: 2,
    name: "Cryin' Seacrust",
    role: "Dweeb",
    email: "ssabc@123.com"    
    }
  ]

  const [employees, setEmployees] = useState(initEmpList);

  const AddEmployee = employee => {
    employee.id = employees.length + 1;
    setEmployees([...employees, employee])
  }

  const DeleteEmployee = id => {
    setEmployees(employees.filter( employee => employee.id !== id))
  }

    return (
      <div className="container">
        <h1>Employee List</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add Employee</h2>
            <AddEmployeeForm AddEmployee={AddEmployee} />
          </div>
          <div className="flex-large">
            <h2>Current Employees</h2>
            <EmployeeList DeleteEmployee={DeleteEmployee} employees={employees} />
          </div>
        </div>
      </div>
    )
}




export default App;

