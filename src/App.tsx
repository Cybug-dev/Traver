import { domAnimation, LazyMotion } from "motion/react";
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./sections/hero/HeroSection";

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-canvas">
        <Navbar />
        <main id="main-content">
          <HeroSection />
        </main>
      </div>
    </LazyMotion>
  );
}
