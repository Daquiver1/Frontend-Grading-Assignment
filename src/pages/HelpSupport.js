const HelpSupport = () => {
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Help and Support</h1>
            <p className="mb-4">
                This is your help and support page. You can find answers to frequently asked questions here. 
                If you need further assistance, you can contact us using the form below.
            </p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="m-0 font-weight-bold text-primary">Frequently Asked Questions</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="faqTable" className="table table-bordered table-striped table-hover" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Answer</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Question</th>
                                    <th>Answer</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>How do I report a missing grade?</td>
                                    <td>
                                        You can report a missing grade by going to the "Report Missing Grade" page. 
                                        You will need to enter the course name, instructor name, expected grade, and 
                                        an explanation for why you are reporting a missing grade.
                                    </td>
                                </tr>
                                <tr>
                                    <td>How do I contact my instructor?</td>
                                    <td>
                                        You can contact your instructor by going to the "Contact Instructor" page. 
                                        You will see a list of your instructors and their contact information.
                                    </td>
                                </tr>
                                <tr>
                                    <td>How do I change my password?</td>
                                    <td>
                                        You can change your password by going to the "Change Password" page. 
                                        You will need to enter your current password and your new password.
                                    </td>
                                </tr>
                                <tr>
                                    <td>How do I change my email?</td>
                                    <td>
                                        You can change your email by going to the "Change Email" page. 
                                        You will need to enter your current email and your new email.
                                    </td>
                                </tr>
                                <tr>
                                    <td>How do I change my phone number?</td>
                                    <td>
                                        You can change your phone number by going to the "Change Phone Number" page. 
                                        You will need to enter your current phone number and your new phone number.
                                    </td>
                                </tr>
                                <tr>
                                    <td>How do I change my address?</td>
                                    <td>
                                        You can change your address by going to the "Change Address" page. 
                                        You will need to enter your current address and your new address.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="m-0 font-weight-bold text-primary">Contact Form</h4>
                </div>
                <div className="card-body">
                    <form className="user">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                placeholder="Name"
                                name="name"
                                autocomplete="false"
                                required
                                />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                autocomplete="new-password"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                type="text" 
                                className="form-control"
                                id="message"
                                placeholder="Message"
                                autocomplete="new-password"
                                name="message"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                            Send
                        </button>
                        <hr/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HelpSupport;