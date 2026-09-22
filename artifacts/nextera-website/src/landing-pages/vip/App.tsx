import { useEffect, useState } from 'react';
import { useForm, type UseFormRegister } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import {
  ArrowDownRight, ArrowUpRight, ArrowUp, Check, Menu, ShieldCheck, X, MapPin, Instagram,
  Linkedin, Facebook, Music2, CircleCheck, Globe, Sun, Moon, Terminal, Network, Server, Cpu
, Users , GitMerge , Code } from 'lucide-react';
const logoPath = '/vip/nextera-logo.png';
import './index.css';
import { translations, type Language } from './translations';

function CircuitGraphic({ variant = 1 }: { variant?: 1 | 2 | 3 }) {
  return (
    <div className="circuit-container">
      <svg className="circuit-svg" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="traceGradient" x1="0" y1="0" x2="1000" y2="400">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {variant === 1 && (
          <>
            <g stroke="hsl(var(--primary))" strokeOpacity="0.15" strokeWidth="1" fill="none">
              <path d="M -100,100 L 200,100 L 250,150 L 500,150 L 550,100 L 1100,100" />
              <path d="M 100,-50 L 100,200 L 150,250 L 400,250 L 450,300 L 450,450" />
              <path d="M -50,300 L 150,300 L 200,350 L 800,350 L 850,300 L 1100,300" />
              <circle cx="250" cy="150" r="3" fill="hsl(var(--primary))" fillOpacity="0.3" />
              <circle cx="500" cy="150" r="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
              <circle cx="150" cy="250" r="3" fill="hsl(var(--primary))" fillOpacity="0.3" />
              <circle cx="800" cy="350" r="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
            </g>
            <g stroke="url(#traceGradient)" strokeWidth="2" fill="none" filter="url(#glow)">
              <path className="data-flow flow-1" d="M -100,100 L 200,100 L 250,150 L 500,150 L 550,100 L 1100,100" />
              <path className="data-flow flow-3" d="M -50,300 L 150,300 L 200,350 L 800,350 L 850,300 L 1100,300" />
            </g>
          </>
        )}
        
        {variant === 2 && (
          <>
            <g stroke="hsl(var(--primary))" strokeOpacity="0.15" strokeWidth="1" fill="none">
              <path d="M 1100,50 L 800,50 L 750,100 L 400,100 L 350,150 L -100,150" />
              <path d="M 900,-50 L 900,200 L 850,250 L 600,250 L 550,300 L 550,450" />
              <path d="M 1100,350 L 700,350 L 650,300 L 200,300 L 150,250 L -100,250" />
              <circle cx="750" cy="100" r="3" fill="hsl(var(--primary))" fillOpacity="0.3" />
              <circle cx="400" cy="100" r="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
              <circle cx="850" cy="250" r="3" fill="hsl(var(--primary))" fillOpacity="0.3" />
            </g>
            <g stroke="url(#traceGradient)" strokeWidth="2" fill="none" filter="url(#glow)">
              <path className="data-flow flow-2" d="M 1100,50 L 800,50 L 750,100 L 400,100 L 350,150 L -100,150" />
              <path className="data-flow flow-1" d="M 1100,350 L 700,350 L 650,300 L 200,300 L 150,250 L -100,250" />
            </g>
          </>
        )}

        {variant === 3 && (
          <>
            <g stroke="hsl(var(--primary))" strokeOpacity="0.15" strokeWidth="1" fill="none">
              <path d="M 500,-50 L 500,150 L 450,200 L 200,200 L 150,250 L 150,450" />
              <path d="M 700,450 L 700,250 L 750,200 L 900,200 L 950,150 L 950,-50" />
              <path d="M -100,50 L 300,50 L 350,100 L 650,100 L 700,50 L 1100,50" />
              <path d="M -100,350 L 300,350 L 350,300 L 650,300 L 700,350 L 1100,350" />
              <circle cx="450" cy="200" r="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
              <circle cx="750" cy="200" r="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
              <circle cx="350" cy="100" r="3" fill="hsl(var(--primary))" fillOpacity="0.3" />
            </g>
            <g stroke="url(#traceGradient)" strokeWidth="2" fill="none" filter="url(#glow)">
              <path className="data-flow flow-3" d="M 500,-50 L 500,150 L 450,200 L 200,200 L 150,250 L 150,450" />
              <path className="data-flow flow-2" d="M -100,350 L 300,350 L 350,300 L 650,300 L 700,350 L 1100,350" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}

function SectionHeading({ kicker, title, intro, orange = false }: { kicker: string; title: string; intro?: string; orange?: boolean }) {
  return <div className="section-head"><div><div className={`kicker ${orange ? 'orange' : ''}`}>{kicker}</div><h2>{title}</h2></div>{intro && <p className="section-intro">{intro}</p>}</div>;
}

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] as const } } };


