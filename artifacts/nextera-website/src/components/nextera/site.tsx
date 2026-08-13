import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function Header() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('nextera-theme');
    const shouldUseDark = savedTheme === 'dark';
    setDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    const nextTheme = !dark;
    setDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    localStorage.setItem('nextera-theme', nextTheme ? 'dark' : 'light');
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} data-testid="site-header">
      <div className="container nav-container">
        <Link href="/" className="brand" data-testid="link-brand">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span className="brand-wordmark">NEXT<span>ERA</span></span>
        </Link>
        <div className="main-nav">
          <nav aria-label="Primary navigation">
            <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
              <li><Link href="/" className={`nav-link${location === '/' ? ' active' : ''}`} data-testid="link-home">Home</Link></li>
              <li><Link href="/academy" className={`nav-link${location === '/academy' ? ' active' : ''}`} data-testid="link-academy">01 Coding Academy</Link></li>
              <li><Link href="/about" className={`nav-link${location === '/about' ? ' active' : ''}`} data-testid="link-about">About Us</Link></li>
            </ul>
          </nav>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} data-testid="button-theme-toggle">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} data-testid="button-menu-toggle">
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
    document.body.classList.add('cursor-ready');
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    window.addEventListener('mousemove', move);
    const interactive = Array.from(document.querySelectorAll('a, button, input, summary, .surface-card, .legacy-list-card'));
    interactive.forEach((element) => {
      element.addEventListener('mouseenter', enter);
      element.addEventListener('mouseleave', leave);
    });
    return () => {
      document.body.classList.remove('cursor-ready');
      window.removeEventListener('mousemove', move);
      interactive.forEach((element) => {
        element.removeEventListener('mouseenter', enter);
        element.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      <span className="cursor-dot" style={{ left: position.x, top: position.y }} aria-hidden="true" />
      <span className={`cursor-outline${hovering ? ' hovering' : ''}`} style={{ left: position.x, top: position.y }} aria-hidden="true" />
    </>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button className={`back-to-top${visible ? ' visible' : ''}`} type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" data-testid="button-back-to-top">
      <ArrowUp size={18} />
    </button>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand" data-testid="link-footer-brand">
            <span className="brand-mark" aria-hidden="true">N</span>
            <span className="brand-wordmark">NEXT<span>ERA</span></span>
          </Link>
          <p>Interactive technology education that enables learners to solve problems, innovate, and prepare for tomorrow’s opportunities.</p>
        </div>
        <div>
          <h2 className="footer-header">Quick Links</h2>
          <ul className="footer-links">
            <li><Link href="/" className="footer-link" data-testid="link-footer-home">Home</Link></li>
            <li><Link href="/academy" className="footer-link" data-testid="link-footer-academy">01 Coding Academy</Link></li>
            <li><Link href="/about" className="footer-link" data-testid="link-footer-about">About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="container copyright"><p>© 2026 NextEra Education. All Rights Reserved.</p></div>
    </footer>
  );
}

export function SiteFrame({ children, loader = false }: { children: ReactNode; loader?: boolean }) {
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
    <div className={`terminal-loader${gone ? ' is-gone' : ''}`} aria-hidden={gone} data-testid="terminal-loader">
      <div className="terminal-content">
        <p className="typewriter line-1">&gt; Initializing NextEra environment...</p>
        <p className="typewriter line-2">&gt; Loading peer-to-peer modules...</p>
        <p className="typewriter line-3">&gt; Access Granted. <span className="blink">_</span></p>
      </div>
    </div>
  );
}

export function HeroActions() {
  return (
    <div className="hero-actions">
      <a href="#game" className="button" data-testid="link-start-game">Start the game <ArrowRight size={15} /></a>
      <a href="#piscine" className="button secondary" data-testid="link-apply-piscine">Apply to the next Piscine <ArrowDown size={15} /></a>
    </div>
  );
}