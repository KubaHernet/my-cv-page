"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const WelcomeTypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, my name is Jakub Hernet",
      "I love .NET",
      "...together with React and TS",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <h1 className="text-4xl font-semibold scroll-px-10">
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </h1>
  );
};

export default WelcomeTypeWriter;
