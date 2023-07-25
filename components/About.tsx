"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionTitle from "./common/SectionTitle";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <SectionTitle>About</SectionTitle>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="/me.jpg"
        alt="me"
        className="rounded-full mb-20 md:mb-0 flex-shrink-0 w-56 md:rounded-lg md:w-64 xl:w-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-blue-800">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
          nunc nec augue laoreet, quis tincidunt justo iaculis. Phasellus
          scelerisque sem vel imperdiet vehicula. In eu tellus a ligula mollis
          vulputate. Vivamus placerat erat lectus, eget gravida lacus aliquet
          sed. Fusce mollis felis facilisis odio finibus, vel congue nibh
          vehicula. Cras elit mi, sagittis nec lacus eu, posuere facilisis quam.
          Proin dapibus id orci finibus placerat.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
