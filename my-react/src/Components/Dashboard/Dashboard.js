import Page from "./Page";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return ( 
        <div className="flex mt-24">
            <Sidebar/>
            <Page/>
        </div>
     );
}
 
export default Dashboard;