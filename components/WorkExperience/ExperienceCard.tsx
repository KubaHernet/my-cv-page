import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[500px] xl:w-[900px] snap-center bg-gray-800 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full xl:w-[200px] object-cover object-center"
        src="/googlelogo.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Full-stack developer</h4>
        <p className="font-bold text-2xl mt-1">emagine</p>
        <div className="flex space-x-2 my-2">
          <Image
            unoptimized
            height={10}
            width={10}
            className="h-10 w-10 rounded-full"
            src="/dotnetlogo.png"
            alt="dotnet"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started - Ended</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary point</li>
          <li>summary point</li>
          <li>summary point</li>
          <li>summary point</li>
          <li>summary point</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
