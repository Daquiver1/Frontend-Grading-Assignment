import React from "react";

import { Img } from "components";
import Bar from "components/Bar";

import { handleSectionNavigation } from "utils";

const FrameFourPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Bar className="!sticky !w-[319px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[72px] items-center justify-start w-full"
                style={{ backgroundImage: "url('images/img_group31.svg')" }}
                id="block2"
              >
                <Img
                  className="h-[72px]"
                  src="images/img_maskgroup.svg"
                  alt="maskgroup_One"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-8 sm:px-5 w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start mb-[101px] mt-4 w-full"
                  onClick={() => {
                    handleSectionNavigation("block2");
                  }}
                >
                  <div className="flex flex-row gap-4 items-center justify-start w-[22%] md:w-full">
                    <div className="h-[68px] relative w-[68px]">
                      <Img
                        className="h-[68px] m-auto rounded-[50%] w-[68px]"
                        src="images/img_vector_68x68.png"
                        alt="vector"
                      />
                      <Img
                        className="absolute h-[66px] inset-[0] justify-center m-auto w-[66px]"
                        src="images/img_mobile.svg"
                        alt="mobile"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-[62%]">
                      <Img
                        className="h-3"
                        src="images/img_vector_blue_gray_800.svg"
                        alt="vector_One"
                      />
                      <Img
                        className="h-2.5"
                        src="images/img_vector_blue_gray_700_01_10x138.svg"
                        alt="vector_Two"
                      />
                      <Img
                        className="h-2.5"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-[15px] mt-[35px]"
                    src="images/img_vector_blue_gray_800_15x112.svg"
                    alt="vector_Three"
                  />
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-1 w-full">
                    <Img
                      className="h-11"
                      src="images/img_group_white_a700_44x141.svg"
                      alt="group"
                    />
                    <Img
                      className="h-10 sm:mt-0 mt-1"
                      src="images/img_group_black_900.svg"
                      alt="group_One"
                    />
                  </div>
                  <Img
                    className="h-[627px] mt-8"
                    src="images/img_group_white_a700_615x1057.svg"
                    alt="group_Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFourPage;
