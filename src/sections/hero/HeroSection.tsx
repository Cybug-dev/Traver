import * as motion from "motion/react-m";
import HeroCollage from "./HeroCollage";
import TripSearchForm from "../../components/search/TripSearchForm";
import { useHeroMotion } from "./hero.motion";

export default function HeroSection() {
  const { introduction } = useHeroMotion();

  return (
    <section aria-labelledby="hero-heading" className="hero-reference overflow-hidden">
      <div className="landing-container hero-layout relative mx-auto grid">
        <motion.div initial="hidden" animate="visible" className="hero-copy relative z-20 min-w-0">
          <motion.p className="hero-eyebrow flex items-center gap-2 font-semibold text-accent-text" custom={0} variants={introduction}>
            <span aria-hidden="true" className="text-xl">✈️</span>
            Explore the World
            <span aria-hidden="true" className="h-px w-7 bg-accent" />
          </motion.p>

          <motion.h1 className="hero-title font-reference font-normal text-content" custom={1} id="hero-heading" variants={introduction}>
            <strong className="font-bold">Discover The</strong><br />Best Destinations<br />In The World
          </motion.h1>

          <motion.p className="hero-description text-muted" custom={2} variants={introduction}>
            Let’s find you dream destinations here we will recommend you a beautiful place and a cheap trip with your beloved family.
          </motion.p>
          <motion.div className="hero-search relative" custom={3} variants={introduction}>
            <TripSearchForm />
          </motion.div>
        </motion.div>

        <HeroCollage />
      </div>
    </section>
  );
}
