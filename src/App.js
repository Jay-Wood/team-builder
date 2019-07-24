import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeList from "./EmployeeList";
// import { Link } from "react-router-dom";

const App = () => {

  const initEmpList= [
    {name: "Employee 1",
    title: "Dr.",
    email: "abc@123.com"    
    },
    {name: "Employee 2",
    title: "Sr.",
    email: "ssabc@123.com"    
    }
  ]

  const [employees, setEmployees] = useState(initEmpList);

    return (
      <div className="container">
        <h1>Employee List</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <EmployeeList employees={employees} />
          </div>
        </div>
      </div>
    )
}

export default App;

