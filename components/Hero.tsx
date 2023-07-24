"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

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
      <div className="z-20">
        <Image
          unoptimized
          src="/me.jpg"
          alt="me"
          width="32"
          height="32"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Full-Stack Software Engineer
        </h2>
        <h1 className="text-5xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
