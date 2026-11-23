import { useState } from "react";
import { useReducedMotion, type Transition, type Variants } from "motion/react";
import { readMotionTokens } from "../../lib/motion";

export function useNavbarMotion() {
  const reducedMotion = useReducedMotion() === true;
  const [timing] = useState(readMotionTokens);

  const entrance: Variants = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : -6 },
    visible: (order: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : timing.normal,
        delay: reducedMotion ? 0 : order * timing.fast / 2,
        ease: timing.ease,
      },
    }),
  };

  // Keep the panel mounted so rapid open/close actions retarget from its
  // current position. Navbar makes the closed panel inert immediately.
  const menu: Variants = {
    closed: {
      opacity: 0,
      y: reducedMotion ? 0 : -8,
      scale: reducedMotion ? 1 : 0.98,
      transitionEnd: { visibility: "hidden" },
    },
    open: { visibility: "visible", opacity: 1, y: 0, scale: 1 },
  };

  const backdrop: Variants = {
    closed: { opacity: 0, transitionEnd: { visibility: "hidden" } },
    open: { visibility: "visible", opacity: 1 },
  };

  function menuTransition(pointerInteraction: boolean): Transition {
    return {
      duration: reducedMotion || !pointerInteraction ? 0 : timing.normal,
      ease: timing.ease,
    };
  }

  return { entrance, menu, backdrop, menuTransition };
}
