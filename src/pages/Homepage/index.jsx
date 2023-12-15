import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, List, Text } from "components";

const HomepagePage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-end mx-auto md:pr-10 sm:pr-5 pr-[139px] w-full">
        <div className="border-b border-gray-100 border-solid flex flex-col items-center justify-start w-full">
          <div className="flex flex-col h-20 md:h-auto items-center justify-center max-w-[1440px] w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-7xl sm:px-5 px-8 w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row gap-[9px] items-center justify-start w-auto">
                  <Img
                    className="h-12 w-11"
                    src="images/img_fictionalcompany.svg"
                    alt="fictionalcompan"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterSemiBold16"
                  >
                    AcademicPulse
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Button
                  className="common-pointer bg-blue-800 border border-blue-800 border-solid cursor-pointer font-semibold min-w-[83px] py-3 rounded-lg shadow-bs text-base text-center text-white-A700"
                  onClick={() => googleSignIn()}
                >
                  Log In
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div
            className="common-pointer flex flex-col md:gap-10 gap-16 h-[880px] md:h-auto items-center justify-start max-w-[1440px] pt-24 w-full"
            onClick={() => navigate("/")}
          >
            <div className="flex flex-col items-center justify-start max-w-7xl sm:px-5 px-8 w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-center justify-start max-w-5xl w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="md:text-5xl text-6xl text-center text-gray-900_01 tracking-[-1.20px] w-full"
                      size="txtInterSemiBold60"
                    >
                      Empower Your Academic Journey
                    </Text>
                  </div>
                  <Text
                    className="leading-[30.00px] max-w-3xl md:max-w-full text-blue_gray-700 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    <>
                      Track, manage, and report grades that don&#39;t appear in
                      your official academic profile. Stay in control of
                      unrecorded academic achievements effortlessly
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="border border-blue-800 border-solid cursor-pointer font-semibold text-center text-lg w-[259px]"
                    color="blue_800"
                    size="sm"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 flex flex-col items-center justify-start max-w-7xl p-8 sm:px-5 w-full">
              <Img
                className="h-[424px] sm:h-auto object-cover rounded-[16px] w-[1216px] md:w-full"
                src="images/img_desktop1.png"
                alt="desktopOne"
              />
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1440px] py-24 w-full">
            <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-5 items-center justify-start max-w-3xl w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-base text-blue-800 text-center w-full"
                      size="txtInterSemiBold16Blue800"
                    >
                      Features
                    </Text>
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900_01 tracking-[-0.72px] w-full"
                      size="txtInterSemiBold36"
                    >
                      Simple features big impact!!
                    </Text>
                  </div>
                  <Text
                    className="leading-[30.00px] max-w-3xl md:max-w-full text-blue_gray-700 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    Straightforward features that yield substantial influence,
                    simplifying tasks while generating meaningful outcomes.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                  <Button className="border border-blue_gray-50 border-solid flex h-12 items-center justify-center rounded-[10px] w-12">
                    <Img
                      className="h-6"
                      src="images/img_chartbreakoutsquare.svg"
                      alt="chartbreakoutsq"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Text
                      className="text-center text-gray-900_01 text-xl w-full"
                      size="txtInterSemiBold20"
                    >
                      Report missing grades
                    </Text>
                    <Text
                      className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-700 text-center"
                      size="txtInterRegular16"
                    >
                      Simplify the process of identifying and reporting any
                      unrecorded grades with our user-friendly tools, empowering
                      you to stay informed about your academic progress.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                  <Button className="border border-blue_gray-50 border-solid flex h-12 items-center justify-center rounded-[10px] w-12">
                    <Img
                      className="h-6"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Text
                      className="text-center text-gray-900_01 text-xl w-full"
                      size="txtInterSemiBold20"
                    >
                      Track and manage your grades
                    </Text>
                    <Text
                      className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-700 text-center"
                      size="txtInterRegular16"
                    >
                      {" "}
                      Utilize comprehensive tools to efficiently manage and stay
                      informed about your ongoing progress across various
                      subjects and assessments.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                  <Button className="border border-blue_gray-50 border-solid flex h-12 items-center justify-center rounded-[10px] w-12">
                    <Img
                      className="h-6"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Text
                      className="text-center text-gray-900_01 text-xl w-full"
                      size="txtInterSemiBold20"
                    >
                      Communicate with your Instructor
                    </Text>
                    <Text
                      className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-700 text-center"
                      size="txtInterRegular16"
                    >
                      Enhance your academic experience by promptly reaching out
                      to instructors, ensuring a smooth flow of information and
                      support throughout your educational journey.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1440px] pb-12 pt-16 w-full">
            <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row gap-[9px] items-center justify-start w-auto">
                  <Img
                    className="h-12 w-11"
                    src="images/img_fictionalcompany.svg"
                    alt="fictionalcompan_One"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterSemiBold16"
                  >
                    AcademicPulse
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
              <div className="border-blue_gray-50 border-solid border-t flex md:flex-col flex-row gap-8 items-center justify-start pt-8 w-full">
                <Text
                  className="flex-1 text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16Bluegray500"
                >
                  © 2023 Matilda Baffah. All rights reserved.
                </Text>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-500 w-auto"
                    size="txtInterRegular16Bluegray500"
                  >
                    Terms
                  </Text>
                  <a
                    href="javascript:"
                    className="text-base text-blue_gray-500 w-auto"
                  >
                    <Text size="txtInterRegular16Bluegray500">Privacy</Text>
                  </a>
                  <Text
                    className="text-base text-blue_gray-500 w-auto"
                    size="txtInterRegular16Bluegray500"
                  >
                    Cookies
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
