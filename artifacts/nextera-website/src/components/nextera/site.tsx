import { useEffect, useState, useRef, type ReactNode } from "react";
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
                  style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", outline: "none" }}
                  onClick={() => setCurriculumOpen(!curriculumOpen)}
                >
                  Curriculum
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10H7Z" />
                  </svg>
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
  return null;
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
    href: "https://www.tiktok.com/@nexeraeducation",
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
    href: "https://www.facebook.com/nexeraeducation1",
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
  {
    name: "Discord",
    href: "https://discord.gg/GaqNzZFCWf",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
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
