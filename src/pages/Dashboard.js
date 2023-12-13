const Dashboard = () => {
    return (
        <div className="dashboard-container">
          <h2>Dashboard</h2>
          <p>Welcome to your dashboard. Here you can view your grades and track missing grades.</p>
          <div className="dashboard-grades">
            <h3>Grades</h3>
            <p>Here are your current grades:</p>
            <table>
              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
              <tr>
                <td>Course 1</td>
                <td>90%</td>
              </tr>
              <tr>
                <td>Course 2</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>Course 3</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Course 4</td>
                <td>60%</td>
              </tr>
            </table>
          </div>
          <div className="dashboard-missing">
            <h3>Missing Grades</h3>
            <p>You have no missing grades.</p>
          </div>
        </div>
    )
}

export default Dashboard;