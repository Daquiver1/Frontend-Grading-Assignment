import { useState } from "react";
import Header from "./pages/header";
import LoginFooter from "./pages/LoginFooter";

const LandPage = () => {
  const [showText, setShowText] = useState(false);
  const timeOut = setTimeout(() => {
    setShowText(true);
  }, 7000);
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="relative justify-start flex">
          <div className="flex justify-center flex-col gap-1 text-start ml-40">
            <p className="text-3xl font-serif text-blue-400 italic">
              Pep&apos;s Grade Report System
            </p>
            <p className="text-2xl text-blue-300 italic">
              Your grade, your future
            </p>
          </div>
        </div>
        <div className="sliding-text flex flex-col justify-center place-items-center mt-52">
          <div className="text-1">
            <p className="sliding-texts">Have Issues With Your Grade?</p>
            <p className="sliding-semi-text">
              Report at Pep&apos;s Grade Report System to get that fixed
            </p>
          </div>
          <div className="text-2">
            <p className="sliding-texts">Connect With Comfort</p>
            <p className="sliding-semi-text">
              You do not have to physically connect with them, stay in your
              comfort zone and connect
            </p>
          </div>
          <div className="text-3">
            <p className="sliding-texts">
              Have Doubts Of Exposing Your Grades?
            </p>
            <p className="sliding-semi-text">
              Your grades entered are only visible to you and your tutor, no
              third party sees it.
            </p>
          </div>
        </div>
      </div>
      <LoginFooter></LoginFooter>
    </>
  );
};

export default LandPage;
