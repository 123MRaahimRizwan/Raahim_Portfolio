import "./App.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EntryScreen from "./components/EntryScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import AudioToggle from "./components/AudioToggle";
import BackToTopButton from "./components/BackToTopButton";
import CursorGlow from "./components/CursorGlow";

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CursorGlow />
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <EntryScreen key="entry" onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>

      {hasEntered && (
        <>
          <ScrollProgressBar />
          <Navbar />
          <AudioToggle />
          <BackToTopButton />

          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
