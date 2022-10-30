import { useState } from "react"
import femalepp from "../assets/images/femalepp.jpg"
import malepp from "../assets/images/malepp.jpg"
import "./Employees.css"

const Employees =() =>{

    const [employees,setEmployees] = useState([
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


    return(
        <main className="container">

        <div class="row justify-content-center mt-3 mb-3">
                <div class="col-6">
                    <select className="form-select form-select-lg">
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>
                        
                    </select>
                </div>
        </div>



            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-8">
                    <div class="card-collection">



            {
                employees.map((employee) => (
                    <div id={employee.id} className="card m-2">
                        
                        {(employee.gender==="male")?<img src={malepp}   className="card-img-top" alt="pp"/>:
                                                    <img src={femalepp} className="card-img-top" alt="pp"/>}

                    <div className="card-body">
                        <h5 className="card-title">Full Name : {employee.fullName}</h5>
                        <p className="card-text"><b>Designation : </b>{employee.designation}</p>


                    </div>


                    </div>
                    ))
                }
                    </div>

                </div>
            </div>

        </main>

    )
}
export default Employees