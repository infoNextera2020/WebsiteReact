import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Route, Router as WouterRouter, Switch } from 'wouter';
import { Card, CheckList, CompareTable, Section, StepFlow, Timeline } from '@/components/nextera/primitives';
import { HeroActions, SiteFrame } from '@/components/nextera/site';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

const featureStories = [
  {
    id: 'projects',
    number: '100%',
    label: 'Project Based Learning',
    kicker: 'Build first',
    intro: 'You do not learn the work before you do the work.',
    detail: 'Every concept becomes something you can run, break, explain and ship. The brief is real, the constraints are real, and your portfolio grows as proof that you can solve problems without a step-by-step script.',
    outcomes: ['Ship working software', 'Learn by solving real constraints', 'Leave with proof, not just notes'],
  },
  {
    id: 'peers',
    number: '100%',
    label: 'Peer to Peer Collaboration',
    kicker: 'Learn together',
    intro: 'Your fastest feedback loop is the person working beside you.',
    detail: 'There are no isolated classrooms here. You review code, defend your decisions, ask for help and teach what you just figured out. Collaboration is not an extra module — it is how every day works.',
    outcomes: ['Give and receive useful feedback', 'Build communication under pressure', 'Grow through shared ownership'],
  },
  {
    id: 'technology',
    number: 'REAL',
    label: 'Technology Projects',
    kicker: 'Stay current',
    intro: 'The tools change. The ability to understand them is the advantage.',
    detail: 'From systems and APIs to AI, cybersecurity and connected devices, you work with the kind of technology teams use to create, operate and improve products in the real world.',
    outcomes: ['Work across modern technology', 'Understand what sits underneath the tools', 'Adapt as the industry moves'],
  },
  {
    id: 'future',
    number: 'FUTURE',
    label: 'Ready Skills',
    kicker: 'Go further',
    intro: 'Build the judgement to keep learning after the programme ends.',
    detail: 'NextEra is designed for the moment after graduation too. You leave with the habits to research unfamiliar problems, collaborate with confidence and keep your skills useful in a changing digital economy.',
    outcomes: ['Think like an engineer', 'Build a career-ready portfolio', 'Keep growing beyond the curriculum'],
  },
];

const faqItems = [
  {
    question: 'Do I need to know how to code before joining?',
    answer: 'No. The selection game and the programme are designed to reveal and grow your problem-solving ability, not to reward people who already had access to coding classes.',
  },
  {
    question: 'How does peer-to-peer learning actually work?',
    answer: 'You learn through projects, research and reviews with the people around you. Learners explain their decisions, audit each other’s work against a shared rubric and ask for help when a problem is bigger than one person.',
  },
  {
    question: 'How long is the 01 Coding Academy programme?',
    answer: 'The full path takes two years: 18 months of full-stack foundations followed by six months in a technology specialisation such as AI, cybersecurity, mobile applications, cloud DevOps or video games.',
  },
  {
    question: 'What are the payment and installment options?',
    answer: 'We believe finance should never be a barrier to growth. We offer flexible installment plans ranging from 6 months up to 2 years through our trusted payment partners—including Lime, EduCash, and Banque Misr—making the programme accessible and manageable.',
  },
  {
    question: 'What are Quests and how are they evaluated?',
    answer: 'Quests are individual tasks designed to help you master specific coding concepts and algorithms. Each quest contains instructional videos followed by practical coding tasks. Quests are graded on a 5-star scale; you must successfully pass each task before unlocking the next concept.',
  },
  {
    question: 'What are Checkpoints and how are they evaluated?',
    answer: 'Checkpoints are timed coding assessments held at the end of each week (Thursday & Friday on campus). They test the knowledge gained from that week’s quests under exam constraints to evaluate individual retention, problem-solving speed, and core mastery without peer assistance.',
  },
  {
    question: 'What are Raids and how are they evaluated?',
    answer: 'Raids are intensive weekend group projects where you collaborate in teams of 2 to 3 students to build a full project against the clock. Evaluation is based on team collaboration, code functionality, architectural efficiency, and clarity.',
  },
  {
    question: 'Do I need a computer science degree?',
    answer: 'Not at all. We welcome high school graduates, career switchers, university students and people from non-technical backgrounds. What matters is your logic, commitment and willingness to learn with others.',
  },
  {
    question: 'What happens after I finish?',
    answer: 'You graduate with a professional portfolio, a technology specialisation and career support connected to global opportunities with top tech companies.',
  },
];

