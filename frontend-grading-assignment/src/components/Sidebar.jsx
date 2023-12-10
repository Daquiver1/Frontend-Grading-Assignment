const Sidebar = () => {
 

  return (
    <div>
        <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Therichpost </div>
        <div className="list-group">
                <a href="/" className="list-group-item list-group-item-action bg-blue">Home</a>
                <a href="login" className="list-group-item list-group-item-action bg-blue">Login</a>
                <a href="dashboard" className="list-group-item list-group-item-action bg-blue">Dashboard</a>
                <a href="report-missing-grade" className="list-group-item list-group-item-action bg-blue">Report Grade</a>
                <a href="" className="list-group-item list-group-item-action bg-blue">Missing Grade</a>
                <a href="contact" className="list-group-item list-group-item-action bg-blue">Contact</a>
                <a href="help" className="list-group-item list-group-item-action bg-blue">Help & Support</a>
        </div>
        </div>
       
    </div>
  );
};

export default Sidebar;
