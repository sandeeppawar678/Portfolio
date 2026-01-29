import About from "./components/About";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Skills from "./components/Skills";
import Particles from './Particles';

export default function App() {
  return (
    <div className="overflow-x-hidden  text-neutral-300 antialiased min-h-screen">

      {/* FIXED BACKGROUND PARTICLES */}
      <Particles
        className="fixed inset-0 w-full h-full -z-10"
        particleColors={['#06bdf5ff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <NavBar />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        {/* <Certification /> */}
        <Contact />
        <ScrollToTopButton />
      </div>
    </div>
  );
}
