import { useNavigate } from 'react-router-dom'
import {React, useState} from 'react'
import axios from 'axios'

const Addposition = () => {

  const navigate = useNavigate()

  const [position_title, setposition_title] = useState('')
  const [pos_description, setpos_description] = useState('')
  const [day_of_week, setday_of_week] = useState('')
  const [shift_start_time, setshift_start_time] = useState('')
  const [shift_end_time, setshift_end_time] = useState('')
  const [dept_has_position, setdept_has_position] = useState('')
  const [posi_has_salary, setposi_has_salary] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const payload = {"position_title":position_title , "pos_description":pos_description, "day_of_week":day_of_week , "shift_start_time":shift_start_time , "shift_end_time":shift_end_time, "dept_has_position":dept_has_position, "posi_has_salary":posi_has_salary}
      
      const response = await axios.post('http://localhost:8000/hrm/position', payload , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response){
        console.log('Response:', response.data);
        navigate('/position', {state: {message: 'Position Added!'}})
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
          <label for="position_title" class="form-label">Position Title </label>
          <input type="name" class="form-control" id="position_title" aria-describedby="position_title"  value={position_title}
            onChange= {e => setposition_title(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="pos_description" class="form-label">Pos_Desc</label>
          <input type="text" class="form-control" id="pos_description" aria-describedby="pos_description" value={pos_description}
            onChange= {e => setpos_description(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="day_of_week" class="form-label">Day of Week</label>
          <input type="text" class="form-control" id="day_of_week" aria-describedby="day_of_week" value={day_of_week}
            onChange= {e => setday_of_week(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="shift_start_time" class="form-label">Shift Start_Time</label>
          <input type="text" class="form-control" id="shift_start_time" aria-describedby="shift_start_time" value={shift_start_time}
            onChange= {e => setshift_start_time(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="shift_end_time" class="form-label">Shift End Time</label>
          <input type="text" class="form-control" id="shift_end_time" aria-describedby="shift_end_time"  value={shift_end_time}
            onChange= {e => setshift_end_time(e.target.value)} />
        </div>

        <div class="mb-3">
          <label for="dept_has_position" class="form-label">Dept has Position</label>
          <input type="text" class="form-control" id="dept_has_position" aria-describedby="dept_has_position"  value={dept_has_position}
            onChange= {e => setdept_has_position(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="posi_has_salary" class="form-label">Posi has Salary</label>
          <input type="text" class="form-control" id="posi_has_salary" aria-describedby="posi_has_salary"  value={posi_has_salary}
            onChange= {e => setposi_has_salary(e.target.value)} />
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

export default Addposition