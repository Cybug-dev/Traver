import * as motion from "motion/react-m";
import TravelImage from "../../components/ui/TravelImage";
import { useHeroMotion } from "./hero.motion";

// Real photographs from Pexels, downloaded locally under the Pexels license.
// Source photo IDs: 30319553 (balloon), 8473829 (boardwalk),
// 9482122 (tropical palms), 30479703 (mountain hiker).
const photographs = [
  {
    src: "/images/hero/balloon-landscape.webp",
    alt: "A hot-air balloon above the rocky landscape of Cappadocia",
    position: "left-photo-inset top-0 h-photo-tall w-photo-narrow",
  },
  {
    src: "/images/hero/overwater-boardwalk.webp",
    alt: "A wooden boardwalk leading to overwater bungalows in the Maldives",
    position: "hero-photo-edge left-photo-column top-photo-offset h-photo-tall w-photo-wide",
  },
  {
    src: "/images/hero/tropical-resort.webp",
    alt: "A palm-lined boardwalk opening onto a tropical beach",
    position: "left-0 top-photo-lower h-photo-short w-photo-wide",
  },
  {
    src: "/images/hero/mountain-hiker.webp",
    alt: "A hiker in a yellow jacket on a rocky mountain summit",
    position: "left-photo-column top-photo-last h-photo-tall w-photo-narrow",
  },
];

export default function HeroCollage() {
  const { photograph, badge } = useHeroMotion();

  return (
    <motion.div
      className="hero-collage relative min-w-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {photographs.map((photo, index) => (
        <motion.div
          className={`absolute min-h-0 min-w-0 overflow-hidden rounded-3xl ${photo.position}`}
          custom={index}
          key={photo.src}
          variants={photograph}
        >
          <TravelImage alt={photo.alt} loading="eager" priority={index === 0} src={photo.src} />
        </motion.div>
      ))}

      <motion.div
        className="hero-destination-badge absolute z-10 flex flex-col items-center justify-center rounded-2xl border border-white/40 bg-glass-warm px-2 text-center backdrop-blur-xl"
        custom={0}
        variants={badge}
      >
        <p className="hero-badge-title font-bold text-content">100+ Destinations</p>
        <p className="hero-badge-body mt-1 text-secondary">More than 100<br />Travelers use this<br />platform</p>
      </motion.div>

      <motion.div
        className="hero-verification-badge absolute z-10 flex flex-col items-center justify-center rounded-2xl border border-white/40 bg-glass-white text-center backdrop-blur-xl"
        custom={1}
        variants={badge}
      >
        <p className="hero-badge-title font-bold text-content">100%</p>
        <p className="hero-badge-body mt-1 text-secondary">Verified</p>
      </motion.div>
    </motion.div>
  );
}
