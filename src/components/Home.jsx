import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-br from-[#100E09] to-[#1C1C1C]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          Saumitra Upadhyay
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className="mr-2">I am a</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Programmer")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
          With a passion for creating captivating user experiences, Transforming
          ideas into impactful solutions through code and creativity
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold">
            View Work{" "}
            <span className="group-hover:translate-x-1 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
