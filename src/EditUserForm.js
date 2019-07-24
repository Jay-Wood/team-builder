import React, { useState, useEffect } from 'react';

const EditUserForm = props => {

    const [employee, setEmployee] = useState(props.currentEmployee)

    const handleInputChange = event => {
        const {name, value} = event.target        
        setEmployee({ ...employee, [name]: value })    
    }

    return (
        <form
            onSubmit={ event => {
                event.preventDefault()
                return props.UpdateEmployee(employee.id, employee)
                
            }}
        >
          <label>Name</label>
          <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
          <label>Role</label>
          <input type="text" name="role" value={employee.role} onChange={handleInputChange} />
          <button>Update employee</button>
          <button onClick={() => props.setEditMode(false)} className="button muted-button" >
            Cancel
          </button>
        </form>
    )
}
export default EditUserForm