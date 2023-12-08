import MainLayout from "../layout/MainLayout";

function ContactUs() {
  return (
    <MainLayout>
      <div className="container mt-3">
        <h2>Contact Us</h2>
        <br />
        <div>
          <p>
            <strong>University of Ghana, Legon Campus</strong>
            <br />
            Opposite Mathematics Department
          </p>

          <p>
            +233 501 382 035
            <br />
            Mon to Fri 9am to 5pm
          </p>

          <p>
            <a href="#">dcs@ug.edu.gh</a>
            <br />
            Send us your query anytime!
          </p>
        </div>
        <br />
        <br />

        <h3>Technical Support</h3>
        <div>
          <table className="table table-borderless reportgradestable">
            <tbody>
              <tr>
                <td className="reportgradeslabelcontrol">First Name:</td>
                <td className="reportgradesentrycontrol">
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <td className="reportgradeslabelcontrol">Last Name:</td>
                <td className="reportgradesentrycontrol">
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <td className="reportgradeslabelcontrol">Email:</td>
                <td className="reportgradesentrycontrol">
                  <input type="text" className="form-control" />
                </td>
              </tr>

              <tr>
                <td className="reportgradeslabelcontrol">Technical Issue:</td>
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
                    Send
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}

export default ContactUs;
