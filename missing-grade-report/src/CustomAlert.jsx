import React from "react";
import PropTypes from "prop-types";

function CustomAlert({ showAlert, closeAlert }) {
  return (
    <>
      {showAlert && (
        <div className="custom-alert">
          <span className="close" onClick={closeAlert}>
            &times;
          </span>
          <p>WELCOME!</p>
        </div>
      )}
    </>
  );
}

CustomAlert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  closeAlert: PropTypes.func.isRequired,
};

export default CustomAlert;
