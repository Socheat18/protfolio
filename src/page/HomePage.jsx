import About from "../components/About";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import Work from "../components/Work";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen container mx-auto z-0 sm:px-0 px-4">
        <Navbar />
          <Home />
          <About />
          <Skill/>
          <Work/>
        <Footer />
      </div>
    </>
  );
}
