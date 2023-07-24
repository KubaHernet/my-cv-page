import About from "../components/About";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll">
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experience */}

      {/* skills */}

      {/* contact me */}
    </div>
  );
}
