const InstructorContact = () => {
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Instructor Contact</h1>
            <p className="mb-4">
                This is your instructor contact page. Theses are the instructors 
                that are teaching you this semester. You can see your instructor name, 
                email and phone number.
            </p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="m-0 font-weight-bold text-primary">Instructor Contact</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="instructorContactTable" className="table table-bordered table-striped table-hover" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Instructor Name</th>
                                    <th>Instructor Email</th>
                                    <th>Instructor Phone Number</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Instructor Name</th>
                                    <th>Instructor Email</th>
                                    <th>Instructor Phone Number</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>Dr. Saeed Samet</td>
                                    <td>
                                        <a href="mailto:saeedsamet@gmail.com">
                                        saeedsamet@gmail.com
                                        </a>
                                    </td>
                                    <td>123-456-7890</td>
                                </tr>
                                <tr>
                                    <td>Dr. Mensur Koc</td>
                                    <td>
                                        <a href="mailto:mensurkoc@gmail.com">
                                            mensurkoc@gmail.com
                                        </a>
                                    </td>
                                    <td>123-456-7890</td>
                                </tr>
                                <tr>
                                    <td>Dr. Owusu Desmond</td>
                                    <td>
                                        <a href="mailto:owusudesmond@gmail.com">
                                        owusudesmond@gmail.com
                                        </a>
                                    </td>
                                    <td>123-456-7890</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* option to send a simulated email to the instructor */}
                <div className="card-footer">
                    <div className="text-center">
                        <a className="small" href="/email">Send Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructorContact;