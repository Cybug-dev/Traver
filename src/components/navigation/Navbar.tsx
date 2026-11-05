import { useRef, useState, type MouseEvent } from "react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Tours", href: "#tours" },
  { label: "Blog", href: "#blog" },
];

function BrandMark() {
  return (
    <a
      aria-label="Traver home"
      className="flex shrink-0 items-center gap-1.5"
      href="#home"
    >
      <span className="grid size-6 place-items-center rounded-full bg-accent text-on-accent">
        <svg
          aria-hidden="true"
          className="size-3 stroke-accent"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d="m21 3-7.2 18-3.6-7.2L3 10.2 21 3Z" fill="currentColor" />
          <path
            d="m10.2 13.8 4.5-4.5"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
      </span>
      <span className="text-base font-bold tracking-tight text-content">
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
        className="h-nav-action w-auth-action cursor-not-allowed whitespace-nowrap rounded-control border border-accent-outline bg-canvas px-3 py-1 text-xs leading-none text-accent-text"
        disabled
        title="Sign up will be connected when the account flow is built"
        type="button"
      >
        Sign Up
      </button>
      <button
        aria-label="Login is not available yet"
        className="h-nav-action w-auth-action cursor-not-allowed whitespace-nowrap rounded-control bg-accent px-3 py-1 text-xs leading-none font-semibold text-on-accent transition-colors hover:bg-accent-hover"
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
  const [navigationMessage, setNavigationMessage] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string,
  ) {
    const targetId = href.slice(1);
    const targetExists = document.getElementById(targetId);

    if (!targetExists) {
      event.preventDefault();
      setNavigationMessage(`${label} section is coming soon.`);
    } else {
      setNavigationMessage("");
    }

    closeMenu();
  }

  return (
    <header
      className="relative z-10 bg-header-surface"
      id="home"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="relative mx-auto flex min-h-header max-w-6xl items-center justify-between gap-4 px-5 sm:px-7 md:w-5/6 md:px-2 lg:px-3">
        <BrandMark />

        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ul className="flex items-center gap-9 lg:gap-10">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="rounded-sm py-2 text-sm font-medium text-content transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring lg:text-base"
                  href={link.href}
                  onClick={(event) =>
                    handleNavigation(event, link.label, link.href)
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden md:block">
          <AuthActions />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="grid size-10 place-items-center rounded-lg text-content hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
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
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-outline bg-canvas px-4 pb-5 pt-2 shadow-floating md:hidden`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-content hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                  href={link.href}
                  onClick={(event) =>
                    handleNavigation(event, link.label, link.href)
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 border-t border-outline pt-4">
          <AuthActions />
        </div>
      </div>
      {navigationMessage && (
        <p
          aria-live="polite"
          className="absolute inset-x-4 top-full z-20 mx-auto mt-2 max-w-6xl rounded-lg bg-surface-muted px-4 py-3 text-sm text-content shadow-floating"
          role="status"
        >
          {navigationMessage}
        </p>
      )}
    </header>
  );
}
