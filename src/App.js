// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About' 
import Services from './pages/Services' 
import Forms from './pages/Forms' 
import Department from './pages/Department' 
import Salary from './pages/Salary' 
import Position from './pages/Position' 
import Contact from './pages/contact'
import Adddepartment from './pages/Adddepartment';
import Updatedepartment from './pages/Updatedepartment'
import Addsalary from './pages/Addsalary';
import Updatesalary from './pages/Updatesalary';








function App() {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/services' element={<Services/>}  />
        <Route path='/forms' element={<Forms/>}  />
        <Route path='/department' element={<Department/>}  />
        <Route path='/salary' element={<Salary/>}  />
        <Route path='/position' element={<Position/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/add/Adddepartment' element={<Adddepartment/>}  />
        <Route path='/update/Updatedepartment' element={<Updatedepartment/>}  />
        <Route path='/add/Addsalary' element={<Addsalary/>}  />
        <Route path='/update/Updatesalary' element={<Updatesalary/>}  />


      </Routes>
    </div>

  )
}

export default App;
