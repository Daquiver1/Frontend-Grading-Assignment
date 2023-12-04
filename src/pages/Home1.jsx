import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                className="mb-3"
                style={{ height: 100, width: 100, borderRadius: "50%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITnCyIM9mlmOGgw2oDCaIz44LuTafEceOdg&usqp=CAU"
                alt=""
              />
              <h5 className="card-title">
                Welcome, {currentUser?.username}!
              </h5>
              <p className="card-text">
                This is the Missing Grade Reporting System, designed to help
                track and report missing grades.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card">
            <img
              src="https://wallpapers.com/images/featured/2f5fbl2k3wwi31aq.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">About the System</h5>
              <p className="card-text">
                Containers provide a means to center and horizontally pad your
                site’s contents. Use .container for a responsive pixel width or
                .container-fluid for width: 100% across all viewport and device
                sizes.
              </p>
              {/* Add more content here as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
