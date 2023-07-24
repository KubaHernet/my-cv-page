import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import WelcomeTypeWriter from "./WelcomeTypeWriter";
import HeroMenu from "./HeroMenu";
import JobTitle from "./JobTitle";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="z-20">
        <Image
          unoptimized
          src="/me.jpg"
          alt="me"
          width="32"
          height="32"
          className="relative rounded-full h-32 w-32 mx-auto object-cover mb-2"
        />
        <WelcomeTypeWriter />
        <JobTitle />
        <HeroMenu />
      </div>
    </div>
  );
};

export default Hero;
