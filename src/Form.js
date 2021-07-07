import React, { useState } from 'react'

const AddEmployeeForm = props => {

    const initFormState = {}
    const [employee, setEmployee] = useState(initFormState)

    const handleInputChange = event => {
        const {name, value} = event.target        
        console.log("name in handle", name, "value", value)
        setEmployee({ ...employee, [name]: value })    
    }

    return (
        <form
            onSubmit={ event => {
                event.preventDefault()
                return props.AddEmployee(employee)
                //reset form: 
                setEmployee(initFormState)
            }}
        >
          <label>Name</label>
          <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
          <label>Role</label>
          <input type="text" name="role" value={employee.role} onChange={handleInputChange} />
          <button>Add new employee</button>
        </form>
    )
}

export default AddEmployeeForm; 