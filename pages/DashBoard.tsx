import MainLayout from "../layout/MainLayout";

function DashBoard() {
  return (
    <MainLayout>
      <div className="container mt-3">
        <h2>Dashboard</h2>
        <p>Grades for the current academic year: 2022-2023</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course ID</th>
              <th>Academic Year</th>
              <th>Semester</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DCIT 205</td>
              <td>2342</td>
              <td>2023-2024</td>
              <td>1st</td>
              <td>A</td>
            </tr>

            <tr>
              <td>DCIT 203</td>
              <td>5644</td>
              <td>2023-2024</td>
              <td>1st</td>
              <td>A</td>
            </tr>

            <tr>
              <td>DCIT 209</td>
              <td>6578</td>
              <td>2023-2024</td>
              <td>1st</td>
              <td>A</td>
            </tr>

            <tr>
              <td>DCIT 207</td>
              <td>5865</td>
              <td>2023-2024</td>
              <td>1st</td>
              <td>A</td>
            </tr>

            <tr>
              <td>DCIT 201</td>
              <td>5865</td>
              <td>2023-2024</td>
              <td>1st</td>
              <td>A</td>
            </tr>
            <tr>
              <td>
                <div>
                  <span
                    className="divmissingcourse"
                    data-bs-toggle="tooltip"
                    title="This Course is missing. Please report for rectification"
                  >
                    DCIT 102
                  </span>
                  <span
                    //   className="btn btn-danger missinggradebadge"
                    className="position-relative top-0 badge rounded-pill bg-danger align-top"
                    // className="badge rounded-pill bg-danger align-top"
                    data-bs-toggle="tooltip"
                    title="Course 5 is missing. Please report for rectification"
                  >
                    missing!
                  </span>
                </div>
                {/*    <button
                  type="button"
                  className="btn btn-primary position-relative"
                >
                  Inbox
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button> */}
              </td>
              <td>6754</td>
              <td>2022-2023</td>
              <td>1st</td>
              <td>
                <div>
                  <button
                    type="button"
                    className="btn btn-warning btnlockandfeel"
                  >
                    Report missings
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <span
                    className="divmissingcourse"
                    data-bs-toggle="tooltip"
                    title="This Course is missing. Please report for rectification"
                  >
                    UGRC 110
                  </span>
                  <span className="position-relative top-0 badge rounded-pill bg-danger align-top">
                    missing!
                  </span>
                </div>
              </td>
              <td>7865</td>
              <td>2022-2023</td>
              <td>1st</td>
              <td>
                <div>
                  <button
                    type="button"
                    className="btn btn-warning btnlockandfeel"
                  >
                    Report missings
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>CBAS 342</td>
              <td>3456</td>
              <td>2022-2023</td>
              <td>2nd</td>
              <td>A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}

export default DashBoard;
