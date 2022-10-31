import femalepp from "../assets/images/femalepp.jpg"
import malepp from "../assets/images/malepp.jpg"
import "./Employees.css"

const Employees =({employees,selectedTeam,handleEmployeeCardClick,handleTeamChange}) =>{
    return(
        <main className="container">

        <div className="row justify-content-center mt-3 mb-3">
                <div class="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamChange}>
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
                    <div key={employee.id} id={employee.id} className={(employee.teamName===selectedTeam ? 'card m-2 standout':'card m-2')} onClick={handleEmployeeCardClick}>
                        
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