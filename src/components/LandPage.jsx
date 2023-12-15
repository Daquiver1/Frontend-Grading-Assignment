import { useState } from "react";
import Header from "./pages/header";
import LoginFooter from "./pages/LoginFooter";
import LoginMin from "./pages/LoginMin";
import MinHeader from "./pages/MinHeader";

const LandPage = () => {
  const [showText, setShowText] = useState(false);
  const timeOut = setTimeout(() => {
    setShowText(true);
  }, 7000);
  return (
    <>
      <Header></Header>
      <MinHeader></MinHeader>
      <div className="container">
        <div className="relative justify-start flex">
          <div className="flex justify-center flex-col gap-1 text-start xl:ml-40 max-xl:mt-5">
            <p className="text-3xl font-serif text-blue-400 italic">
              Pep&apos;s Grade Report System
            </p>
            <p className="text-2xl text-blue-300 italic">
              Your grade, your future
            </p>
          </div>
        </div>
        <div className="sliding-text minfooter flex flex-col justify-center place-items-center xl:mt-52 mt-5">
          <div className="text-1">
            <p className="sliding-texts max-xl:text-md">Have Issues With Your Grade?</p>
            <p className="sliding-semi-text max-xl:text-md">
              Report at Pep&apos;s Grade Report System to get that fixed
            </p>
          </div>
          <div className="text-2">
            <p className="sliding-texts max-xl:text-md">Connect With Comfort</p>
            <p className="sliding-semi-text max-xl:text-md">
              You do not have to physically connect with them, stay in your
              comfort zone and connect
            </p>
          </div>
          <div className="text-3">
            <p className="sliding-texts max-xl:text-md">
              Have Doubts Of Exposing Your Grades?
            </p>
            <p className="sliding-semi-text max-xl:text-md">
              Your grades entered are only visible to you and your tutor, no
              third party sees it.
            </p>
          </div>
        </div>
      </div>
      <LoginMin></LoginMin>
      <LoginFooter></LoginFooter>
    </>
  );
};

export default LandPage;
