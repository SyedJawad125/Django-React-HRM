import { useNavigate } from 'react-router-dom'
import {React, useState} from 'react'
import axios from 'axios'
const Adddepartment = () => {
    const navigate = useNavigate()

    const [dept_name, setdept_name] = useState('')
    const [dept_description, setdept_description] = useState('')
    const [dept_location, setdept_location] = useState('')
    const [dept_budget, setdept_budget] = useState('')
    const [dept_projects, setddept_projects] = useState('')
    const [dept_goals, setdept_goals] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const payload = {"dept_name":dept_name , "dept_description":dept_description, "dept_location":dept_location , "dept_budget":dept_budget , "dept_projects":dept_projects, "dept_goals":dept_goals}
      
      const response = await axios.post('http://localhost:8000/hrm/department', payload , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response){
        console.log('Response:', response.data);
        navigate('/department', {state: {message: 'Department Added!'}})
      }
      // Handle success
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  
  return (
    <div class='container' style={{ marginLeft: '200px' }}>
      <form class='mt-3' onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">Department Name</label>
          <input type="name" class="form-control" id="dept_name" aria-describedby="dept_name"  value={dept_name}
            onChange= {e => setdept_name(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="dept_description" class="form-label">Deptartment Description</label>
          <input type="text" class="form-control" id="dept_description" aria-describedby="model" value={dept_description}
            onChange= {e => setdept_description(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="dept_location" class="form-label">Department location</label>
          <input type="text" class="form-control" id="dept_location" aria-describedby="dept_location" value={dept_location}
            onChange= {e => setdept_location(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="dept_budget" class="form-label">Department Budget</label>
          <input type="text" class="form-control" id="dept_budget" aria-describedby="dept_budget" value={dept_budget}
            onChange= {e => setdept_budget(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="dept_projects" class="form-label">Department Projects</label>
          <input type="text" class="form-control" id="dept_projects" aria-describedby="dept_projects"  value={dept_projects}
            onChange= {e => setddept_projects(e.target.value)} />
        </div>

        <div class="mb-3">
          <label for="dept_goals" class="form-label">Department Goals</label>
          <input type="text" class="form-control" id="dept_goals" aria-describedby="dept_goals"  value={dept_goals}
            onChange= {e => setdept_goals(e.target.value)} />
        </div>


        {/* <select class="form-select" aria-label="Default select example" onChange={e => setMake(e.target.value)}>
        <option selected>Select Make</option>

          { makeRecords ?
            makeRecords.map(item => (
              <option value={item.id} key={item.id}>{item.name}</option>
            ))
            :
            <option selected>No Records</option>
          }

        </select> */}

        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default Adddepartment