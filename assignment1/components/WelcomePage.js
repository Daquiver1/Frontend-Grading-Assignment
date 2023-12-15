import React from "react";
import Image from "next/image";
import Img from "../public/landpage_img.png";
import Button from "./Button";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className="mt-9 mx-5 lg:mx-15 md:mx-12">
      <article className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="my-auto" data-aos="fade-left">
          <h1
            className="text-2xl font-bold md:text-2xl sm:xl lg:text-4xl
          ml-2 text-center mt-2 text-black"
          >
            WELCOME
          </h1>

          <p className="text-black mt-2 p-3 text-sm sm:text-base md-text-xl lg:text-xl flex justify-center items-center">
            Welcome to Result Checker , a user-friendly platform revolutionizing
            the grading experience. Our streamlined interface empowers educators
            to efficiently manage assignments, providing students with a
            transparent view of their progress. With innovative features and a
            commitment to excellence, Result Checker is reshaping grading for
            enhanced educational efficiency and accuracy. Join us on the journey
            toward excellence in education.
          </p>
          {/* button section */}
          <div className="mt-5 flex justify-center items-center cursor-pointer text-white">
            <Link
              href="/login"
              // onClick={Press}
              className="bg-blue-300 px-24 py-4 rounded-full text-base font-bold hover:bg-blue-400 cursor-pointer"
            >
              LOGIN
            </Link>
          </div>
          {/* buttion section end */}
        </div>
        <div>
          <Image
            src={Img}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
          />
        </div>
      </article>
    </section>
  );
};

export default Welcome;
