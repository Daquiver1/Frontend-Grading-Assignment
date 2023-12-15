import React from "react";

const sizeClasses = {
  txtInterSemiBold60: "font-inter font-semibold",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular16Bluegray500: "font-inter font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterSemiBold16Blue800: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterSemiBold16: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
