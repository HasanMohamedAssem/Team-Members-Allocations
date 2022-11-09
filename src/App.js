
import './App.css';
import { useState,useEffect } from "react"
//import Content from './components/Content/Content';
import Employees from './components/Data/Employees';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GroupedTeamMembers from "../src/components/groupedteammember/GroupedTeamMembers"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Nav from './components/navbar/Nav';
import NotFound from './components/not found/NotFound';

function App() {
  const [selectedTeam,setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam'))||"TeamB");


  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList'))||
  [
      {id:1,fullName:"Hasan Mohamed",designation:"C# Developer",gender:"male",teamName:"TeamA"},
      {id:2,fullName:"Ahmed Hazem",designation:"Java Developer",gender:"male",teamName:"TeamB"},
      {id:3,fullName:"Mahmoud Mohamed",designation:"Python Developer",gender:"male",teamName:"TeamA"},
      {id:4,fullName:"Salma Khaled",designation:"C++ Developer",gender:"female",teamName:"TeamC"},
      {id:5,fullName:"Soha Mohamed",designation:"Vue Developer",gender:"female",teamName:"TeamA"},
      {id:6,fullName:"Norhan Ahmed",designation:"Graphic Designer",gender:"female",teamName:"TeamB"},
      {id:7,fullName:"Omar Mohamed",designation:"API Developer",gender:"male",teamName:"TeamC"},
      {id:8,fullName:"Adham Ezz",designation:"C# Developer",gender:"male",teamName:"TeamB"},
      {id:9,fullName:"Tarek Ahmed",designation:"Web Developer",gender:"male",teamName:"TeamA"},
      {id:10,fullName:"Mostafa Haytham",designation:"C# Developer",gender:"male",teamName:"TeamC"},
      {id:11,fullName:"Noura Mohamed",designation:"C++ Developer",gender:"female",teamName:"TeamB"},
      {id:12,fullName:"Hana El-masry",designation:"Project Manager",gender:"female",teamName:"TeamA"}
  ])



useEffect(()=>{
  localStorage.setItem('employeeList',JSON.stringify(employees))

},[employees]);
useEffect(()=>{
  localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))

},[selectedTeam]);

  function handleTeamChange(event){

      
      setTeam(event.target.value);

  }
  function handleEmployeeCardClick(event){
      const transformedEmployees = employees.map((employee)=>employee.id===parseInt(event.currentTarget.id)
                                                  ?(employee.teamName===selectedTeam)?{...employee, teamName:''}:
                                                  {...employee,teamName:selectedTeam}:
                                                  employee);

      setEmployees(transformedEmployees);

  }

  return (
    <div className="App">
  <Router> 
    <Nav/>
    <Header
    selectedTeam ={selectedTeam}
    teamMemberCount = {employees.filter((employee)=>employee.teamName===selectedTeam).length}
    />
<Routes>

<Route path ="/"
element={ <Employees
  employees={employees}
  selectedTeam={selectedTeam}
  handleEmployeeCardClick={handleEmployeeCardClick}
  handleTeamChange={handleTeamChange}
  />}
> 
    </Route>

    <Route
    path="/GroupedTeamMembers"
    element={<GroupedTeamMembers/>}
    ></Route>

<Route
    path="*"
    element={<NotFound/>}
    ></Route>
    </Routes>
   
    <Footer/>
    </Router>
      
    </div>
  );
}

export default App;
