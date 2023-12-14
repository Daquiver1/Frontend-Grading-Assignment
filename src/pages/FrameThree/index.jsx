import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List } from "components";
import Bar from "components/Bar";
import Picture from "components/Picture";

const FrameThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
          <div
            className="common-pointer flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full"
            onClick={() => navigate("/framethree")}
          >
            <Bar className="!sticky !w-[319px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[72px] items-center justify-start w-full"
                style={{ backgroundImage: "url('images/img_group14.svg')" }}
              >
                <Img
                  className="h-[72px]"
                  src="images/img_maskgroup.svg"
                  alt="maskgroup_One"
                />
              </div>
              <div className="bg-white-A700 flex flex-col gap-8 items-center justify-end p-1.5 w-full">
                <div className="bg-white-A700 flex flex-col gap-[43px] items-center justify-end mt-[42px] p-[35px] sm:px-5 w-[96%] md:w-full">
                  <Img
                    className="h-[35px] mt-2"
                    src="images/img_vector_gray_900.svg"
                    alt="vector"
                  />
                  <Img
                    className="h-[49px]"
                    src="images/img_vector_blue_gray_700_01_49x741.svg"
                    alt="vector_One"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start pb-[51px] md:px-10 sm:px-5 px-[51px] w-[96%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[70px] w-full">
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-40 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[91%]"
                      orientation="horizontal"
                    >
                      {new Array(4).fill({}).map((props, index) => (
                        <React.Fragment key={`Picture${index}`}>
                          <Picture
                            className="bg-gray-300 flex flex-col h-24 items-center justify-start sm:ml-[0] rounded-[50%] w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                    <div className="flex flex-col gap-[13px] items-center justify-start mt-[27px] w-[98%] md:w-full">
                      <div className="md:gap-10 gap-[97px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                        <Img
                          className="flex-1 h-[13px] w-full"
                          src="images/img_vector_gray_900_13x159.svg"
                          alt="vector_Two"
                        />
                        <Img
                          className="flex-1 h-[13px] w-full"
                          src="images/img_vector_gray_900_13x159.svg"
                          alt="vector_Three"
                        />
                        <Img
                          className="flex-1 h-[13px] w-full"
                          src="images/img_vector_gray_900_13x159.svg"
                          alt="vector_Four"
                        />
                        <Img
                          className="flex-1 h-[13px] w-full"
                          src="images/img_vector_gray_900_13x159.svg"
                          alt="vector_Five"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                        <Img
                          className="h-[15px]"
                          src="images/img_vector_blue_800.svg"
                          alt="vector_Six"
                        />
                        <Img
                          className="h-[15px]"
                          src="images/img_vector_blue_800.svg"
                          alt="vector_Seven"
                        />
                        <Img
                          className="h-[15px]"
                          src="images/img_vector_blue_800.svg"
                          alt="vector_Eight"
                        />
                        <Img
                          className="h-[15px]"
                          src="images/img_vector_blue_800.svg"
                          alt="vector_Nine"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-4 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Img
                          className="h-[11px]"
                          src="images/img_vector_blue_gray_700_01_11x184.svg"
                          alt="vector_Ten"
                        />
                        <Img
                          className="h-[11px]"
                          src="images/img_vector_blue_gray_700_01_11x184.svg"
                          alt="vector_Eleven"
                        />
                        <Img
                          className="h-[11px]"
                          src="images/img_vector_blue_gray_700_01_11x184.svg"
                          alt="vector_Twelve"
                        />
                        <Img
                          className="h-[11px]"
                          src="images/img_vector_blue_gray_700_01_11x184.svg"
                          alt="vector_Thirteen"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[22px] w-[95%] md:w-full">
                        <Img
                          className="h-[47px]"
                          src="images/img_group_indigo_400.svg"
                          alt="group"
                        />
                        <Img
                          className="h-[47px]"
                          src="images/img_group_indigo_400.svg"
                          alt="group_One"
                        />
                        <Img
                          className="h-[47px]"
                          src="images/img_group_indigo_400.svg"
                          alt="group_Two"
                        />
                        <Img
                          className="h-[47px]"
                          src="images/img_group_indigo_400.svg"
                          alt="group_Three"
                        />
                      </div>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-40 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-16 w-[91%]"
                        orientation="horizontal"
                      >
                        {new Array(4).fill({}).map((props, index) => (
                          <React.Fragment key={`Picture${index}`}>
                            <Picture
                              className="bg-gray-300 flex flex-col h-24 items-center justify-start rounded-[50%] w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                      <div className="md:gap-10 gap-[97px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-[27px] w-[98%] md:w-full">
                        <Img
                          className="h-[13px] w-full"
                          src="images/img_vector_gray_900_13x159.svg"
                          alt="vector_Fourteen"
                        />
                        <Img
                          className="h-[13px] w-full"
                          src="images/img_vector_gray_900_13x159.svg"
                          alt="vector_Fifteen"
                        />
                        <Img
                          className="h-[13px] w-full"
                          src="images/img_vector_gray_900_13x159.svg"
                          alt="vector_Sixteen"
                        />
                        <Img
                          className="h-[13px] w-full"
                          src="images/img_vector_gray_900_13x159.svg"
                          alt="vector_Seventeen"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-3 w-[97%] md:w-full">
                        <Img
                          className="h-[15px]"
                          src="images/img_vector_blue_800.svg"
                          alt="vector_Eighteen"
                        />
                        <Img
                          className="h-[15px]"
                          src="images/img_vector_blue_800.svg"
                          alt="vector_Nineteen"
                        />
                        <Img
                          className="h-[15px]"
                          src="images/img_vector_blue_800.svg"
                          alt="vector_Twenty"
                        />
                        <Img
                          className="h-[15px]"
                          src="images/img_vector_blue_800.svg"
                          alt="vector_TwentyOne"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-4 w-full">
                        <Img
                          className="h-[11px]"
                          src="images/img_vector_blue_gray_700_01_11x184.svg"
                          alt="vector_TwentyTwo"
                        />
                        <Img
                          className="h-[11px]"
                          src="images/img_vector_blue_gray_700_01_11x184.svg"
                          alt="vector_TwentyThree"
                        />
                        <Img
                          className="h-[11px]"
                          src="images/img_vector_blue_gray_700_01_11x184.svg"
                          alt="vector_TwentyFour"
                        />
                        <Img
                          className="h-[11px]"
                          src="images/img_vector_blue_gray_700_01_11x184.svg"
                          alt="vector_TwentyFive"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[22px] w-[95%] md:w-full">
                        <Img
                          className="h-[47px]"
                          src="images/img_group_indigo_400.svg"
                          alt="group_Four"
                        />
                        <Img
                          className="h-[47px]"
                          src="images/img_group_indigo_400.svg"
                          alt="group_Five"
                        />
                        <Img
                          className="h-[47px]"
                          src="images/img_group_indigo_400.svg"
                          alt="group_Six"
                        />
                        <Img
                          className="h-[47px]"
                          src="images/img_group_indigo_400.svg"
                          alt="group_Seven"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameThreePage;
