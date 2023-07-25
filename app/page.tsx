import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import WorkExperience from "../components/WorkExperience/WorkExperience";

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

      {/* skills */}

      {/* contact me */}
    </div>
  );
}
