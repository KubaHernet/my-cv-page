"use client";

import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import HeroMenu from "./hero/HeroMenu";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 px-5 py-2 flex items-start  max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        className="flex flex-1 justify-start flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <HeroMenu />
      </motion.div>
      <motion.div
        className="flex flex-1 justify-center flex-row items-center"
        initial={{
          y: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Link href="#hero">
          <h2 className="font-thin text-2xl">
            Jakub<span className="font-bold">Hernet</span>
          </h2>
        </Link>
      </motion.div>
      <motion.div
        className="flex flex-1 justify-end flex-row items-center text-gray-300"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Link passHref legacyBehavior href="mailto: jakub.hernet@gmail.com">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
        </Link>
        <Link href="mailto: jakub.hernet@gmail.com">
          <span className="hidden md:inline-flex text-sm text-gray-400">
            jakub.hernet@gmail.com
          </span>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
