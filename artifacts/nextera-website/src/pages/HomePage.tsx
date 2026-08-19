import { Link } from "wouter";
import { useState, type FormEvent } from "react";
import {
  ChevronDown,
  ArrowRight,
  Check,
  ExternalLink,
  Terminal,
  Globe,
  Building2,
  Star,
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Gamepad2,
  Smartphone,
  Layers,
  CheckCircle,
  XCircle,
  AlertTriangle,
  MousePointerClick,
  Search,
  Zap,
  Users,
  Play,
  X,
} from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Route, Router as WouterRouter, Switch } from "wouter";
import {
  Card,
  CheckList,
  CompareTable,
  Section,
  StepFlow,
  Timeline,
} from "@/components/nextera/primitives";
import { HeroActions, SiteFrame } from "@/components/nextera/site";
import NotFound from "@/pages/not-found";

import {
  featureStories,
  faqItems,
  dayInLife,
  partners,
  FeatureExplorer,
  FAQList,
} from "./shared";

export default function HomePage() {
  const [heroVideoOpen, setHeroVideoOpen] = useState(false);
  return (
    <SiteFrame loader>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow reveal">01 Coding Academy</p>
            <h1 className="display hero-title reveal delay-1">
              Master the craft of
              <br />
              <span>software engineering</span>
            </h1>
            <p className="hero-copy reveal delay-2" style={{ maxWidth: 700 }}>
              A ruthless, peer-to-peer coding academy designed to strip away
              traditional habits and forge elite problem solvers. No teachers.
              No lectures. Just you, your peers, and the terminal.
            </p>
            <div
              className="hero-actions reveal delay-3"
              style={{ marginTop: 32, display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              <a
                href="#programs"
                className="button"
                data-testid="link-explore-programs"
              >
                Explore our programs <ArrowRight size={15} />
              </a>
              <button 
                className="button" 
                style={{ background: "transparent", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }}
                onClick={() => setHeroVideoOpen(true)}
              >
                <Play size={15} style={{ marginRight: 8 }} /> Watch intro
              </button>
            </div>
            <div
              className="terminal-lockup reveal delay-3"
              data-testid="terminal-home-preview"
            >
              <div className="terminal-bar">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-label mono">
                  bash — nextera-education
                </span>
              </div>
              <div className="terminal-body mono">
                <p>$ ./start-journey.sh</p>
                <p className="command">
                  &gt; Initializing next-generation education environment...
                </p>
                <p>&gt; Loading industry-aligned curricula...</p>
                <p className="status">
                  Status: Ready for deployment.{" "}
                  <span className="terminal-caret">_</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="legacy-section band"
          aria-labelledby="pedagogy-title"
        >
          <div className="container">
            <div className="academy-intro" style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center" }}>
              <div style={{ flex: "1 1 400px" }}>
                <strong>NextEra Education</strong> is a new breed of coding
                academy. We strip away the traditional classroom and focus
                entirely on real-world engineering. Students learn by building not
                by listening and developing practical skills in Full Stack
                Development, AI, Cybersecurity, Blockchain, Mobile Development,
                and more. Graduates leave with a professional portfolio, a
                technology specialization and guaranteed employment for eligible
                participants who meet the official program requirements.
              </div>
              <div style={{ flex: "1 1 300px" }}>
                <img src="/academy-intro.jpg" alt="Student coding at NextEra" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", maxHeight: "350px" }} />
              </div>
            </div>
          </div>
        </section>

<section className="legacy-section band" style={{ padding: "80px 0 160px" }}>
          <div className="container">
            <h2 className="display section-heading" style={{ textAlign: "center", margin: "0 auto 48px", maxWidth: 1000 }}>
              See what makes us different
            </h2>
            <div style={{ maxWidth: 1000, margin: "0 auto", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.2)", border: "1px solid hsl(var(--border))" }}>
              <iframe src="https://drive.google.com/file/d/1myKl30vg9A5-Eb6FZCnSidBn640xjoLG/preview" width="100%" height="100%" style={{ display: "block", aspectRatio: "16/9", border: "none" }} allow="autoplay" allowFullScreen></iframe>
            </div>
          </div>
        </section>

        <section
          className="primitive-section"
          style={{
            background: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
            textAlign: "center",
            padding: "80px 20px",
          }}
        >
          <div className="container" style={{ maxWidth: 860 }}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                marginBottom: 24,
                lineHeight: 1.1,
              }}
            >
              No coding experience? No degree? No problem.
            </h2>
            <p style={{ fontSize: "1.3rem", opacity: 0.9 }}>
              If you have the logic and the grit, you belong here. Our cognitive
              logic game identifies potential, not your past credentials.
            </p>
          </div>
        </section>

        <section
          id="programs"
          className="section"
          aria-labelledby="programs-title"
        >
          <div className="container">
            <p className="eyebrow">Choose your route</p>
            <h2 id="programs-title" className="display section-heading">
              Our programs
            </h2>
            <div
              className="program-grid"
              style={{ marginTop: 45 }}
            >
              <article
                className="program-card"
                data-testid="card-program-coding-academy"
                style={{ display: "flex", flexDirection: "column" }}
              >
                
                <div>
                  <h3
                    className="card-title"
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <Terminal
                      size={28}
                      style={{ color: "hsl(var(--primary))" }}
                    />
                    01 Coding Academy
                  </h3>
                  <p className="card-subtitle">
                    An intensive coding program with guaranteed employment for
                    eligible graduates
                  </p>
                  <p className="card-body">
                    The French 01 Talent methodology, delivered exclusively in
                    Egypt through NextEra. An intensive, project-based academy
                    built to prepare learners for the real job market.
                  </p>
                </div>
                <Link href="/academy"
                  className="button"
                  data-testid="link-explore-coding"
                  style={{ marginTop: "auto", alignSelf: "flex-start" }}
                >
                  Explore 01 Coding <ArrowRight size={15} />
                </Link>
              </article>
              <article
                className="program-card"
                data-testid="card-program-techverse"
                style={{ display: "flex", flexDirection: "column" }}
              >
                
                <div>
                  <h3
                    className="card-title"
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <Globe size={28} style={{ color: "hsl(var(--primary))" }} />
                    TechVerse Academy
                  </h3>
                  <p className="card-subtitle">
                    Hands on learning with real tools, sensors and connected
                    devices
                  </p>
                  <p className="card-body">
                    Designed for children and teens aged 10 to 18. Learners
                    explore IoT (Internet of Things) through hands on builds and
                    compete in technology challenges made for their age group.
                  </p>
                </div>
                <Link href="/techverse" className="button" data-testid="link-explore-techverse" style={{ marginTop: "auto", alignSelf: "flex-start" }}>
                  Explore TechVerse <ArrowRight size={15} />
                </Link>
              </article>
              <article
                className="program-card"
                data-testid="card-program-customized"
                style={{ display: "flex", flexDirection: "column" }}
              >
                
                <div>
                  <h3
                    className="card-title"
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <Building2
                      size={28}
                      style={{ color: "hsl(var(--primary))" }}
                    />
                    Customized Programs
                  </h3>
                  <p className="card-subtitle">
                    Tailored technology programs designed around your learners
                    and objectives
                  </p>
                  <p className="card-body">
                    We partner with universities and enterprises to deliver
                    customized upskilling programs that match your delivery
                    needs.
                  </p>
                </div>
                <Link href="/partnership"
                  className="button"
                  data-testid="link-explore-custom"
                  style={{ marginTop: "auto", alignSelf: "flex-start" }}
                >
                  Contact us <ArrowRight size={15} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="feature-band" aria-labelledby="why-title">
          <div className="container">
            <p className="eyebrow">01 Coding Academy Methodology</p>
            <h2
              id="why-title"
              className="display section-heading"
              style={{ color: "hsl(var(--ink-foreground))" }}
            >
              The 01 Method
            </h2>
            <p className="section-intro feature-intro">
              Move through the method of our flagship academy. Hover or tap a
              principle to see what it looks like when it becomes part of your
              daily work.
            </p>
            <FeatureExplorer />
          </div>
        </section>

        <section
          id="how-it-works"
          className="primitive-section"
          aria-labelledby="works-title"
        >
          <div className="primitive-inner">
            <p className="eyebrow">The 3-Step Learning Loop</p>
            <h2 id="works-title" className="display section-heading">
              No teachers. No lectures. Just you, your peers and the problem.
            </h2>
            <p className="section-intro">
              Our flagship 01 Coding Academy runs a peer-to-peer, 100%
              project-based curriculum where you learn by building, reviewing
              and teaching — the same way engineering actually works.
            </p>
            <div style={{ marginTop: 48 }}>
              <StepFlow
                steps={[
                  {
                    label: "Encounter the problem",
                    detail:
                      "A real project lands with a spec and constraints — no walkthrough, no slides.",
                  },
                  {
                    label: "Collaborate & research",
                    detail:
                      "Documentation, experimentation and peers. Struggle is the curriculum, not a bug in it.",
                  },
                  {
                    label: "Peer review & iterate",
                    detail:
                      "Your work is audited by classmates against a public rubric. You audit theirs. Then you go again.",
                  },
                ]}
              />
              
            </div>
          </div>
        </section>

        <section
          className="legacy-section band"
          aria-labelledby="campus-vibe-title"
        >
          <div className="container">
            <p className="eyebrow" style={{ textAlign: "center" }}>
              Life at NextEra
            </p>
            <h2
              id="campus-vibe-title"
              className="display section-heading"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              More than a campus. A community.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 24,
                marginTop: 48,
              }}
            >
              <img
                src="/life-1.jpg"
                alt="Students coding"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  objectFit: "cover",
                  height: "auto", aspectRatio: "3/4",
                }}
                loading="lazy"
              />
              <img
                src="/life-2.jpg"
                alt="Hackathon"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  objectFit: "cover",
                  height: "auto", aspectRatio: "3/4",
                }}
                loading="lazy"
              />
              <img
                src="/life-3.jpg"
                alt="24/7 Access"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  objectFit: "cover",
                  height: "auto", aspectRatio: "3/4",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        


        <section className="marquee-section" aria-label="Technology partners">
          <div
            style={{ textAlign: "center", marginBottom: 40, padding: "0 20px" }}
          >
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Exclusive Recruiting Partners
            </p>
            <h2 className="display section-heading" style={{ marginInline: "auto", margin: "12px auto 16px", maxWidth: 800 }}>
              Hired within 6 months. Guaranteed.
            </h2>
            <p
              style={{
                color: "hsl(var(--muted-foreground))",
                maxWidth: 700,
                margin: "0 auto",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              Our network of recruiting partners works directly with the academy
              to ensure eligible students secure a tech job within their first 6
              months of entering the program.
            </p>
          </div>
          <div className="marquee-window">
            {[0, 1].map((copy) => (
              <div
                className="marquee-track"
                key={copy}
                aria-hidden={copy === 1}
              >
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
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/partnership" className="button">
              Become a partner <ArrowRight size={15} />
            </Link>
          </div>
        </section>
        <section className="legacy-section band">
          <div className="container" style={{ textAlign: "center" }}>
            <p className="eyebrow">Industry backing</p>
            <h2
              className="display section-heading"
              style={{ marginInline: "auto" }}
            >
              Built for the industry,
              <br />
              backed by the industry.
            </h2>
            <p className="section-intro" style={{ marginInline: "auto" }}>
              The traditional education system is too slow for the digital
              economy. Global tech companies don't just need people who have
              read textbooks; they need engineers who can push code, collaborate
              in agile teams, and solve un-googleable problems. NextEra produces
              exactly that.
            </p>
            <Link href="/admissions#register"
              className="button"
              style={{ marginTop: 30 }}
              data-testid="link-industry-apply"
            >
              Apply now <ArrowRight size={15} />
            </Link>
          </div>
        </section>
        <section
          className="primitive-section home-faq"
          aria-labelledby="home-faq-title"
        >
          <div className="primitive-inner">
            <p className="eyebrow">Still deciding?</p>
            <h2 id="home-faq-title" className="display section-heading">
              Questions before you start?
            </h2>
            <p className="section-intro">
              A few honest answers for anyone standing at the edge of the pool.
            </p>
            <div className="faq-container home-faq-container">
              <FAQList limit={4} />
              <Link
                className="button secondary faq-page-link"
                href="/faq"
                data-testid="link-full-faq"
              >
                Open the full FAQ <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {heroVideoOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button 
            onClick={() => setHeroVideoOpen(false)} 
            style={{ position: 'absolute', top: 32, right: 32, color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          >
            <X size={32} />
          </button>
          <div style={{ width: '90%', maxWidth: 1200, aspectRatio: '16/9', background: '#000', borderRadius: 12, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <iframe src="https://drive.google.com/file/d/17YPS7wxkOf5WMQ5u4aKeE_KHUi7Aq0cs/preview" width="100%" height="100%" style={{ display: "block", border: "none" }} allow="autoplay" allowFullScreen></iframe>
          </div>
        </div>
      )}

    </SiteFrame>
  );
}
