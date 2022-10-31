import "./Header.css"

const Header =({selectedTeam,teamMemberCount}) =>{
    return(
        <header>
            <h1 className="mt-4 p5 bg-dark text-white rounded">Team Member Allocation Application</h1>
            <h3>There are {teamMemberCount} {`${teamMemberCount>1?"members" : "member"}`} in {selectedTeam}</h3>

        </header>
    )
}

export default Header