function FeatureExplorer() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const activeFeature = hoveredFeature ?? selectedFeature;
  const story = featureStories[activeFeature];

  return (
    <div className="feature-explorer">
      <div className="feature-grid" role="list" aria-label="Why NextEra Education">
        {featureStories.map((feature, index) => (
          <button
            className={`feature-card${activeFeature === index ? ' is-active' : ''}`}
            key={feature.id}
            type="button"
            role="listitem"
            aria-expanded={activeFeature === index}
            aria-controls="feature-detail-panel"
            onMouseEnter={() => setHoveredFeature(index)}
            onMouseLeave={() => setHoveredFeature(null)}
            onFocus={() => setHoveredFeature(index)}
            onBlur={() => setHoveredFeature(null)}
            onClick={() => setSelectedFeature(index)}
            data-testid={`feature-card-${index}`}
          >
            <span className="feature-number">{feature.number}</span>
            <span className="feature-kicker">0{index + 1} / {feature.kicker}</span>
            <span className="feature-label">{feature.label}</span>
            <span className="feature-arrow" aria-hidden="true"><ArrowRight size={17} /></span>
          </button>
        ))}
      </div>
      <div className="feature-detail-panel" id="feature-detail-panel" aria-live="polite">
        <div className="feature-detail-content" key={story.id}>
          <div>
            <p className="feature-detail-kicker">Inside / {story.label}</p>
            <h3 className="feature-detail-title">{story.intro}</h3>
            <p className="feature-detail-copy">{story.detail}</p>
          </div>
          <ul className="feature-outcomes">
            {story.outcomes.map((outcome) => (
              <li key={outcome}><span aria-hidden="true">+</span>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FAQList({ className = '', limit }: { className?: string; limit?: number }) {
  const items = limit ? faqItems.slice(0, limit) : faqItems;
  return (
    <div className={`faq-list ${className}`.trim()}>
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

const dayInLife = [
  { time: '09:00', label: 'Challenge drop', detail: "The day's exercises unlock. No brief, no lecture." },
  { time: '11:00', label: 'Swarm & research', detail: 'Docs, man pages, whiteboards, and the person next to you.' },
  { time: '14:00', label: 'Peer reviews', detail: "Defend your code line by line. Review someone else's." },
  { time: '17:00', label: 'Push & audit', detail: 'Submit, get audited, patch what broke.' },
  { time: '20:00', label: 'Community projects', detail: 'Side builds, rush prep, and the stuff you do for fun.' },
];

const partners = [
  {
    name: 'Nok',
    fullName: 'Nok Human Capital',
    url: 'https://nokhc.net/',
    logo: '/partners/nok.png',
    className: 'logo-nok',
  },
  {
    name: 'Gramian',
    fullName: 'Gramian Consultancy Group',
    url: 'https://gramianconsulting.com/',
    logo: '/partners/gramian.png',
    className: 'logo-gramian',
  },
  {
    name: 'HiRemoters',
    fullName: 'HiRemoters',
    url: 'https://hiremoters.ai/',
    logo: '/partners/hiremoters.png',
    className: 'logo-hiremoters',
  },
  {
    name: 'Quantum',
    fullName: 'Quantum HR',
    url: 'https://quantumhr.co/',
    logo: '/partners/quantum.png',
    className: 'logo-quantum',
  },
  {
    name: 'Magnet',
    fullName: 'Magnet Empowering Organizations',
    url: 'https://b-magnet.com/',
    logo: '/partners/magnet.png',
    className: 'logo-magnet',
  },
];

function HomePage() {
  return (
    <SiteFrame loader>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow reveal">01 Coding Academy</p>
            <h1 className="display hero-title reveal delay-1">Master the craft of<br /><span>software engineering</span></h1>
            <p className="hero-copy reveal delay-2" style={{ maxWidth: 700 }}>A ruthless, peer-to-peer coding academy designed to strip away traditional habits and forge elite problem solvers. No teachers. No lectures. Just you, your peers, and the terminal.</p>
            <div className="hero-actions reveal delay-3" style={{ marginTop: 32 }}>
              <a href="#programs" className="button" data-testid="link-explore-programs">Enter the Piscine <ArrowRight size={15} /></a>
              <a href="#how-it-works" className="button secondary" data-testid="link-how-it-works">How it works</a>
            </div>
            <div className="terminal-lockup reveal delay-3" data-testid="terminal-home-preview">
              <div className="terminal-bar"><span className="terminal-dot red" /><span className="terminal-dot yellow" /><span className="terminal-dot green" /><span className="terminal-label mono">bash — nextera-education</span></div>
              <div className="terminal-body mono">
                <p>$ ./start-journey.sh</p>
                <p className="command">&gt; Initializing next-generation education environment...</p>
                <p>&gt; Loading industry-aligned curricula...</p>
                <p className="status">Status: Ready for deployment. <span className="terminal-caret">_</span></p>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-band" aria-labelledby="why-title">
          <div className="container">
            <p className="eyebrow">01 Coding Academy Methodology</p>
            <h2 id="why-title" className="display section-heading" style={{ color: 'hsl(var(--ink-foreground))' }}>The 01 Method</h2>
            <p className="section-intro feature-intro">Move through the method of our flagship academy. Hover or tap a principle to see what it looks like when it becomes part of your daily work.</p>
            <FeatureExplorer />
          </div>
        </section>

        <section className="marquee-section" aria-label="Technology partners">
          <p className="marquee-title">Trusted by partners around the globe</p>
          <div className="marquee-window">
            {[0, 1].map((copy) => (
              <div className="marquee-track" key={copy} aria-hidden={copy === 1}>
                {[...partners, ...partners].map((partner, index) => (
                  <a
                    key={`${partner.name}-${copy}-${index}`}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-logo-link"
                    data-testid={`link-partner-${partner.name.toLowerCase()}`}
                    aria-label={partner.fullName}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.fullName}
                      className={`partner-logo-img ${partner.className}`}
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="programs" className="section" aria-labelledby="programs-title">
          <div className="container">
            <p className="eyebrow">Choose your route</p>
            <h2 id="programs-title" className="display section-heading">Our programs</h2>
            <div className="program-grid" style={{ marginTop: 45 }}>
              <article className="program-card" data-testid="card-program-coding-academy">
                <div>
                  <h3 className="card-title">01 Coding Academy</h3>
                  <p className="card-subtitle">An intensive coding program with guaranteed employment for eligible graduates</p>
                  <p className="card-body">The French 01 Talent methodology, delivered exclusively in Egypt through NextEra. An intensive, project-based academy built to prepare learners for the real job market.</p>
                </div>
                <a href="/academy" className="button" data-testid="link-explore-coding">Explore 01 Coding <ArrowRight size={15} /></a>
              </article>
              <article className="program-card" data-testid="card-program-techverse">
                <div>
                  <h3 className="card-title">TechVerse Academy</h3>
                  <p className="card-subtitle">Hands on learning with real tools, sensors and connected devices</p>
                  <p className="card-body">Designed for children and teens aged 10 to 18. Learners explore IoT (Internet of Things) through hands on builds and compete in technology challenges made for their age group.</p>
                </div>
                <a href="https://techverse-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="button" data-testid="link-explore-techverse">Explore TechVerse <ArrowRight size={15} /></a>
              </article>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="primitive-section dark" aria-labelledby="works-title">
          <div className="primitive-inner">
            <p className="eyebrow">Inside 01 Coding Academy</p>
            <h2 id="works-title" className="display section-heading">No teachers. No lectures. Just you, your peers and the problem.</h2>
            <p className="section-intro">Our flagship 01 Coding Academy runs a peer-to-peer, 100% project-based curriculum where you learn by building, reviewing and teaching — the same way engineering actually works.</p>
            <div style={{ marginTop: 48 }}>
              <StepFlow steps={[
                { label: 'Encounter the problem', detail: 'A real project lands with a spec and constraints — no walkthrough, no slides.' },
                { label: 'Collaborate & research', detail: 'Documentation, experimentation and peers. Struggle is the curriculum, not a bug in it.' },
                { label: 'Peer review & iterate', detail: "Your work is audited by classmates against a public rubric. You audit theirs. Then you go again." },
              ]} />
              <div className="card-grid" style={{ marginTop: 22 }}>
                <Card title="Faster feedback loops">Feedback arrives in hours from the people beside you, not in weeks from a marker you never meet.</Card>
                <Card title="Retention through teaching">Explaining a concept forces you to actually own it. Every learner is also, daily, an instructor.</Card>
                <Card title="Real collaboration skills">Code review, disagreement, version control and shared ownership are the default working mode from week one.</Card>
              </div>
              <CompareTable rows={[
                { dimension: 'Feedback speed', traditional: 'Days to weeks, from one grader', peer: 'Hours, from multiple reviewers' },
                { dimension: 'Ownership', traditional: 'The syllabus decides your pace', peer: 'You decide what to learn next and defend the choice' },
                { dimension: 'Adaptability', traditional: 'Curriculum updates once a year', peer: 'Projects change as the industry changes' },
                { dimension: 'Proof of ability', traditional: 'A transcript', peer: 'A portfolio of shipped work and an audit history' },
              ]} />
            </div>
          </div>
        </section>

        <section id="communities" className="section light-band" aria-labelledby="community-title">
          <div className="container">
            <p className="eyebrow">Built with communities</p>
            <h2 id="community-title" className="display section-heading">Programs for communities</h2>
            <p className="section-intro">We partner with universities and communities to design and deliver impactful programs that prepare students for the future of work.</p>
            <div className="community-grid" style={{ marginTop: 45 }}>
              <article className="surface-card community-card"><h3 className="card-title">01 Coding Academies</h3><p className="card-body">Immersive, project-based coding programs built around peer learning, real challenges, and career readiness.</p></article>
              <article className="surface-card community-card"><h3 className="card-title">IoT Programs</h3><p className="card-body">Hands on workshops and innovation challenges using sensors, microcontrollers and connected devices.</p></article>
              <article className="surface-card community-card"><h3 className="card-title">Customized Programs</h3><p className="card-body">Tailored technology programs designed around your learners, objectives, schedule and delivery needs.</p></article>
            </div>
            <div className="center-action"><a href="/about" className="button" data-testid="link-discuss-partnership">Discuss a partnership <ExternalLink size={15} /></a></div>
          </div>
        </section>

        <section className="primitive-section dark home-faq" aria-labelledby="home-faq-title">
          <div className="primitive-inner">
            <p className="eyebrow">Still deciding?</p>
            <h2 id="home-faq-title" className="display section-heading">Questions before you start?</h2>
            <p className="section-intro">A few honest answers for anyone standing at the edge of the pool.</p>
            <div className="faq-container home-faq-container">
              <FAQList limit={4} />
              <a className="button secondary faq-page-link" href="/faq" data-testid="link-full-faq">Open the full FAQ <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

function AboutPage() {
  const trustees = [
    ['MF', 'Mr. Mohamed Farouk'], ['AT', 'Eng. Ahmed Tarek'], ['MA', 'Mr. Mokhtar Ahmed'],
    ['OS', 'Omar Sayed'], ['EG', 'Essam Gamal'], ['PW', 'Pavly Wagih'], ['AM', 'Anas Moner'],
  ];
  return (
    <SiteFrame>
      <main>
        <section className="legacy-hero slanted">
          <div className="container hero-content">
            <p className="eyebrow">NextEra Education</p>
            <h1 className="display hero-title">About <span>Us</span></h1>
            <p className="hero-copy hero-subtitle">At NextEra Education we are leading an educational revolution bridging the space where traditional learning ends and real world career success begins.</p>
          </div>
        </section>
        <section className="legacy-section" aria-labelledby="vision-title">
          <div className="container">
            <div className="card-grid two">
              <article className="legacy-list-card"><h2 id="vision-title" className="card-title">Our Vision</h2><p className="card-body">We're working toward an education system where the gap between finishing your learning and being ready for real work simply doesn't exist, where what you can build speaks before what you can present and where every learner whatever their starting point has a genuine path to the opportunities ahead of them.</p></article>
              <article className="legacy-list-card"><h2 className="card-title">Our Mission</h2><p className="card-body">To equip students and professionals with the technical literacy, practical experience and adaptability required to thrive in a rapidly shifting digital economy.</p></article>
            </div>
            <div className="how-card">
              <h2>How We Do It</h2>
              <ul>
                <li><strong>AI Powered Learning:</strong> Personalizing education across our programs so every learner masters skills effectively and efficiently.</li>
                <li><strong>Peer-to-Peer Mastery:</strong> Through our exclusive partnership with 01 Talent, we deliver 100% project-based, teacher-less coding education.</li>
                <li><strong>Industry Alignment:</strong> Partnering with top companies and global institutions to deliver curricula that match real workforce needs.</li>
                <li><strong>Career Focused Programs:</strong> Turning knowledge into actionable skills that open doors to lasting professional growth.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="legacy-section band" aria-labelledby="trustees-title">
          <div className="container">
            <p className="eyebrow">Leadership</p>
            <h2 id="trustees-title" className="display section-heading">Meet Our Board of Trustees</h2>
            <p className="section-intro">Our esteemed Board of Trustees brings a wealth of expertise and leadership to guide our mission and vision. Their dedication ensures the success and integrity of our platform.</p>
            <div className="board-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px 52px', width: '100%' }}>
                {trustees.slice(0, 3).map(([initials, name]) => <div className="board-member" key={name} data-testid={`board-member-${initials}`}><div className="profile-circle" role="img" aria-label={`${name} initials`}>{initials}</div><div className="member-name">{name}</div></div>)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px 52px', width: '100%' }}>
                {trustees.slice(3).map(([initials, name]) => <div className="board-member" key={name} data-testid={`board-member-${initials}`}><div className="profile-circle" role="img" aria-label={`${name} initials`}>{initials}</div><div className="member-name">{name}</div></div>)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

function AcademyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const submitApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormError('Please complete the required fields before submitting.');
      setSubmitted(false);
      form.reportValidity();
      return;
    }
    setFormError('');
    setSubmitted(true);
    form.reset();
  };

  return (
    <SiteFrame>
      <main>
        {/* 1. Hero & Intro */}
        <section className="legacy-hero">
          <div className="container hero-content">
            <p className="eyebrow">01 Coding Academy / Egypt</p>
            <h1 className="display hero-title">Become a software<br /><span>engineer in two years</span></h1>
            <p className="hero-copy hero-subtitle">01 Coding Academy is a two year project based program powered by the French academy 01 Talent which operates across 30 countries and delivered exclusively in Egypt through NextEra Education.</p>
          </div>
        </section>

        {/* 2. Pedagogy & Peer Evaluation */}
        <section className="legacy-section band" aria-labelledby="pedagogy-title">
          <div className="container">
            <div className="academy-intro">Students learn by building not by listening and developing practical skills in Full Stack Development, AI, Cybersecurity, Blockchain, Mobile Development, and more. Graduates leave with a professional portfolio, a technology specialization and guaranteed employment for eligible participants who meet the official program requirements.</div>
            <p className="eyebrow" style={{ marginTop: 60 }}>The pedagogy</p>
            <h2 id="pedagogy-title" className="display section-heading">Zero teachers. Zero classes. <span style={{ color: 'hsl(var(--primary))' }}>100% code.</span></h2>
            <p className="section-intro">Traditional education relies on listening. We rely on building. Our methodology is designed to simulate a real-world tech environment.</p>
            <div className="card-grid" style={{ marginTop: 45 }}>
              <article className="legacy-list-card"><h3 className="card-title">Peer-to-Peer Learning</h3><p className="card-body">No professors holding your hand. You learn by collaborating, reviewing your peers' code, and solving complex problems as a team.</p></article>
              <article className="legacy-list-card"><h3 className="card-title">Gamified Progression</h3><p className="card-body">Navigate your education like an RPG. Gain experience points (XP), level up your profile, and unlock advanced technology branches as you prove your skills.</p></article>
              <article className="legacy-list-card"><h3 className="card-title">Project-Based Mastery</h3><p className="card-body">No theoretical exams or multiple-choice tests. Your progress is measured entirely by the working software, scripts, and architecture you build.</p></article>
            </div>
            
            <h3 className="display section-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginTop: 80 }}>Peer evaluation: No cheating.</h3>
            <p className="section-intro">If there are no teachers, who grades your work? Your peers do. Our strict evaluation system ensures you can't just copy-paste your way to graduation.</p>
            <div className="card-grid" style={{ marginTop: 45 }}>
              {[['01. Build', 'You write the code and build the architecture to solve the project brief. No tutorials, no hand-holding.'], ['02. Defend', 'You are randomly assigned to present your project to three peers. You must explain and justify every single line of code.'], ['03. Pass or Fail', "If you can't explain it, you fail. This forces elite communication skills and guarantees deep technical understanding."]].map(([title, body]) => <article className="legacy-list-card" key={title}><h3 className="card-title" style={{ color: 'hsl(var(--primary))' }}>{title}</h3><p className="card-body">{body}</p></article>)}
            </div>
          </div>
        </section>

        {/* 3. The 2-Year Program Timeline */}
        <section id="programme" className="legacy-section">
          <div className="container">
            <p className="eyebrow">The 2-year cohort</p>
            <h3 className="display section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>From imperative to specialist</h3>
            <p className="section-intro">Twenty-four months of deliberate progression. You start by writing Go against a merciless Unix shell and you finish by shipping production-grade systems in the specialisation you chose.</p>
            <Timeline phases={[
              { window: 'Months 0 – 6', title: 'Phase 1 · Imperative foundations', copy: 'You learn to think like a machine before you learn to abstract like an architect. Go, the Unix shell and raw algorithmic work strip away every convenience and force real understanding of memory, control flow and complexity.', bullets: ['Go, memory management and manual data structures', 'Unix, the shell, git and a strict code standard', 'Algorithmic problem solving and complexity reasoning'] },
              { window: 'Months 6 – 12', title: 'Phase 2 · Object-oriented & architecture', copy: 'Once you can build anything from nothing, you learn to build things other people can extend. Object-oriented design, higher-level languages and your first real team projects introduce planning, interfaces and the cost of bad structure.', bullets: ['OOP, design patterns and clean interface design', 'Databases, APIs and full-stack team projects', 'Agile collaboration, code review culture and testing'] },
              { window: 'Months 12 – 18', title: 'Phase 3 · Systems & open source', copy: 'The problems stop having tidy edges. You handle concurrency, distributed systems and performance, and you ship contributions into codebases you did not write.', bullets: ['Advanced system design, concurrency and scalability', 'Open-source contribution and working in unfamiliar codebases', 'DevOps, observability and cross-disciplinary product work'] },
              { window: 'Months 18 – 24', title: 'Phase 4 · Specialisation & capstone', copy: 'You commit to a track and go deep, finishing with a capstone built to production standards and defended in front of peers and industry reviewers.', bullets: ['Tracks: Cybersecurity · Mobile & Gaming · AI/Data · Web3 and more', 'Capstone project, shipped, documented and defended', 'Employment readiness: portfolio, interviews, industry partners'] },
            ]} />
          </div>
        </section>

        {/* 4. The Tech Branches & Architecture & Gamification */}
        <section className="legacy-section band" aria-labelledby="specializations-title">
          <div className="container">
            <p className="eyebrow">Specializations</p>
            <h2 id="specializations-title" className="display section-heading">Choose your tech branch</h2>
            <p className="section-intro">After mastering your 18-month foundation, you unlock advanced specialization branches to define your career.</p>
            <div className="card-grid" style={{ marginTop: 45 }}>
              <article className="legacy-list-card"><h3 className="card-title">Data Science &amp; BI</h3><p className="card-body">Master Python, machine learning libraries like Scikit-learn and TensorFlow, and enterprise visualization tools including Power BI and Tableau.</p></article>
              <article className="legacy-list-card"><h3 className="card-title">Full Stack Development</h3><p className="card-body">Build highly scalable, responsive web and mobile applications using modern JavaScript frameworks, robust backends, and cloud infrastructure.</p></article>
              <article className="legacy-list-card"><h3 className="card-title">Cybersecurity &amp; Systems</h3><p className="card-body">Dive deep into network defense, ethical hacking, cryptography, and securing operating systems against modern vulnerabilities.</p></article>
            </div>
            
            <h3 className="display section-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginTop: 80 }}>Real-world architecture</h3>
            <p className="section-intro">Our pioneers are currently writing their first lines of code. By the end of your journey, here is a preview of the capstone architecture you will be building.</p>
            <div className="card-grid two" style={{ marginTop: 45 }}>
              <article className="legacy-list-card"><div className="architecture-block">[ AI &amp; Logic ]</div><h3 className="card-title">Machine Learning Systems</h3><p className="card-body">Design and implement complex backend software, such as a full Pharmacy Inventory Management System enhanced with Machine Learning to predict stock depletion and automate logistics.</p></article>
              <article className="legacy-list-card"><div className="architecture-block">[ Data &amp; Analytics ]</div><h3 className="card-title">Business Intelligence Pipelines</h3><p className="card-body">Engineer robust data warehousing solutions, utilizing advanced SQL to process raw datasets and converting them into high-level business insights.</p></article>
            </div>
          </div>
        </section>

        {/* 5. The Admissions Funnel */}
        <section className="primitive-section" aria-labelledby="admissions-title">
          <div className="primitive-inner">
            <p className="eyebrow">The selection funnel</p>
            <h2 id="admissions-title" className="display section-heading">How to get in</h2>
            <p className="section-intro">Our admissions process is completely merit-based. Flexible installment plans from 6 months to 2 years available, with no CVs or prior coding experience required.</p>
            <div className="card-grid two" style={{ marginTop: 64 }}>
              {[
                ['1', 'The Game', 'A 90-minute online cognitive assessment testing your memory and logic. No coding required.'],
                ['2', 'The Check-In', 'An intro event to meet the team, explore the campus, and understand the commitment.'],
                ['3', 'The Piscine', 'A grueling, intensive 4-week coding bootcamp to test your resilience, logic, and peer collaboration.'],
                ['4', 'The Core Program', 'Pass the Piscine, and you earn your seat in the ultimate 2-year software engineering journey.'],
              ].map(([number, title, body]) => <article className="legacy-list-card" key={number} style={{ position: 'relative', paddingTop: 42 }}><div className="profile-circle" style={{ width: 50, height: 50, position: 'absolute', top: -25, left: '50%', transform: 'translateX(-50%)', fontSize: '1.2rem' }}>{number}</div><h3 className="card-title">{title}</h3><p className="card-body">{body}</p></article>)}
            </div>
          </div>
        </section>

        {/* 6. The Pre-Piscine Game */}
        <Section id="game" eyebrow="Step 1: Pre-Piscine game" title="Your problem-solving DNA" intro="Before the Piscine there is a short online game — roughly 90 minutes, no coding required. It is not an IQ test and there is nothing to revise." dark>
          <div className="card-grid two">
            <div className="primitive-card">
              <p className="eyebrow">What it actually measures</p>
              <ul className="specialties" style={{ gridTemplateColumns: '1fr', color: 'hsl(var(--ink-foreground) / .76)' }}><li>Logical reasoning under an unfamiliar rule set</li><li>Pattern recognition and abstraction speed</li><li>Persistence when the first three attempts fail</li><li>Creative problem solving rather than memorised method</li></ul>
              <p className="eyebrow" style={{ marginTop: 30 }}>What it reveals about you</p>
              <ul className="specialties" style={{ gridTemplateColumns: '1fr', color: 'hsl(var(--ink-foreground) / .76)' }}><li>Adaptability — how quickly you change a failing strategy</li><li>Learning speed — how fast new rules become instinct</li><li>Grit — what you do at the hard level, not the easy one</li><li>Collaborative instinct — whether you seek input or dig in alone</li></ul>
            </div>
            <div className="primitive-card">
              <p className="eyebrow">The quadrant the game maps</p>
              <div className="quadrant-grid">
                <div className="quadrant"><h4>Methodical Grinder</h4><p>Keeps going, needs sharper strategy.</p></div>
                <div className="quadrant"><h4>Natural Engineer</h4><p>Solves hard problems and refuses to stop.</p></div>
                <div className="quadrant"><h4>Explorer</h4><p>Curious start, fades under resistance.</p></div>
                <div className="quadrant"><h4>Quick Sprinter</h4><p>Fast insight, tested by long problems.</p></div>
              </div>
              <p style={{ marginTop: 24, color: 'hsl(var(--ink-foreground) / .68)' }}>No quadrant is a rejection. The game shows where you stand today and which muscle the Piscine will build first.</p>
            </div>
          </div>
        </Section>

        {/* 7. The Piscine */}
        <section id="piscine" className="legacy-section">
          <div className="container">
            <div className="piscine-callout">
              <p className="eyebrow">Step 3: Selection phase</p>
              <h2 className="display section-heading" style={{ color: 'hsl(var(--ink-foreground))' }}>The Piscine: <span style={{ color: 'hsl(var(--primary))' }}>sink or swim</span></h2>
              <p>The Piscine (French for "swimming pool") is our legendary 4-week, immersive selection bootcamp. It is designed to strip away traditional learning habits and throw you directly into the deep end of coding. You will code 7 days a week, face seemingly impossible logic puzzles, and rely entirely on your peers to survive.</p>
              <div className="piscine-stats">
                <div><h3>0% Prior Knowledge</h3><p>We test your logic, resilience, and teamwork—not your previous computer science experience.</p></div>
                <div><h3>100% Commitment</h3><p>It is a grueling, transformative month. You will fail, you will retry, and you will learn how to learn.</p></div>
              </div>
            </div>
          </div>
        </section>

        <Section id="day-in-life" eyebrow="The Piscine" title="One month of fire" intro="Thirty days of full immersion. The Piscine is the selection phase — a compressed simulation of the entire programme where you are measured on how you learn, not on what you already know.">
          <div className="check-grid">
            <CheckList tone="do" title="What to expect" items={['A new challenge every single day, with no lecture attached', 'Peer evaluations you both receive and deliver, out loud', 'Intense collaboration — the room solves faster than you do', 'Very little sleep and a schedule that bleeds into the evening', 'A learning curve steeper than anything you have done before', 'Weekend rushes: group projects delivered against the clock']} />
            <CheckList tone="dont" title="What NOT to do" items={["Don't isolate yourself — silence is the fastest way to fall behind", "Don't chase the score instead of the understanding", "Don't copy code you cannot defend in a review", "Don't quit after a failed exam; the recovery is part of the signal", "Don't neglect sleep, food and movement — burnout is not grit", "Don't refuse help, and don't refuse to give it"]} />
          </div>
          <h3 className="card-title" style={{ marginTop: 55, fontSize: '1rem' }}>A day in the Piscine</h3>
          <ol className="day-grid">{dayInLife.map((day) => <li className="day-card" key={day.time}><p className="day-time">{day.time}</p><h4>{day.label}</h4><p>{day.detail}</p></li>)}</ol>

          <div className="piscine-schedule-block" data-testid="piscine-weekly-schedule">
            <p className="eyebrow" style={{ marginTop: 60 }}>4-Week Filtration (26 Days)</p>
            <h3 className="display section-heading" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', marginTop: 8 }}>Weekly Schedule: Quests, Checkpoints &amp; Raids</h3>
            <p className="section-intro" style={{ marginTop: 12, marginBottom: 32 }}>
              The Piscine follows a structured weekly rhythm balancing individual concept mastery, timed skill assessments, and collaborative weekend sprints.
            </p>

            <div className="piscine-rhythm-grid">
              <div className="piscine-rhythm-card">
                <div className="rhythm-tag quest">01 / Sunday – Wednesday</div>
                <h4 className="rhythm-title">Individual Quests</h4>
                <p className="rhythm-time">10:00 AM – 10:00 PM · Optional Online / Campus</p>
                <p className="rhythm-desc">Individual coding tasks designed to master core concepts through videos and hands-on exercises. Graded on a 5-star scale; each task must be completed and passed to unlock subsequent concepts.</p>
              </div>

              <div className="piscine-rhythm-card">
                <div className="rhythm-tag checkpoint">02 / Thursday &amp; Friday</div>
                <h4 className="rhythm-title">Weekly Checkpoints</h4>
                <p className="rhythm-time">Thu: 5:00 PM – 8:00 PM | Fri: 3:00 PM – 6:00 PM · Mandatory On-Campus</p>
                <p className="rhythm-desc">Timed coding challenges testing knowledge gained during the week’s quests. Conducted under exam conditions without peer assistance to evaluate individual problem solving and retention.</p>
              </div>

              <div className="piscine-rhythm-card">
                <div className="rhythm-tag raid">03 / Saturdays</div>
                <h4 className="rhythm-title">Weekend Raids</h4>
                <p className="rhythm-time">Weeks 1, 2 &amp; 3 · Intensive Group Builds</p>
                <p className="rhythm-desc">Collaborative team sprints (teams of 2 to 3 students) building a complete challenge against the clock. Evaluated by mentors on functionality, code efficiency, clarity, and team synergy.</p>
              </div>
            </div>

            <div className="piscine-table-wrap">
              <table className="piscine-table" aria-label="Piscine weekly schedule matrix">
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>Sunday – Wednesday</th>
                    <th>Thursday &amp; Friday</th>
                    <th>Saturday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Week 01</strong></td>
                    <td><span className="badge-quest">Quests</span> Individual Concepts &amp; Logic</td>
                    <td><span className="badge-checkpoint">Checkpoint 01</span> Timed Offline Exam</td>
                    <td><span className="badge-raid">Raid 01</span> 3-Person Team Challenge</td>
                  </tr>
                  <tr>
                    <td><strong>Week 02</strong></td>
                    <td><span className="badge-quest">Quests</span> Data Structures &amp; Shell</td>
                    <td><span className="badge-checkpoint">Checkpoint 02</span> Timed Offline Exam</td>
                    <td><span className="badge-raid">Raid 02</span> 3-Person Team Challenge</td>
                  </tr>
                  <tr>
                    <td><strong>Week 03</strong></td>
                    <td><span className="badge-quest">Quests</span> Algorithms &amp; Systems</td>
                    <td><span className="badge-checkpoint">Checkpoint 03</span> Timed Offline Exam</td>
                    <td><span className="badge-raid">Raid 03</span> 3-Person Team Challenge</td>
                  </tr>
                  <tr>
                    <td><strong>Week 04</strong></td>
                    <td><span className="badge-quest">Quests</span> Advanced Architecture</td>
                    <td><span className="badge-checkpoint">Final Checkpoint</span> Filtration Exam</td>
                    <td><span className="badge-core">Cohort Selection</span> Seat Allocation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        {/* 8. Campus Vibe, Global Opportunities, & Application Form */}
        <section className="legacy-section band">
          <div className="container">
            <p className="eyebrow">The people we’re looking for</p>
            <h2 className="display section-heading">Who belongs here?</h2>
            <p className="section-intro">Tech isn't just for math geniuses. We are looking for diverse minds, unique backgrounds, and relentless problem solvers.</p>
            <div className="card-grid two" style={{ marginTop: 45 }}>
              {[
                ['The Gamer', 'You love grinding for achievements, optimizing stats, and solving complex logic puzzles.'], 
                ['The Artist', 'You have an eye for design and want to bring beautiful, intuitive user interfaces to life.'], 
                ['The Career Switcher', 'You are ready for a change, bringing maturity, focus, and real-world skills to the tech industry.'], 
                ['The High School Grad', 'You want to bypass the traditional 4-year degree and dive straight into high-end software engineering.']
              ].map(([title, body]) => <article className="legacy-list-card" key={title}><h3 className="card-title">{title}</h3><p className="card-body">{body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="legacy-section">
          <div className="container campus-split">
            <div className="campus-copy"><p className="eyebrow">Campus vibe</p><h2 className="display section-heading">More than a campus</h2><p>NextEra isn't just a place to code—it’s an innovation hub. With 24/7 access, you decide when you work best. Collaborate in open zones, compete in weekend hackathons, and network with industry leaders at our exclusive milestone events.</p><a href="#register" className="button" data-testid="link-campus-apply">Start the game <ArrowRight size={15} /></a></div>
            <div className="faq-container"><h3 className="card-title">Is this for me?</h3>{[
              ['Do I need a computer science degree?', 'Not at all. We care about your logic and grit, not your previous diplomas. Whether you are a high school graduate, a career-switcher, or a university dropout, you are welcome here.'],
              ['Do I need to know how to code?', 'Absolutely zero prior coding experience is required. The curriculum is designed to take you from writing your very first command to architecting enterprise-grade systems.'],
              ['What are the payment and installment options?', 'We believe finance should never be a barrier to growth. We offer flexible payment plans ranging from 6 months to 2 years through our trusted installment partners—including Lime, EduCash, and Banque Misr—making the program accessible and manageable.'],
              ['What are Quests, Checkpoints, and Raids?', 'Quests are individual concept challenges graded on a 5-star scale, Checkpoints are mandatory weekly on-campus timed assessments, and Raids are collaborative 3-person weekend team builds evaluated on code quality and teamwork.'],
            ].map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="legacy-section band">
          <div className="container" style={{ textAlign: 'center' }}>
            <p className="eyebrow">Industry backing</p>
            <h2 className="display section-heading" style={{ marginInline: 'auto' }}>Built for the industry,<br />backed by the industry.</h2>
            <p className="section-intro" style={{ marginInline: 'auto' }}>The traditional education system is too slow for the digital economy. Global tech companies don't just need people who have read textbooks; they need engineers who can push code, collaborate in agile teams, and solve un-googleable problems. NextEra produces exactly that.</p>
            <a href="#register" className="button" style={{ marginTop: 30 }} data-testid="link-industry-apply">Apply now <ArrowRight size={15} /></a>
          </div>
        </section>

        <section className="legacy-section">
          <div className="container" style={{ textAlign: 'center' }}>
            <p className="eyebrow">Global opportunities</p>
            <h2 className="display section-heading" style={{ marginInline: 'auto' }}>Secure your job with global opportunities</h2>
            <p className="section-intro" style={{ marginInline: 'auto' }}>Upon completion we’ll connect you with top global companies so you can start earning in USD, just bring your passion and willingness to learn. We believe in providing everyone the opportunity to start from scratch and become a pro.</p>
            <div className="academy-map" aria-label="Curriculum map"><div className="map-line" /><span className="map-node active">FOUNDATION</span><span className="map-node">SYSTEMS</span><span className="map-node">AI / DATA</span><span className="map-node">CAPSTONE</span></div>
          </div>
        </section>

        <section id="register" className="legacy-section band">
          <div className="container">
            <form className="form-container" onSubmit={submitApplication} data-testid="application-form">
              <p className="eyebrow">Start your application</p>
              <h2 className="display section-heading" style={{ fontSize: 'clamp(2.1rem, 5vw, 3.6rem)' }}>Ready to enter the pool?</h2>
              <div style={{ marginTop: 30 }}>
                <div className="floating-group"><input className="floating-control" id="full-name" name="full-name" type="text" placeholder=" " required /><label className="floating-label" htmlFor="full-name">Full Name <span>*</span></label></div>
                <div className="floating-group"><input className="floating-control" id="email" name="email" type="email" placeholder=" " required /><label className="floating-label" htmlFor="email">Email Address <span>*</span></label></div>
                <div className="form-row">
                  <div className="floating-group"><input className="floating-control" id="date-of-birth" name="date-of-birth" type="date" placeholder=" " required /><label className="floating-label" htmlFor="date-of-birth">Date of Birth <span>*</span></label></div>
                  <div className="floating-group"><input className="floating-control" id="phone" name="phone" type="tel" placeholder=" " required /><label className="floating-label" htmlFor="phone">Phone Number <span>*</span></label></div>
                </div>
                <label className="form-label">Mark the tracks that you are interested in</label>
                <div className="checkbox-grid">
                  {['Artificial Intelligence & Machine Learning', 'Java Full Stack', 'Cybersecurity', 'Cloud DevOps', 'Mobile Applications', 'Video Games', 'Blockchain and Crypto currencies', 'User experience (UX/UI)'].map((track) => <label key={track}><input type="checkbox" name="track" value={track} />{track}</label>)}
                </div>
                <button className="button" style={{ width: '100%', marginTop: 28 }} type="submit" data-testid="button-submit-application">Apply now <ArrowRight size={15} /></button>
                {formError ? <p className="form-error" role="alert" data-testid="form-error">{formError}</p> : null}
                {submitted ? <p className="form-success" role="status" data-testid="form-success"><Check size={15} style={{ verticalAlign: 'middle', marginRight: 5 }} />Application submitted successfully!</p> : null}
              </div>
            </form>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

function FAQPage() {
  return (
    <SiteFrame>
      <main>
        <section className="legacy-hero" aria-labelledby="faq-hero-title">
          <div className="container hero-content">
            <p className="eyebrow">NextEra Education / FAQ</p>
            <h1 id="faq-hero-title" className="display hero-title">Questions<span>, answered.</span></h1>
            <p className="hero-copy hero-subtitle">Thinking about the next step? Start here for the straight answers about our learning model, admissions process and what comes after the programme.</p>
          </div>
        </section>
        <section className="primitive-section dark" aria-labelledby="faq-list-title">
          <div className="primitive-inner">
            <p className="eyebrow">No fine print</p>
            <h2 id="faq-list-title" className="display section-heading">Before you dive in</h2>
            <div className="faq-container faq-page-container">
              <FAQList />
            </div>
          </div>
        </section>
        <section className="legacy-section faq-cta">
          <div className="container faq-cta-inner">
            <p className="eyebrow">Ready when you are</p>
            <h2 className="display section-heading">The best way to understand NextEra is to enter the work.</h2>
            <a href="/academy#register" className="button" data-testid="link-faq-apply">Start your application <ArrowRight size={15} /></a>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/academy" component={AcademyPage} />
      <Route path="/faq" component={FAQPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;