
import MainDash from '../components/Maindash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function Dashboard() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default Dashboard;