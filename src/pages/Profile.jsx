import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import RR from "../images/RR.jpg"


function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <div className="profile-box">
        <div className="profile-image">
          <img src={RR} alt="Profile" />
        </div>
        <div className="profile-info">
          <FaUser className="profile-icon" />
          <span>Name: Bidahor Righteous</span>
        </div>
        <div className="profile-info">
          <FaEnvelope className="profile-icon" />
          <span>Email: rmbidahor@st.ug.edu.gh</span>
        </div>
        <div className="profile-info">
          <FaPhone className="profile-icon" />
          <span>Phone: (233)548996006</span>
        </div>
        <div className="profile-info">
          <FaCalendarAlt className="profile-icon" />
          <span>Date of Birth: July 4, 2001</span>
        </div>
        <div className="profile-info">
          <FaMapMarkerAlt className="profile-icon" />
          <span>Location: ACCRA, GHANA</span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

