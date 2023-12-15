import './CSS/dashboard.css'
const Dashboard = () => {

  const grade = 'Ecology';
    return (
        <div className="dashboard">
          <h1>OVERVIEW</h1>
          <div className="overview">
          <p>Philosophy : C+</p>
          <p>History : D</p>
          <p>Social work : A</p>
          <p>Economics: B</p>
          <p>Mathematics : A</p>
          <p>Academic Wrinting: B</p>
          <p>Critical Thinking: A</p>
          </div>
            <div className="missingGrades">
                <h1>
                  MISSING GRADES
                </h1>
             <p>
             {grade}
             </p>
            </div>
        </div>
      );
}
 
export default Dashboard;