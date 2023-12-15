import React from "react";

import { Img } from "components";

const FramePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col h-[1082px] items-center justify-start mx-auto p-[343px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_frameeight.svg')" }}
      >
        <Img
          className="h-[396px]"
          src="images/img_group_white_a700_615x1057.svg"
          alt="group"
        />
      </div>
    </>
  );
};

export default FramePage;
