import { useEffect, useRef, useState, type MouseEvent } from "react";
import * as motion from "motion/react-m";
import { useNavbarMotion } from "./navbar.motion";

const navigationLinks = [
  { label: "Home", href: "#home", available: true, icon: "m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" },
  { label: "About", href: "#about", available: false, icon: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 8h.01M11 12h1v4h1" },
  { label: "Destinations", href: "#destinations", available: false, icon: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" },
  { label: "Tours", href: "#tours", available: false, icon: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM16 8l-3 5-5 3 3-5Z" },
  { label: "Blog", href: "#blog", available: false, icon: "M12 5v16M3 4h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z" },
];

function BrandMark() {
  return (
    <a
      aria-label="Traver home"
      className="flex min-h-11 shrink-0 items-center gap-1.5"
      href="#home"
    >
      <span className="navbar-brand-mark grid place-items-center rounded-full bg-accent text-on-accent">
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d="m3 11 3 1 5-2-4-5 2-1 7 4 3-1c3-1 4 2 1 3L8 15l-4-1-1-3Z" fill="currentColor" />
          <path
            d="M4 19h16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
      </span>
      <span className="navbar-brand-name font-bold tracking-tight text-content">
        Traver
      </span>
    </a>
  );
}

function AuthActions() {
  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Sign up is not available yet"
        className="navbar-auth-action reference-auth-label h-nav-action w-auth-action cursor-not-allowed whitespace-nowrap rounded-control border border-accent-outline bg-transparent px-3 py-1 leading-none font-semibold text-accent-text"
        disabled
        title="Sign up will be connected when the account flow is built"
        type="button"
      >
        Sign Up
      </button>
      <button
        aria-label="Login is not available yet"
        className="navbar-auth-action reference-auth-label h-nav-action w-auth-action cursor-not-allowed whitespace-nowrap rounded-control bg-accent px-3 py-1 leading-none font-semibold text-on-accent transition-colors enabled:hover:bg-accent-hover"
        disabled
        title="Login will be connected when the account flow is built"
        type="button"
      >
        Login
      </button>
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pointerMenuMotion, setPointerMenuMotion] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { entrance, menu, backdrop, menuTransition } = useNavbarMotion();

  useEffect(() => {
    if (!isMenuOpen) return;

    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setPointerMenuMotion(true);
        setIsMenuOpen(false);
      }
    }

    const desktop = window.matchMedia("(min-width: 48rem)");
    function dismissOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        setPointerMenuMotion(false);
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", dismissOutside);
    desktop.addEventListener("change", dismissOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      desktop.removeEventListener("change", dismissOnDesktop);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    available: boolean,
  ) {
    const targetId = href.slice(1);
    const targetExists = document.getElementById(targetId);

    if (!available || !targetExists) {
      event.preventDefault();
      return;
    }

    setPointerMenuMotion(event.detail !== 0);
    closeMenu();
  }

  return (
    <header
      className="sticky top-0 z-50 bg-header-surface"
      id="home"
      ref={headerRef}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setPointerMenuMotion(false);
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <motion.div
        animate="visible"
        className="landing-container reference-header relative z-20 mx-auto flex items-center justify-between gap-4"
        initial="hidden"
      >
        <motion.div custom={0} variants={entrance}>
          <BrandMark />
        </motion.div>

        <motion.nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          custom={1}
          variants={entrance}
        >
          <ul className="navbar-links flex items-center">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  aria-disabled={!link.available || undefined}
                  className="reference-nav-link relative flex min-h-11 items-center rounded-sm font-medium text-content transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring aria-disabled:cursor-default aria-disabled:text-secondary"
                  href={link.available ? link.href : undefined}
                  role={link.available ? undefined : "link"}
                  tabIndex={link.available ? undefined : -1}
                  onClick={(event) =>
                    handleNavigation(event, link.href, link.available)
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div className="ml-auto hidden md:block" custom={2} variants={entrance}>
          <AuthActions />
        </motion.div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="grid size-11 place-items-center rounded-control border border-outline bg-canvas text-content hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring md:hidden"
          onClick={(event) => {
            setPointerMenuMotion(event.detail !== 0);
            setIsMenuOpen((open) => !open);
          }}
          ref={menuButtonRef}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            )}
          </svg>
        </button>
      </motion.div>

      <motion.button
        animate={isMenuOpen ? "open" : "closed"}
        aria-hidden={!isMenuOpen}
        aria-label="Dismiss navigation menu"
        className={`${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"} fixed inset-x-0 bottom-0 top-header z-0 bg-canvas/60 backdrop-blur-sm md:hidden`}
        inert={!isMenuOpen}
        initial={false}
        onClick={() => {
          setPointerMenuMotion(true);
          closeMenu();
          menuButtonRef.current?.focus();
        }}
        tabIndex={-1}
        transition={menuTransition(pointerMenuMotion)}
        type="button"
        variants={backdrop}
      />

      <motion.div
        animate={isMenuOpen ? "open" : "closed"}
        aria-hidden={!isMenuOpen}
        className={`${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"} navbar-mobile-panel absolute inset-x-5 top-full z-10 mt-2 origin-top-right overflow-y-auto overscroll-contain rounded-3xl border border-outline bg-canvas p-3 shadow-floating md:hidden`}
        id="mobile-navigation"
        inert={!isMenuOpen}
        initial={false}
        transition={menuTransition(pointerMenuMotion)}
        variants={menu}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  aria-current={link.href === "#home" ? "page" : undefined}
                  aria-disabled={!link.available || undefined}
                  className={`flex min-h-14 items-center gap-3 rounded-control px-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${link.available ? "bg-peach text-accent-text" : "cursor-default text-secondary"}`}
                  href={link.available ? link.href : undefined}
                  role={link.available ? undefined : "link"}
                  tabIndex={link.available ? undefined : -1}
                  onClick={(event) =>
                    handleNavigation(event, link.href, link.available)
                  }
                >
                  <span className={`grid size-9 shrink-0 place-items-center rounded-control ${link.available ? "bg-canvas/70" : "bg-surface-muted"}`}>
                    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={link.icon} /></svg>
                  </span>
                  <span className="flex-1">{link.label}</span>
                  {link.available && <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar-mobile-actions mt-3 rounded-control bg-surface-muted p-4">
          <p className="mb-3 text-xs font-medium text-secondary">Your account</p>
          <AuthActions />
        </div>
      </motion.div>
    </header>
  );
}
