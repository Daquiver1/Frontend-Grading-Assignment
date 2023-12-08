import MainLayout from "../layout/MainLayout";

function GradesReport() {
  return (
    <MainLayout>
      <div className="container mt-3">
        <h2>Grades Report</h2>
        <div>
          {/* Filter controls   */}
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Academic year</option>
                    <option value="1">2019-2020</option>
                    <option value="1">2020-2021</option>
                    <option value="2">2021-2022</option>
                    <option value="3">2022-2023</option>
                    <option value="3">2023-2024</option>
                  </select>
                </td>
                <td>
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Semester</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                  </select>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary btnfilter btnlockandfeel"
                  >
                    Filter
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary downloadaspdf btnlockandfeel"
                  >
                    Download (Pdf)
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Grades table */}
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
              <td>Music and Dance</td>
              <td>2342</td>
              <td>2022-2023</td>
              <td>1st</td>
              <td>A</td>
            </tr>
            <tr>
              <td>Engineering I</td>
              <td>5644</td>
              <td>2022-2023</td>
              <td>1st</td>
              <td>C</td>
            </tr>
            <tr>
              <td>Introduction to Calculus</td>
              <td>6567</td>
              <td>2022-2023</td>
              <td>1st</td>
              <td>A</td>
            </tr>

            <tr>
              <td>Machine Learning</td>
              <td>6521</td>
              <td>2022-2023</td>
              <td>1st</td>
              <td>A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}

export default GradesReport;
