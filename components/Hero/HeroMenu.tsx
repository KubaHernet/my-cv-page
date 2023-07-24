import React from "react";
import HeroButton from "./HeroButton";

const HeroMenu = () => (
  <div>
    <HeroButton href="#about">About</HeroButton>
    <HeroButton href="#experience">Experience</HeroButton>
    <HeroButton href="#skills">Skills</HeroButton>
    <HeroButton href="#projects">Projects</HeroButton>
  </div>
);

export default HeroMenu;
