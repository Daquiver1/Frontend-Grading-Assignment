import MainLayout from "../layout/MainLayout";

function ReportMissingGrade() {
  return (
    <MainLayout>
      <div className="container mt-3">
        <h2>Report Missing Grade</h2>
        <br />
        <table className="table table-borderless reportgradestable">
          <tbody>
            <tr>
              <td className="reportgradeslabelcontrol">Course Name:</td>
              <td className="reportgradesentrycontrol">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Course</option>
                  <option value="1">DCIT 205</option>
                  <option value="2">DCIT 203</option>
                  <option value="3">DCIT 209</option>
                  <option value="4">DCIT 207</option>
                  <option value="5">DCIT 201</option>
                  <option value="6">CBAS 342</option>
                  <option value="2">Machine Learning</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="reportgradeslabelcontrol">Instructor Name:</td>
              <td className="reportgradesentrycontrol">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Instructor</option>
                  <option value="1">Attah Mensah</option>
                  <option value="2">Godfred Adomah</option>
                  <option value="3">Abdullah Tanko</option>
                  <option value="4">Sarah Efia Atsu</option>
                  <option value="5">Seidu Ali</option>
                  <option value="6">Serwaa Inkoom</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className="reportgradeslabelcontrol">Expected grade:</td>
              <td className="reportgradesentrycontrol">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="5">D</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className="reportgradeslabelcontrol">Explanation:</td>
              <td className="reportgradesentrycontrol">
                <div className="mb-3">
                  <textarea className="form-control" rows={5}></textarea>
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td className="reportgradeslabelcontrol">
                <button
                  type="button"
                  className="btn btn-secondary btnfilter btnlockandfeel"
                >
                  Report
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}

export default ReportMissingGrade;
