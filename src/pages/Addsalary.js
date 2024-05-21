import { useNavigate } from 'react-router-dom'
import {React, useState} from 'react'
import axios from 'axios'
const Addsalary = () => {
    const navigate = useNavigate()

    const [base_salary, setbase_salary] = useState('')
    const [gross_salary, setgross_salary] = useState('')
    const [net_salary, setnet_salary] = useState('')
    const [pay_frequency, setpay_frequency] = useState('')
    const [pay_grade, setpay_grade] = useState('')
    const [allowances, setallowances] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const payload = {"base_salary":base_salary , "gross_salary":gross_salary, "net_salary":net_salary , "pay_frequency":pay_frequency , "pay_grade":pay_grade, "allowances":allowances}
      
      const response = await axios.post('http://localhost:8000/hrm/salary', payload , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response){
        console.log('Response:', response.data);
        navigate('/salary', {state: {message: 'Salary Added!'}})
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
          <label for="base_salary" class="form-label">Base Salary </label>
          <input type="name" class="form-control" id="base_salary" aria-describedby="base_salary"  value={base_salary}
            onChange= {e => setbase_salary(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="gross_salary" class="form-label">Gross Salary</label>
          <input type="text" class="form-control" id="gross_salary" aria-describedby="gross_salary" value={gross_salary}
            onChange= {e => setgross_salary(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="net_salary" class="form-label">Net Salary</label>
          <input type="text" class="form-control" id="net_salary" aria-describedby="net_salary" value={net_salary}
            onChange= {e => setnet_salary(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="pay_frequency" class="form-label">Pay Frequency</label>
          <input type="text" class="form-control" id="pay_frequency" aria-describedby="pay_frequency" value={pay_frequency}
            onChange= {e => setpay_frequency(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="pay_grade" class="form-label">Pay Grade</label>
          <input type="text" class="form-control" id="pay_grade" aria-describedby="pay_grade"  value={pay_grade}
            onChange= {e => setpay_grade(e.target.value)} />
        </div>

        <div class="mb-3">
          <label for="allowances" class="form-label">Allowances</label>
          <input type="text" class="form-control" id="allowances" aria-describedby="allowances"  value={allowances}
            onChange= {e => setallowances(e.target.value)} />
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

export default Addsalary