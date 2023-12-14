import React from "react";

import { Img } from "components";

import { handleSectionNavigation } from "utils";

const FrameFivePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="common-pointer h-[960px]"
          src="images/img_clippathgroup_white_a700.svg"
          alt="clippathgroup"
          id="block1"
          onClick={() => {
            handleSectionNavigation("block1");
          }}
        />
      </div>
    </>
  );
};

export default FrameFivePage;
