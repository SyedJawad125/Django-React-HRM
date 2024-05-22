import {React, useEffect, useState} from 'react'
import {Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'




const Department = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [records, setRecords] = useState([])
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)

    useEffect(()=>{

      if (location.state && location.state.message){
        toast.success(location.state.message)
        navigate('/department', {state: ''})
      }
      else if (flag == true){
        toast.success('Department deleted')
        setFlag(false)
      }

      const receiveData = async () =>{
          const res = await axios.get('http://localhost:8000/hrm/department')
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
        const res = await axios.delete(`http://localhost:8000/hrm/department?id=${id}`)
  
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
      navigate('/update/Updatedepartment', {state: {data: item}})
  }


  return (
    <div class='container' style={{ marginLeft: '200px' }} >
        <h2 class='mt-4'>Department Tables</h2>

        <Link type="submit" class="btn btn-primary mt-3" to='/add/Adddepartment'>Add Department</Link>
        
        <br/><br/>

        {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

        <div class="row">
            
            { records ? 
            records.map(item => (
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title"><b>Dept Name: </b>{item.dept_name}</h5>
                        <p class="card-text"><b>Dept Desc: </b>{item.dept_description}</p>
                        <p class="card-text"><b>Dept Loc: </b>{item.dept_location}</p>
                        <p class="card-text"><b>Dept Budget: </b>{item.dept_budget}</p>
                        <p class="card-text"><b>Dept Proj: </b>{item.dept_projects}</p>
                        <p class="card-text"><b>Dept Goals: </b>{item.dept_goals}</p>
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

export default Department