import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import EmployeeCard from "./EmployeeCard";


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

const EmployeeList  = props => {
    const [employees, setEmployees] = useState(null);


    //get employee list and update with setEmployees
}


function EmployeeDetails({ employee }) {
    return (
        <div>
          <EmployeeCard employee={employee} />
        </div>
    );
  }
  
  const UserTable = () => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name data</td>
          <td>Username data</td>
          <td>
            <button className="button muted-button">Edit</button>
            <button className="button muted-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  )

export default EmployeeList;





