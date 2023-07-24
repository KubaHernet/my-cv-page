"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, My Name Is Jakub Hernet",
      "I love .NET",
      "...together with React and TS",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        unoptimized
        src="/me.jpg"
        alt="me"
        width="32"
        height="32"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
