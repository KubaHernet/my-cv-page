"use client";

import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import Skill from "./Skill";
import { motion } from "framer-motion";

const Skills = () => {
  const [showProficiencies, setShowProficiencies] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <SectionTitle>Skills</SectionTitle>
      <div>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </h3>
      </div>
      <div>
        <button
          className="heroButton mt-1 mb-5"
          onClick={() => {
            setShowProficiencies(!showProficiencies);
          }}
        >
          {showProficiencies ? "Hide all" : "Show all"}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-5">
        <Skill
          showProficiency={showProficiencies}
          imageSource="/dotnetlogo.png"
          proficiency="4.5"
        />
        <Skill
          showProficiency={showProficiencies}
          imageSource="/dotnetlogo.png"
          proficiency="4.5"
        />
        <Skill
          showProficiency={showProficiencies}
          imageSource="/dotnetlogo.png"
          proficiency="4.5"
        />
        <Skill
          showProficiency={showProficiencies}
          imageSource="/dotnetlogo.png"
          proficiency="4.5"
        />
        <Skill
          showProficiency={showProficiencies}
          imageSource="/dotnetlogo.png"
          proficiency="4.5"
        />
        <Skill
          showProficiency={showProficiencies}
          imageSource="/dotnetlogo.png"
          proficiency="4.5"
        />
        <Skill
          showProficiency={showProficiencies}
          imageSource="/dotnetlogo.png"
          proficiency="4.5"
        />
        <Skill
          showProficiency={showProficiencies}
          imageSource="/dotnetlogo.png"
          proficiency="4.5"
        />
        <Skill
          showProficiency={showProficiencies}
          imageSource="/dotnetlogo.png"
          proficiency="4.5"
        />
      </div>
    </motion.div>
  );
};

export default Skills;
