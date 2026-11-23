import { useState } from "react";
import { useReducedMotion, type Variants } from "motion/react";

// Read existing theme timings once; Motion expects seconds, CSS uses ms.
function readMotionTokens() {
  const styles = getComputedStyle(document.documentElement);
  const seconds = (name: string) =>
    Number.parseFloat(styles.getPropertyValue(name)) / 1000;
  const curve = styles.getPropertyValue("--ease-standard").match(/[\d.]+/g);

  return {
    fast: seconds("--duration-fast"),
    normal: seconds("--duration-normal"),
    slow: seconds("--duration-slow"),
    ease: (curve?.map(Number) ?? [0.2, 0, 0, 1]) as [number, number, number, number],
  };
}

// Choreography belongs here; the components only attach these variants.
export function useHeroMotion() {
  const reduceMotion = useReducedMotion();
  const [timing] = useState(readMotionTokens);
  const reduced = reduceMotion === true;
  const spring = { type: "spring" as const, duration: 0.5, bounce: 0.2 };
  const fade = { duration: timing.normal, ease: timing.ease };

  const introduction: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    visible: (order: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        ...fade,
        duration: reduced ? 0 : timing.slow * 2,
        delay: reduced ? 0 : order * timing.fast,
      },
    }),
  };

  const photograph: Variants = {
    hidden: (order: number) => ({
      opacity: reduced ? 1 : 0,
      x: reduced ? 0 : order % 2 === 0 ? -16 : 16,
      y: reduced ? 0 : 32,
      scale: reduced ? 1 : 0.96,
      rotate: reduced ? 0 : order % 2 === 0 ? -2 : 2,
    }),
    visible: (order: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        ...(reduced ? { duration: 0 } : spring),
        delay: reduced ? 0 : timing.normal + order * timing.fast,
        opacity: reduced ? { duration: 0 } : fade,
      },
    }),
  };

  const badge: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 12, scale: reduced ? 1 : 0.96 },
    visible: (order: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ...(reduced ? { duration: 0 } : spring),
        delay: reduced ? 0 : timing.slow * 2 + order * timing.fast,
      },
    }),
  };

  // The search panel participates in the text sequence as item 3.
  return { introduction, photograph, badge };
}
