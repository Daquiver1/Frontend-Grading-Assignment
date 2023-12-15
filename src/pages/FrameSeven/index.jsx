import React from "react";

import { Img } from "components";
import Bar from "components/Bar";

const FrameSevenPage = () => {
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
              >
                <Img
                  className="h-[72px]"
                  src="images/img_maskgroup.svg"
                  alt="maskgroup_One"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-end p-[31px] sm:px-5 w-full">
                <Img
                  className="h-[29px] ml-0.5 md:ml-[0] mt-6"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <Img
                  className="h-[15px] mt-[11px]"
                  src="images/img_vector_blue_gray_700_01.svg"
                  alt="vector_One"
                />
                <div className="bg-white-A700 flex flex-col items-center justify-start mt-[34px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[184px] items-start justify-start sm:pr-5 pr-6 py-6 w-full"
                    style={{
                      backgroundImage: "url('images/img_maskgroup.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-6 items-start justify-start w-[94%] md:w-full">
                      <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                        <Img
                          className="flex-1 h-14 w-full"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Img
                          className="flex-1 h-14 w-full"
                          src="images/img_group_white_a700.svg"
                          alt="group_One"
                        />
                        <Img
                          className="flex-1 h-14 w-full"
                          src="images/img_group_white_a700_56x174.svg"
                          alt="group_Two"
                        />
                        <Img
                          className="flex-1 h-14 w-full"
                          src="images/img_group_56x174.svg"
                          alt="group_Three"
                        />
                        <Img
                          className="flex-1 h-14 w-full"
                          src="images/img_group_1.svg"
                          alt="group_Four"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[39%] md:w-full">
                        <Img
                          className="h-14"
                          src="images/img_group_2.svg"
                          alt="group_Five"
                        />
                        <Img
                          className="h-14"
                          src="images/img_group_3.svg"
                          alt="group_Six"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[615px] mt-8"
                  src="images/img_group_white_a700_615x1057.svg"
                  alt="group_Seven"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameSevenPage;
