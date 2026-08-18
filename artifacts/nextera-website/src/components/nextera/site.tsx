import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Link, useLocation } from "wouter";

export function Header() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [curriculumOpen, setCurriculumOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("nextera-theme");
    const shouldUseDark = savedTheme === "dark";
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCurriculumOpen(false);
  }, [location]);

  const toggleTheme = () => {
    const nextTheme = !dark;
    setDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("nextera-theme", nextTheme ? "dark" : "light");
  };

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}`}
      data-testid="site-header"
    >
      <div className="container nav-container">
        <Link href="/" className="brand" data-testid="link-brand">
          <img 
            src={dark ? "/logo-dark.png" : "/logo-light.png"} 
            alt="NextEra Education" 
            style={{ height: "42px", width: "75px", minWidth: "75px", flexShrink: 0 }} 
          />
        </Link>
        <div className="main-nav">
          <nav aria-label="Primary navigation">
            <ul className={`nav-links${menuOpen ? " open" : ""}`}>
              <li>
                <Link
                  href="/"
                  className={`nav-link${location === "/" ? " active" : ""}`}
                  data-testid="link-home"
                >
                  Home
                </Link>
              </li>
              <li
                style={{ position: "relative" }}
                onMouseEnter={() => setCurriculumOpen(true)}
                onMouseLeave={() => setCurriculumOpen(false)}
              >
                <button
                  className={`nav-link${location.startsWith("/curriculum") || location === "/academy" || location === "/techverse" ? " active" : ""}`}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 16px 8px 0", position: "relative" }}
                  onClick={() => setCurriculumOpen(!curriculumOpen)}
                >
                  Curriculum
                  <ArrowDown size={14} style={{ position: "absolute", right: -4, top: "50%", transform: "translateY(-50%)" }} />
                </button>
                {curriculumOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: 8,
                      padding: "8px 0",
                      minWidth: 180,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      zIndex: 50,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Link
                      href="/academy"
                      className={`nav-link${location === "/academy" ? " active" : ""}`}
                      style={{ padding: "10px 16px", border: "none" }}
                    >
                      01 Coding Academy
                    </Link>
                    <Link
                      href="/techverse"
                      className={`nav-link${location === "/techverse" ? " active" : ""}`}
                      style={{ padding: "10px 16px", border: "none" }}
                    >
                      TechVerse
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/admissions"
                  className={`nav-link${location === "/admissions" ? " active" : ""}`}
                  data-testid="link-admissions"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`nav-link${location === "/about" ? " active" : ""}`}
                  data-testid="link-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className={`nav-link${location === "/faq" ? " active" : ""}`}
                  data-testid="link-faq"
                >
                  FAQ
                </Link>
              </li>
            <li>
                <Link
                  href="/admissions#register"
                  className="mobile-apply-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    if (window.location.pathname === '/admissions') {
                      const el = document.getElementById('register');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Apply Now
                </Link>
              </li>
            </ul>

            
          </nav>
          <Link
            href="/admissions#register"
            className="button header-apply-btn"
            style={{ padding: "6px 14px", fontSize: "0.8rem", borderRadius: 4 }}
            onClick={() => {
              if (window.location.pathname === '/admissions') {
                const el = document.getElementById('register');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Apply Now
          </Link>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            data-testid="button-theme-toggle"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    document.body.classList.add("cursor-ready");
    const move = (event: MouseEvent) =>
      setPosition({ x: event.clientX, y: event.clientY });
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    window.addEventListener("mousemove", move);
    const interactive = Array.from(
      document.querySelectorAll(
        "a, button, input, summary, .surface-card, .legacy-list-card",
      ),
    );
    interactive.forEach((element) => {
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    });
    return () => {
      document.body.classList.remove("cursor-ready");
      window.removeEventListener("mousemove", move);
      interactive.forEach((element) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <span
        className="cursor-dot"
        style={{ left: position.x, top: position.y }}
        aria-hidden="true"
      />
      <span
        className={`cursor-outline${hovering ? " hovering" : ""}`}
        style={{ left: position.x, top: position.y }}
        aria-hidden="true"
      />
    </>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`back-to-top${visible ? " visible" : ""}`}
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      data-testid="button-back-to-top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nexeraeducation/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@nexteraeducation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-3.04-1.52z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nexera-education/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nexteraeducation1",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="site-footer" data-testid="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand" data-testid="link-footer-brand">
            <img src="/logo-dark.png" alt="NextEra Education" style={{ height: "42px", width: "75px", minWidth: "75px", flexShrink: 0 }} />
          </Link>
          <p>
            Interactive technology education that enables learners to solve
            problems, innovate, and prepare for tomorrow’s opportunities.
          </p>
          <a
            href="https://maps.app.goo.gl/yhgoJV2ywdgwsJU76"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
            data-testid="link-footer-address"
          >
            <span className="address-pin" aria-hidden="true">
              📍
            </span>
            <span>
              Mobica Building, 3rd Floor, 3 El-Montaza, El-Nozha, Cairo
              Governorate 11373, Egypt.
            </span>
          </a>
        </div>

        <div>
          <h2 className="footer-header">Quick Links</h2>
          <ul className="footer-links">
            <li>
              <Link
                href="/"
                className="footer-link"
                data-testid="link-footer-home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/academy"
                className="footer-link"
                data-testid="link-footer-academy"
              >
                01 Coding Academy
              </Link>
            </li>
            <li>
              <Link
                href="/techverse"
                className="footer-link"
                data-testid="link-footer-traverse"
              >
                Traverse Program
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="footer-link"
                data-testid="link-footer-about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="footer-link"
                data-testid="link-footer-faq"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-header">Follow Us</h2>
          <ul className="footer-social-list">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  data-testid={`link-social-${item.name.toLowerCase()}`}
                  aria-label={`NextEra on ${item.name}`}
                >
                  <span className="footer-social-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container copyright">
        <p>© 2026 NextEra Education. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export function SiteFrame({
  children,
  loader = false,
}: {
  children: ReactNode;
  loader?: boolean;
}) {
  return (
    <div className="site-shell">
      <Header />
      <Cursor />
      {loader ? <TerminalLoader /> : null}
      {children}
      <BackToTop />
      <Footer />
    </div>
  );
}

function TerminalLoader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setGone(true), 2600);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <div
      className={`terminal-loader${gone ? " is-gone" : ""}`}
      aria-hidden={gone}
      data-testid="terminal-loader"
    >
      <div className="terminal-content">
        <p className="typewriter line-1">
          &gt; Initializing NextEra environment...
        </p>
        <p className="typewriter line-2">
          &gt; Loading peer-to-peer modules...
        </p>
        <p className="typewriter line-3">
          &gt; Access Granted. <span className="blink">_</span>
        </p>
      </div>
    </div>
  );
}

export function HeroActions() {
  return (
    <div className="hero-actions">
      <Link href="#game" className="button" data-testid="link-start-game">
        Start the game <ArrowRight size={15} />
      </Link>
      <Link
        href="/admissions#register"
        className="button secondary"
        data-testid="link-apply-piscine"
        onClick={() => {
          if (window.location.pathname === '/admissions') {
            const el = document.getElementById('register');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        Apply to the next Piscine <ArrowDown size={15} />
      </Link>
    </div>
  );
}
