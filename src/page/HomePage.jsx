import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen container mx-auto z-0 sm:px-0 px-4">
        <Navbar />
          <Home />
          <About />
          <Skill/>
          <Projects/>
          <Contact/>
        <Footer />
      </div>
    </>
  );
}