function MiniGame({ t }: { t: any }) {
  const [gameState, setGameState] = useState<'idle' | 'showing' | 'playing' | 'won' | 'lost'>('idle');
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerStep, setPlayerStep] = useState(0);
  const [activeSquare, setActiveSquare] = useState<number | null>(null);

  const startGame = () => {
    const newSeq = Array.from({length: 4}, () => Math.floor(Math.random() * 9));
    setSequence(newSeq);
    setGameState('showing');
    setPlayerStep(0);
    
    // Play sequence
    let i = 0;
    const interval = setInterval(() => {
      if (i < newSeq.length) {
        setActiveSquare(newSeq[i]);
        setTimeout(() => setActiveSquare(null), 500);
        i++;
      } else {
        clearInterval(interval);
        setGameState('playing');
      }
    }, 800);
  };

  const handleSquareClick = (index: number) => {
    if (gameState !== 'playing') return;
    
    if (index === sequence[playerStep]) {
      // Correct
      if (playerStep === sequence.length - 1) {
        setGameState('won');
      } else {
        setPlayerStep(prev => prev + 1);
      }
    } else {
      // Wrong
      setGameState('lost');
    }
  };

  return (
    <div className="minigame-container" style={{ background: 'hsl(var(--card))', padding: '40px', borderRadius: '16px', border: '1px solid hsl(var(--border))', maxWidth: '400px', margin: '40px auto', textAlign: 'center' }}>
      <div className="grid-3x3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <button 
            key={i} 
            onClick={() => handleSquareClick(i)}
            style={{ 
              aspectRatio: '1/1', 
              borderRadius: '8px',
              border: 'none',
              background: activeSquare === i ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
              cursor: gameState === 'playing' ? 'pointer' : 'default',
              transition: 'background 0.2s'
            }}
          />
        ))}
      </div>
      
      <div style={{ minHeight: '60px' }}>
        {gameState === 'idle' && <button className="btn" onClick={startGame}>{t.start}</button>}
        {gameState === 'showing' && <p style={{ color: 'hsl(var(--primary))' }}>{t.memorize}</p>}
        {gameState === 'playing' && <p>{t.yourTurn}</p>}
        {gameState === 'won' && <p style={{ color: '#4ade80', fontWeight: 'bold' }}>{t.win}</p>}
        {gameState === 'lost' && (
          <div>
            <p style={{ color: '#f87171', fontWeight: 'bold', marginBottom: '10px' }}>{t.lose}</p>
            <button className="btn outline" onClick={startGame}>{t.start}</button>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const t = translations[lang];

  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
    const [showOfferPopup, setShowOfferPopup] = useState(true);

  
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); }), { rootMargin: '-22% 0px -65% 0px' });
    ['pedagogy', 'journey', 'skilltree', 'admissions', 'piscine', 'partners'].forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  const navItems = [
    ['admissions', t.nav.admissions],
    ['piscine', t.nav.piscine],
    
    ['skilltree', t.nav.skilltree], ['pedagogy', t.nav.pedagogy],
    ['partners', t.nav.partners],
  ];

  const coreNodes = t.treeNodes.slice(0, 5);
  const specialNodes = t.treeNodes.slice(6);
  const [selectedTrackId, setSelectedTrackId] = useState(specialNodes[0].id);
  const selectedTrack = specialNodes.find(n => n.id === selectedTrackId) || specialNodes[0];

  // Form Schema
  const applicationSchema = z.object({
  fullName: z.string().trim().min(5, 'Please enter your full name (first and last name)').max(100, 'Name is too long').regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, 'Name should only contain letters'), 
  email: z.string().trim().toLowerCase().email('Please enter a valid email address'),
  phone: z.string().trim().regex(/^(010|011|012|015)\d{8}$/, 'Please enter a valid 11-digit Egyptian mobile number'),
  city: z.string().trim().min(2, 'Enter a valid city name').max(50, 'City name is too long'),
  age: z.coerce.number({ invalid_type_error: 'Age must be a number' }).int('Age must be a whole number').min(10, 'Must be at least 10 years old').max(100, 'Please enter a valid age'),
  status: z.string().trim().min(1, 'Please select your current status'),
  selectedTracks: z.array(z.string()).optional(),
});
  type ApplicationForm = z.infer<typeof applicationSchema>;
  
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ApplicationForm>({ resolver: zodResolver(applicationSchema), defaultValues: { fullName: '', age: '' as any, email: '', phone: '', city: '', status: '', selectedTracks: [] } });
  const { register, handleSubmit, formState: { errors, isSubmitting } } = form;
  
  const onSubmit = async (data: ApplicationForm) => {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbyQunxTLpktloiG0oeYCmfbhyBAw_BEAD6AwAvAxTc9oZM3arTH0b99Di3VevfEocD7/exec';
      
      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        age: data.age,
        city: data.city,
        status: data.status,
        tracks: (data.selectedTracks || []).join(', ')
      };

      try {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
      } catch (e) { 
        console.error(e); 
      }
      
      setSubmitted(true);
    };

  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activePiscineWeek, setActivePiscineWeek] = useState(0);

  const partners = [
    { name: "Nok", fullName: "Nok Human Capital", url: "https://nokhc.net/", logo: "/vip/partners/nok.png", className: "logo-nok" },
    { name: "Gramian", fullName: "Gramian Consultancy Group", url: "https://gramianconsulting.com/", logo: "/vip/partners/gramian.png", className: "logo-gramian" },
    { name: "HiRemoters", fullName: "HiRemoters", url: "https://hiremoters.ai/", logo: "/vip/partners/hiremoters.png", className: "logo-hiremoters" },
    { name: "Quantum", fullName: "Quantum HR", url: "https://quantumhr.co/", logo: "/vip/partners/quantum.png", className: "logo-quantum" },
    { name: "Magnet", fullName: "Magnet Empowering Organizations", url: "https://b-magnet.com/", logo: "/vip/partners/magnet.png", className: "logo-magnet" },
  ];

  return (
    <div className="site-shell">
        <AnimatePresence>
          {showOfferPopup && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'hsl(var(--background) / 0.8)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
              onClick={() => setShowOfferPopup(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '24px', padding: '40px', maxWidth: '500px', width: '100%', textAlign: 'center', position: 'relative', boxShadow: '0 30px 60px -15px hsl(var(--primary) / 0.2)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setShowOfferPopup(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: 'hsl(var(--muted-foreground))', cursor: 'pointer' }}>
                  <X size={24} />
                </button>
                <div style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '999px', background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.15em', marginBottom: '24px', border: '1px solid hsl(var(--primary) / 0.3)' }}>
                  {lang === 'en' ? 'STRATEGIC PARTNERSHIP' : 'شراكة استراتيجية'}
                </div>
                <h2 style={{ fontSize: '32px', fontFamily: 'var(--app-font-serif)', margin: '0 0 16px', color: 'hsl(var(--foreground))' }}>
                  NextEra <span style={{ fontWeight: 300, color: 'hsl(var(--muted-foreground))' }}>×</span> BM VIP
                </h2>
                <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                  {lang === 'en' ? 'Empowering the next generation of tech leaders. We have partnered with Banque Misr to make world-class education more accessible to everyone.' : 'تمكين الجيل القادم من قادة التكنولوجيا. لقد دخلنا في شراكة مع Banque Misr لجعل التعليم ذي المستوى العالمي متاحاً للجميع.'}
                </p>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', padding: '2px', borderRadius: '20px' }}>
                  <div style={{ background: 'hsl(var(--background))', padding: '20px 30px', borderRadius: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px', textAlign: 'center' }}>{lang === 'en' ? '1 Week' : 'أسبوع واحد'}</span>
                    <span style={{ fontSize: '14px', color: 'hsl(var(--foreground))', fontWeight: 600 }}>{lang === 'en' ? 'Free Trial for Customers' : 'تجربة مجانية للعملاء'}</span>
                  </div>
                </div>
                <div style={{ marginTop: '32px' }}>
                  <button className="button-primary" onClick={() => { setShowOfferPopup(false); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ width: '100%' }}>
                    {lang === 'en' ? 'Apply Now' : 'قدم الآن'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      <div className="noise" />
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
          <div style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', textAlign: 'center', padding: '10px 20px', fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}>
            <a href="#partnership" style={{ display: 'block', textUnderlineOffset: '4px' }}>
              {lang === 'ar' ? 'عرض حصري: فترة تجريبية مجانية لمدة أسبوع لعملاء BM VIP!' : 'Exclusive Offer: One Week Free Trial for BM VIP Customers!'}
            </a>
          </div>
        <div className="wrap nav-inner">
          <a href="#top" className="logo" data-testid="link-logo">
            <img src={theme === 'light' ? '/vip/logo-light.png' : logoPath} alt="NextEra Education" />
            <span className="logo-mark">01 CODING ACADEMY</span>
          </a>
          <div className="nav-links">
            {navItems.map(([id, label]) => <a href={`#${id}`} className={activeSection === id ? 'active' : ''} key={id}>{label}</a>)}
          </div>
          <div className="nav-actions">
            <button className="lang-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            
            <a href="#apply" className="nav-cta" data-testid="link-nav-apply">{t.nav.apply}</a>
            <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {mobileOpen && <div className="mobile-nav">{navItems.map(([id, label]) => <a href={`#${id}`} onClick={() => setMobileOpen(false)} key={id}>{label}</a>)}</div>}
      </nav>

      <main>
        {/* HERO */}
        <header className="hero" id="top">
          <div className="wrap hero-grid">
            <motion.div initial="hidden" animate="visible" variants={reveal}>
              <div className="eyebrow"><span className="pulse" /> {t.hero.eyebrow}</div>
              <h1>
                {t.hero.title.split(t.hero.titleHighlight).map((part, i, arr) => 
                  <>{part}{i < arr.length - 1 && <span className="highlight-text">{t.hero.titleHighlight}</span>}</>
                )}
              </h1>
              <p className="lede">{t.hero.lede}</p>
              <div className="hero-actions">
                <a className="button-primary" href="#apply">{t.hero.startApp} <ArrowUpRight size={15} /></a>
                <a className="button-secondary" href="#skilltree">{t.hero.exploreTree} <ArrowDownRight size={15} /></a>
              </div>
              <div className="hero-tags">{t.hero.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .18, duration: .8 }}>
              <div className="profile-card">
                <div className="profile-head"><span>{t.hero.profile.label}</span><span>{t.hero.profile.cohort}</span></div>
                <div className="avatar-row"><div className="avatar-ring" /><div><div className="profile-name">{t.hero.profile.name}</div><div className="profile-role">{t.hero.profile.role}</div></div></div>
                <div className="xp-row"><div className="xp-labels"><span>XP</span><span>1,240 / 4,000</span></div><div className="track"><motion.div className="fill" initial={{ scaleX: 0 }} animate={{ scaleX: .31 }} transition={{ delay: .5, duration: 1.2 }} style={{ width: '100%' }} /></div></div>
                <div className="stat-bars">
                  {[['Logic', .82], ['Resilience', .68], ['Collaboration', .75]].map(([label, value]) => <div className="stat-line" key={label as string}><span>{label as string}</span><div className="track"><motion.div className="fill" initial={{ scaleX: 0 }} animate={{ scaleX: value as number }} transition={{ delay: .65, duration: .9 }} style={{ width: '100%', transformOrigin: lang === 'ar' ? 'right' : 'left' }} /></div></div>)}
                </div>
                <div className="chips"><span className="chip live">Go</span><span className="chip live">Git</span><span className="chip live">Unix</span><span className="chip">Rust</span><span className="chip">Specialization</span></div>
              </div>
            </motion.div>
          </div>
        </header>


          {/* BANQUE MISR PARTNERSHIP (ORIGINAL GLOWING CARD) */}
          <section className="section" id="partnership" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '300px', background: 'hsl(var(--primary) / 0.12)', filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }} />
            
            <div className="wrap">
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.98 }} 
                whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  position: 'relative', 
                  padding: '60px 30px', 
                  borderRadius: '24px', 
                  background: 'linear-gradient(145deg, hsl(var(--card) / 0.9), hsl(var(--background) / 0.4))', 
                  border: '1px solid hsl(var(--primary) / 0.25)', 
                  boxShadow: '0 30px 60px -15px hsl(var(--primary) / 0.15)', 
                  overflow: 'hidden',
                  textAlign: 'center',
                  maxWidth: '900px',
                  margin: '0 auto'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)' }} />
                
                <div style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '999px', background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.15em', marginBottom: '24px', border: '1px solid hsl(var(--primary) / 0.3)' }}>
                  {lang === 'en' ? 'STRATEGIC PARTNERSHIP' : 'شراكة استراتيجية'}
                </div>

                <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--app-font-serif)', margin: '0 auto 18px', lineHeight: 1.1, color: 'hsl(var(--foreground))', textAlign: 'center', maxWidth: 'none' }}>
                  NextEra <span style={{ fontWeight: 300, color: 'hsl(var(--muted-foreground))' }}>×</span> BM VIP
                </h2>
                
                <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                  {lang === 'en' ? 'Empowering the next generation of tech leaders. We have partnered with Banque Misr to make world-class education more accessible to everyone.' : 'تمكين الجيل القادم من قادة التكنولوجيا. لقد دخلنا في شراكة مع بنك مصر لجعل التعليم ذي المستوى العالمي متاحاً للجميع.'}
                </p>

                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', padding: '2px', borderRadius: '20px', boxShadow: '0 10px 30px hsl(var(--primary) / 0.2)' }}>
                  <div style={{ background: 'hsl(var(--background))', padding: '24px 40px', borderRadius: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '56px', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px', letterSpacing: '-0.02em', textAlign: 'center' }}>{lang === 'en' ? '1 Week' : 'أسبوع واحد'}</span>
                  <span style={{ fontSize: '15px', color: 'hsl(var(--foreground))', fontWeight: 600, letterSpacing: '0.02em' }}>{lang === 'en' ? 'Free Trial for Customers' : 'تجربة مجانية للعملاء'}</span>
                </div>
              </div>
              <div style={{ marginTop: '32px' }}>
                <a href="#apply" className="button-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {lang === 'en' ? 'Start Your Free Trial' : 'ابدأ تجربتك المجانية'}
                  <ArrowDownRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

  {/* ADMISSIONS */}
        <section className="section" id="admissions">
  <CircuitGraphic variant={1} />
  <div className="wrap">
            <SectionHeading kicker={t.admissions.kicker} title={t.admissions.title} intro={t.admissions.intro} />
                        
            <div className="steps">
              {t.admissions.steps.map(step => (
                <div className="step" key={step.num}>
                  <div className="step-num">{step.num}</div>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

<section className="section alt" id="piscine">
          <div className="wrap">
            <SectionHeading kicker={t.piscine.kicker} title={t.piscine.title} intro={t.piscine.intro} orange />
            <div className="piscine-stats">
              {t.piscine.stats.map(stat => <div className="piscine-stat" key={stat.value}><strong>{stat.value}</strong><span>{stat.text}</span></div>)}
            </div>
            <div className="piscine-cols">
              <div className="piscine-col">
                <h3 className="do">{t.piscine.expect}</h3>
                <ul className="plus-list">{t.piscine.expectItems.map((x,i) => <li key={i}>{x}</li>)}</ul>
              </div>
              <div className="piscine-col">
                <h3 className="dont">{t.piscine.notExpect}</h3>
                <ul className="minus-list">{t.piscine.notExpectItems.map((x,i) => <li key={i}>{x}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>



        {/* SKILLTREE */}
        <section className="section alt" id="skilltree">
<div className="wrap">
            <SectionHeading kicker={t.skilltree.kicker} title={t.skilltree.title} intro={t.skilltree.intro} />
            
            <h3 className="phase-title">{t.skilltree.phase1}</h3>
            <div className="core-stages-grid">
              {coreNodes.map(node => (
                <div className="core-stage-box" key={node.id}>
                  <div className="core-stage-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span className="detail-tier">{node.tier}</span>
                    <div className="core-icon" style={{ color: 'hsl(var(--primary))', opacity: 0.8 }}>
                      {node.id === 'imperative' && <Terminal size={24} />}
                      {node.id === 'algorithms' && <Network size={24} />}
                      {node.id === 'admin' && <Server size={24} />}
                      {node.id === 'fullstack' && <Globe size={24} />}
                      {node.id === 'systems' && <Cpu size={24} />}
                    </div>
                  </div>
                  <h4 className="node-h4">{node.title}</h4>
                  <p className="node-p">{node.desc}</p>
                  <div className="chips">{/* Fallback generic tech chips to keep simple */} <span className="chip">Core</span></div>
                </div>
              ))}
            </div>

            <h3 className="phase-title" style={{ marginTop: 60 }}>{t.skilltree.phase2}</h3>
            <div className="tracks-layout">
              <div className="tracks-circle-container">
                <div className="tracks-circle">
                  {specialNodes.map((node, i) => { 
                    const customAngles = [-90, -32, 0, 32, 90, 148, 180, 212]; 
                    const angle = customAngles[i]; 
                    const rad = angle * (Math.PI / 180); 
                    const radius = 50; 
                    let x = 50 + radius * Math.cos(rad);
                    if (lang === 'ar') x = 50 - radius * Math.cos(rad); // Flip X for RTL
                    const y = 50 + radius * Math.sin(rad); 
                    return <button key={node.id} className={`track-node ${selectedTrack.id === node.id ? 'active' : ''}`} style={{ left: `${x}%`, top: `${y}%` }} onClick={() => setSelectedTrackId(node.id)}>{node.label}</button>; 
                  })}
                  <div className="circle-center-label">
                    <div style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'hsl(var(--muted-foreground))' }}>{t.skilltree.gateway.top}</div>
                    <div style={{ fontWeight: 'bold' }}>{t.skilltree.gateway.bottom}</div>
                  </div>
                </div>
              </div>
              <div className="track-detail-container">
                <AnimatePresence mode="wait">
                  <motion.div className="tree-detail" key={selectedTrack.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
                    <span className="detail-tier">{selectedTrack.tier}</span>
                    <h3>{selectedTrack.title}</h3>
                    <p>{selectedTrack.desc}</p>
                    <div className="detail-meta"><small>{t.skilltree.outcome}</small><strong>{selectedTrack.projects}</strong></div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="stats-strip" style={{ marginTop: 60 }}>
              {t.skilltree.stats.map(stat => <div className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
            </div>
          </div>
        </section>

        {/* ADMISSIONS */}
        

        {/* PISCINE */}
        

        
        {/* MINIGAME */}
        


        {/* ELIGIBILITY */}
        


        {/* PEDAGOGY */}
        



        

        
        


        
        


        {/* PEDAGOGY */}
        <section className="section" id="pedagogy">
          <div className="wrap">
            <SectionHeading kicker={t.pedagogy.kicker} title={t.pedagogy.title} intro={t.pedagogy.intro} />
            <motion.div className="pedagogy-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={{ visible: { transition: { staggerChildren: .08 } } }}>
              {t.pedagogy.cards.map((card, i) => (
                <motion.article className="ped-card" variants={reveal} key={i}>
                  <div className="ped-visual">
                    {i === 0 && <div className="nodes"><span className="node-dot">A</span><i className="node-connector" /><span className="node-dot">B</span><i className="node-connector" /><span className="node-dot">C</span></div>}
                    {i === 1 && <div className="level-stack"><span className="level on">01</span><span className="level on">02</span><span className="level">03</span><span className="level">04</span></div>}
                    {i === 2 && <div className="portfolio">{Array.from({ length: 52 }, (_, j) => <i className={j % 3 !== 1 ? 'on' : ''} key={j} />)}</div>}
                    {i === 3 && <div className="seal"><ShieldCheck size={14} /></div>}
                  </div>
                  <h3>{card.title}</h3>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* LEARNING PYRAMID */}
        <section className="section">
          <div className="wrap">
            <SectionHeading kicker={t.pyramid.kicker} title={t.pyramid.title} intro={t.pyramid.intro} />
            <div className="pyramid-container">
              {t.pyramid.tiers.map((tier, i) => (
                <div className={`pyramid-tier tier-${i + 1}`} key={i}>
                  <div className="tier-content">
                    <span className="tier-label">{tier.label}</span>
                    <span className="tier-percent">{tier.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<section className="marquee-section section alt" id="partners">
          <div className="wrap" style={{ paddingBottom: '20px' }}>
            <SectionHeading kicker={t.partners.kicker} title={t.partners.title} intro={t.partners.intro} />
          </div>
          <div className="marquee-window" dir="ltr">
            {[0, 1].map((copy) => (
              <div className="marquee-track" key={copy} aria-hidden={copy === 1}>
                {[...partners, ...partners].map((partner, index) => (
                  <a key={`${partner.name}-${copy}-${index}`} href={partner.url} target="_blank" rel="noopener noreferrer" className="partner-logo-link">
                    <img src={partner.logo} alt={partner.fullName} className={`partner-logo-img ${partner.className}`} loading="lazy" />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* APPLICATION */}
        <section className="section apply-section" id="apply">
          <div className="wrap">
            <div className="apply-layout">
              <div className="apply-copy">
                <div className="kicker">{t.application.kicker}</div>
                <h2>{t.application.title}</h2>
                <p>{t.application.desc}</p>
                <div className="apply-trust">
                  {t.application.trust.map((trust,i) => <div className="trust-item" key={i}><CircleCheck size={16} /><span>{trust}</span></div>)}
                </div>
              </div>
              <div className="apply-form">
                {submitted ? (
                  <motion.div className="success-card" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="success-icon"><Check size={28} /></div>
                    <h3>{t.application.successTitle}</h3>
                    <p>{t.application.successDesc}</p>
                    <button className="button-secondary" onClick={() => { setSubmitted(false); form.reset(); }}>{t.application.submitAnother}</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className={isSubmitting ? 'loading' : ''} noValidate>

                    

                    <div className="form-grid">
                      <div className="field full">
                          <label>{t.application.form.name}</label>
                          <input type="text" placeholder={t.application.form.namePlace} {...register('fullName')} aria-invalid={!!errors.fullName} />
                          {errors.fullName && <span className="error">{errors.fullName.message}</span>}
                        </div>
                        <div className="field">
                          <label>{t.application.form.email}</label>
                          <input type="email" placeholder={t.application.form.emailPlace} {...register('email')} aria-invalid={!!errors.email} />
                          {errors.email && <span className="error">{errors.email.message}</span>}
                        </div>
                        <div className="field">
                          <label>{t.application.form.phone}</label>
                          <input type="text" placeholder={t.application.form.phonePlace} {...register('phone')} aria-invalid={!!errors.phone} dir="ltr" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }} />
                          {errors.phone && <span className="error">{errors.phone.message}</span>}
                        </div>
                        <div className="field">
                          <label>{t.application.form.city}</label>
                          <input type="text" placeholder={t.application.form.cityPlace} {...register('city')} aria-invalid={!!errors.city} />
                          {errors.city && <span className="error">{errors.city.message}</span>}
                        </div>
                        <div className="field">
                          <label>{t.application.form.age}</label>
                          <input type="number" placeholder={t.application.form.agePlace} {...register('age')} aria-invalid={!!errors.age} />
                          {errors.age && <span className="error">{errors.age.message}</span>}
                        </div>
                        <div className="field full">
                          <label>{t.application.form.statusLabel}</label>
                        <select {...register('status')} aria-invalid={!!errors.status}>
                          <option value="">{t.application.form.statusDefault}</option>
                          {t.application.form.statusOptions.map(opt => <option key={opt}>{opt}</option>)}
                        </select>
                        {errors.status && <span className="error">{errors.status.message}</span>}
                      </div>
                      <div className="field full">
                        <label>{t.application.form.tracksLabel} <span className="muted">{t.application.form.optional}</span></label>
                        <div className="track-options">
                          {t.application.form.tracks.map(track => (
                            <label className="track-option" key={track}>
                              <input type="checkbox" value={track} {...register('selectedTracks')} /> {track}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="submit-row">
                      <span className="submit-note">{t.application.form.noExp}</span>
                      <button className="button-primary" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? t.application.form.sending : t.application.form.submit} {!isSubmitting && <ArrowUpRight size={15} />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <CircuitGraphic variant={2} />
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <a href="#top" className="logo">
                <img src={theme === 'light' ? '/vip/logo-light.png' : logoPath} alt="NextEra Education" />
              </a>
              <p className="footer-desc">{t.footer.desc}</p>
              <div className="address">
                <MapPin size={16} className="teal" />
                <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRiPAjIHCAUQIRiPAtIBCDcwODVqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KeG4YHtxOVgUMQRdWSEZBACa&daddr=3+El-Montaza,+El-Nozha,+El+Nozha,+Cairo+Governorate+11373" target="_blank" rel="noopener noreferrer" className="location-link">{t.footer.address}</a>
              </div>
            </div>
            <div>
              <div className="footer-title">{t.footer.explore}</div>
              <div className="footer-links">
                {navItems.slice(0, 4).map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
              </div>
            </div>
            <div>
              <div className="footer-title">{t.footer.follow}</div>
              <div className="footer-links">
                <a href="https://www.instagram.com/nexeraeducation/?hl=en" target="_blank" rel="noopener noreferrer"><Instagram size={14} /> Instagram</a>
                <a href="https://www.tiktok.com/@nexteraeducation" target="_blank" rel="noopener noreferrer"><Music2 size={14} /> TikTok</a>
                <a href="https://eg.linkedin.com/company/nexera-education" target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> LinkedIn</a>
                <a href="https://www.facebook.com/nexteraeducation1/" target="_blank" rel="noopener noreferrer"><Facebook size={14} /> Facebook</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t.footer.copyright}</span>
            <span>{t.footer.slogan}</span>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;








