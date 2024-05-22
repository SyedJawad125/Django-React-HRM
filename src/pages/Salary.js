import {React, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation  } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'

const Salary = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [records, setRecords] = useState([])
  const [data, setData] = useState([])
  const [flag, setFlag] = useState(false)

  useEffect(()=>{

    if (location.state && location.state.message){
      toast.success(location.state.message)
      navigate('/salary', {state: ''})
    }
    else if (flag == true){
      toast.success('Salary deleted')
      setFlag(false)
    }

    const receiveData = async () =>{
        const res = await axios.get('http://localhost:8000/hrm/salary')
        try{
            if (res){
                setRecords(res.data.data.data)
                setData(res.data.data)
            }
        }
        catch (error){
            console.log('error occured', error)
        }
    }
    receiveData();
    
},   [flag, location.state])


const deleteRecord = async (id) => {
    try{
      const res = await axios.delete(`http://localhost:8000/hrm/salary?id=${id}`)

      if (res){
        console.log('deleted successfully')
        setFlag(true)
      }
    }
    catch (error){
      console.log(error)
    }
  }

const updateRecord = async (item) => {
    navigate('/update/Updatesalary', {state: {data: item}})
}


  return (
    <div class='container' style={{ marginLeft: '200px' }} >
        <h2 class='mt-4'>Salary Tables</h2>

        <Link type="submit" class="btn btn-primary mt-3" to='/add/Addsalary'>Add Salary</Link>
        
        <br/><br/>

        {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

        <div class="row">
            
            { records ? 
            records.map(item => (
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title"><b>Base Salary: </b>{item.base_salary}</h5>
                        <p class="card-text"><b>Gross Salary: </b>{item.gross_salary}</p>
                        <p class="card-text"><b>Net Salary: </b>{item.net_salary}</p>
                        <p class="card-text"><b>Pay Frequency: </b>{item.pay_frequency}</p>
                        <p class="card-text"><b>Pay Grade: </b>{item.pay_grade}</p>
                        <p class="card-text"><b>Allowances: </b>{item.allowances}</p>
                        <button class='btn btn-danger'onClick={()=> deleteRecord(item.id)}>Delete</button>
                        <button class='btn btn-primary mx-2'onClick={()=> updateRecord(item)}>Update</button>

                    </div>
                </div>
    )) : 
    <p>Loading....</p>
    }
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Salary