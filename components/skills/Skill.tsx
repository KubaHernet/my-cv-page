import { motion } from "framer-motion";
import React from "react";

type Props = {
  showProficiency: boolean;
  imageSource: string;
  proficiency: string;
};

const Skill = (props: Props) => {
  const { showProficiency, imageSource, proficiency } = props;
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src={imageSource}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"
      />
      <div
        className={`absolute ${
          showProficiency
            ? "group-hover:opacity-0 opacity-70 bg-white"
            : "opacity-0 group-hover:opacity-70 group-hover:bg-white"
        } transition duration-300 ease-in-out w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0`}
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {proficiency}/5
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
