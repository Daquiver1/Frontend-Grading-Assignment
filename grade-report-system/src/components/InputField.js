import React, { useState } from "react";

const InputField = ({ placeholder, type, value, onChange, color }) => {
  const [show, setShow] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className={`w-full flex items-center rounded-md sm:h-[50px] ${!color ? "bg-[#F6F6F6]": "bg-white"}`}>
      <input
        type={(!passwordShown && type) || `text`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="outline-none w-full px-[18px] py-[7px] bg-transparent placeholder:capitalize"
      />
      {type === "password" && !show && (
        <img
          onClick={() => {
            setShow(true);
            setPasswordShown(true);
          }}
          src={require("../assets/Hide.png")}
          className="w-7 h-6 mr-[13px]"
        />
      )}
      {type === "password" && show && (
        <img
          onClick={() => {
            setShow(false);
            setPasswordShown(false);
          }}
          src={require("../assets/Show.png")}
          className="w-7 h-6 mr-[13px]"
        />
      )}{" "}
      {type === "password" && (value.length < 5 && value.length !== 0) && (
        <img
          src={require("../assets/Unavailable.png")}
          className="w-5 relative right-[-30px]"
        />
      )}
      {type === "password" && (value.length  >= 5 && value.length !== 0) && (
        <img
          src={require("../assets/Ok.png")}
          className="w-5 relative right-[-30px]"
        />
      )}
    </div>
  );
};

export default InputField;
