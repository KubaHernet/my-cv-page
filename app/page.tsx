import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import WorkExperience from "../components/workExperience/WorkExperience";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* contact me */}
    </div>
  );
}
