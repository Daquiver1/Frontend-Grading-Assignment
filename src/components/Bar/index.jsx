import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img } from "components";

const Bar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="common-pointer h-[1082px] sm:h-auto object-cover w-full"
          src="images/img_clippathgroup.png"
          alt="clippathgroup"
          onClick={() => navigate("/frameseven")}
        />
        <Img
          className="h-[1082px]"
          src="images/img_maskgroup.svg"
          alt="maskgroup"
        />
      </Sidebar>
    </>
  );
};

Bar.defaultProps = {};

export default Bar;
