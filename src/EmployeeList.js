import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import EmployeeCard from "./EmployeeCard";


const EmployeeList = props =>  (  
    <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Role</th>
            {/* <th>Email</th> */}
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.employees.length > 0 ? (
                props.employees.map(employee => (
                <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    {/* <td>{employee.email}</td> */}
                    <td>
                    <button onClick={ () => props.EditEmp(employee)}  className="button muted-button">
                        Edit
                    </button>
                    <button onClick={() => props.DeleteEmployee(employee.id)} className="button muted-button">
                        Delete
                    </button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No employees</td>
                </tr>
        )}
        </tbody>
    </table>
)


export default EmployeeList;

//For pulling in employee data from EmployeeCard.js
// function EmployeeDetails({ employee }) {
//     return (
//         <div>
//           <EmployeeCard employee={employee} />
//         </div>
//     );
//   }



