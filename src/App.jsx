import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Projects from "./components/Projects";
import EducationTimeline from "./components/EducationTimeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <CompetitiveProgramming />
        <Projects />
        <EducationTimeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
