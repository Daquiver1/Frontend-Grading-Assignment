const instructors = [
    {   course: "DCIT 205 - Web Design and Development",
        name: "Dr. Michael Soli",
        email: "mat.soli@ug.edu.gh"
    },
    {   course: "DCIT 103 - Office Productivity Tools",
        name: "Mr. Mark Atta Mensah",
        email: "mensah.mark@ug.edu.gh"
    },
    {   course: "DCIT 203 - Digital and Logic Systems",
        name: "Mr. Abdullai Aziz Dwumfour",
        email: "adwumfour@ug.edu.gh"
    },
    {   course: "DCIT 201 - Programming I",
        name: "Mr. Paul Nii Tackie Ammah",
        email: "niitackie1@staff.ug.edu.gh"
    },

    {   course: "DCIT 206 - Systems Administration",
        name: "Dr. Edward Danso Ansong",
        email: "edasong@ug.edu.gh"
    }
]

function sendEmail() {
    alert("Email sent successfully!");
}

const ContactPage = () => {

    return ( 
        <div className="instructor-contact">
  <h1>Instructor Contact</h1>
  <p>This page lists the instructors for your courses and their contact details. You can also send an email to the instructor of your choice.</p>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Course Name</th>
        <th>Instructor Name</th>
        <th>Email Address</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {instructors.map((instructor, index) => (
        <tr key={index}>
          <td>{instructor.course}</td>
          <td>{instructor.name}</td>
          <td>{instructor.email}</td>
          <td>
            <button className="btn btn-primary" onClick = {sendEmail}>
              Send Email
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

     );
}
 
export default ContactPage;