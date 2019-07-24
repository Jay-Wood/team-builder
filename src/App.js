import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeList from "./EmployeeList";
// import { Link } from "react-router-dom";

function App() {
    return (
      <div className="container">
        <h1>Employee List</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
          </div>
          <div className="flex-large">
            <h2>View users</h2>
          </div>
        </div>
      </div>
    )
}

export default App;

