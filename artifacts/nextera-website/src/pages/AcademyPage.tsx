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

export default function AcademyPage() {
  return (
    <SiteFrame>
      <main>
        {/* 1. Hero & Intro */}
        <section className="legacy-hero">
          <div className="container hero-content">
            <p className="eyebrow">01 Coding Academy / Egypt</p>
            <h1 className="display hero-title">
              Become a software
              <br />
              <span>engineer in two years</span>
            </h1>
            <p className="hero-copy hero-subtitle">
              01 Coding Academy is a two year project based program powered by
              the French academy 01 Talent which operates across 30 countries
              and delivered exclusively in Egypt through NextEra Education.
            </p>
          </div>
        </section>

        {/* 2. Pedagogy & Peer Evaluation */}
        <section
          className="primitive-section"
          style={{ background: "hsl(var(--background))" }}
        >
          <div className="primitive-inner">
            <div style={{ marginBottom: 64 }}>
              <p className="eyebrow">The pedagogy</p>
              <h2
                className="display section-heading"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
              >
                Zero teachers. Zero classes. 100% code.
              </h2>
              <p className="section-intro">
                Traditional education relies on listening. We rely on building.
                Our methodology is designed to simulate a real-world tech
                environment.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 32,
                marginBottom: 80,
              }}
            >
              <div
                style={{
                  padding: 32,
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <Users size={24} color="hsl(var(--primary))" />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                    Peer-to-Peer Learning
                  </h3>
                </div>
                <p
                  style={{
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: 1.6,
                  }}
                >
                  No professors holding your hand. You learn by collaborating,
                  reviewing your peers' code, and solving complex problems as a
                  team.
                </p>
              </div>
              <div
                style={{
                  padding: 32,
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <Gamepad2 size={24} color="hsl(var(--primary))" />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                    The Skill Tree & Gamified Progression
                  </h3>
                </div>
                <p
                  style={{
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: 1.6,
                  }}
                >
                  Navigate your education like an RPG through the legendary{" "}
                  <strong>Skill Tree</strong>. Gain experience points (XP),
                  level up your profile, and unlock advanced technology branches
                  as you prove your skills.
                </p>
              </div>
              <div
                style={{
                  padding: 32,
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <Terminal size={24} color="hsl(var(--primary))" />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                    Project-Based Mastery
                  </h3>
                </div>
                <p
                  style={{
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: 1.6,
                  }}
                >
                  No theoretical exams or multiple-choice tests. Your progress
                  is measured entirely by the working software, scripts, and
                  architecture you build.
                </p>
              </div>
            </div>

            <div
              style={{
                background: "hsl(var(--ink-soft))",
                padding: "64px 48px",
                borderRadius: 16,
                border: "1px solid hsl(var(--border))",
              }}
            >
              <div style={{ marginBottom: 48, textAlign: "center" }}>
                <h3
                  className="display section-heading"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    marginBottom: 16,
                    margin: "0 auto",
                  }}
                >
                  Peer evaluation: No cheating
                </h3>
                <p
                  style={{
                    color: "hsl(var(--muted-foreground))",
                    fontSize: "1.1rem",
                    maxWidth: 700,
                    margin: "0 auto",
                  }}
                >
                  If there are no teachers, who grades your work? Your peers do.
                  Our strict evaluation system ensures you can't just copy-paste
                  your way to graduation.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 24,
                }}
              >
                <div
                  style={{
                    padding: 32,
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--primary) / .2)",
                    borderRadius: 8,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                      fontWeight: 800,
                      padding: "4px 12px",
                      borderRadius: 100,
                      fontSize: "0.85rem",
                    }}
                  >
                    01. Build
                  </div>
                  <p
                    style={{
                      marginTop: 12,
                      color: "hsl(var(--foreground))",
                      lineHeight: 1.6,
                      textAlign: "center",
                    }}
                  >
                    You write the code and build the architecture to solve the
                    project brief. No tutorials, no hand-holding.
                  </p>
                </div>
                <div
                  style={{
                    padding: 32,
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--primary) / .2)",
                    borderRadius: 8,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                      fontWeight: 800,
                      padding: "4px 12px",
                      borderRadius: 100,
                      fontSize: "0.85rem",
                    }}
                  >
                    02. Defend
                  </div>
                  <p
                    style={{
                      marginTop: 12,
                      color: "hsl(var(--foreground))",
                      lineHeight: 1.6,
                      textAlign: "center",
                    }}
                  >
                    You are randomly assigned to present your project to three
                    peers. You must explain and justify every single line of
                    code.
                  </p>
                </div>
                <div
                  style={{
                    padding: 32,
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--primary) / .2)",
                    borderRadius: 8,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                      fontWeight: 800,
                      padding: "4px 12px",
                      borderRadius: 100,
                      fontSize: "0.85rem",
                    }}
                  >
                    03. Pass or Fail
                  </div>
                  <p
                    style={{
                      marginTop: 12,
                      color: "hsl(var(--foreground))",
                      lineHeight: 1.6,
                      textAlign: "center",
                    }}
                  >
                    If you can't explain it, you fail. This forces elite
                    communication skills and guarantees deep technical
                    understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 2-Year Program Timeline */}
        <section id="programme" className="legacy-section">
          <div className="container">
            <p className="eyebrow">The 2-year cohort</p>
            <h3
              className="display section-heading"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              From imperative to specialist
            </h3>
            <p className="section-intro">
              Twenty-four months of deliberate progression. You start by writing
              Go against a merciless Unix shell and you finish by shipping
              production-grade systems in the specialisation you chose.
            </p>
            <Timeline
              phases={[
                {
                  window: "Months 0 – 6",
                  title: "Phase 1 · Imperative foundations",
                  copy: "You learn to think like a machine before you learn to abstract like an architect. Go, the Unix shell and raw algorithmic work strip away every convenience and force real understanding of memory, control flow and complexity.",
                  bullets: [
                    "Go, memory management and manual data structures",
                    "Unix, the shell, git and a strict code standard",
                    "Algorithmic problem solving and complexity reasoning",
                  ],
                },
                {
                  window: "Months 6 – 12",
                  title: "Phase 2 · Object-oriented & architecture",
                  copy: "Once you can build anything from nothing, you learn to build things other people can extend. Object-oriented design, higher-level languages and your first real team projects introduce planning, interfaces and the cost of bad structure.",
                  bullets: [
                    "OOP, design patterns and clean interface design",
                    "Databases, APIs and full-stack team projects",
                    "Agile collaboration, code review culture and testing",
                  ],
                },
                {
                  window: "Months 12 – 18",
                  title: "Phase 3 · Systems & open source",
                  copy: "The problems stop having tidy edges. You handle concurrency, distributed systems and performance, and you ship contributions into codebases you did not write.",
                  bullets: [
                    "Advanced system design, concurrency and scalability",
                    "Open-source contribution and working in unfamiliar codebases",
                    "DevOps, observability and cross-disciplinary product work",
                  ],
                },
                {
                  window: "Months 18 – 24",
                  title: "Phase 4 · Specialisation & capstone",
                  copy: "You commit to a track and go deep, finishing with a capstone built to production standards and defended in front of peers and industry reviewers.",
                  bullets: [
                    "Tracks: Cybersecurity · Mobile & Gaming · AI/Data · Web3 and more",
                    "Capstone project, shipped, documented and defended",
                    "Employment readiness: portfolio, interviews, industry partners",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* 4. What You'll Master */}
        <section
          className="legacy-section band"
          aria-labelledby="specializations-title"
          style={{ padding: "104px 0" }}
        >
          <div className="container" style={{ marginBottom: 64 }}>
            <p className="eyebrow">Specializations</p>
            <h2 id="specializations-title" className="display section-heading">
              What You'll Master
            </h2>
            <p className="section-intro">
              Build a portfolio of 65+ production applications across 12+
              technical domains, from full-stack web apps to AI and
              cybersecurity.
            </p>
          </div>
          <div
            className="container"
            style={{ width: "min(1100px, calc(100% - 48px))" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {[
                {
                  name: "Full-Stack Web Dev",
                  icon: Layers,
                  desc: "Build enterprise-grade web apps with Java, Spring Boot, REST APIs, and modern deployment pipelines.",
                },
                {
                  name: "AI & Machine Learning",
                  icon: Brain,
                  desc: "Train models, work with neural networks, NLP, and computer vision using Python and TensorFlow.",
                },
                {
                  name: "Cybersecurity",
                  icon: Shield,
                  desc: "Master ethical hacking, network defense, cryptography, and vulnerability assessment.",
                },
                {
                  name: "Cloud & DevOps",
                  icon: Cloud,
                  desc: "Deploy and scale applications with Docker, Kubernetes, CI/CD, and cloud platforms.",
                },
                {
                  name: "Algorithms",
                  icon: Code,
                  desc: "Sharpen problem-solving with data structures, sorting, graph theory, and competitive programming.",
                },
                {
                  name: "Databases & SQL",
                  icon: Database,
                  desc: "Design schemas, write complex queries, and manage relational and NoSQL databases.",
                },
                {
                  name: "Game Development",
                  icon: Gamepad2,
                  desc: "Create 2D/3D games with physics engines, rendering pipelines, and multiplayer networking.",
                },
                {
                  name: "Systems Programming",
                  icon: Terminal,
                  desc: "Write low-level code in C/Go, build shells, manage memory, and understand operating systems.",
                },
                {
                  name: "Mobile Development",
                  icon: Smartphone,
                  desc: "Ship native and cross-platform mobile apps for iOS and Android.",
                },
              ].map((domain, i) => {
                const Icon = domain.icon;
                return (
                  <div
                    key={i}
                    className="master-card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      padding: "24px",
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: 8,
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 16 }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: 8,
                          background: "hsl(var(--primary) / .1)",
                          color: "hsl(var(--primary))",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "1.05rem",
                          color: "hsl(var(--foreground))",
                        }}
                      >
                        {domain.name}
                      </span>
                    </div>
                    <p
                      className="master-card-desc"
                      style={{
                        margin: 0,
                        fontSize: "0.9rem",
                        color: "hsl(var(--muted-foreground))",
                        lineHeight: 1.5,
                      }}
                    >
                      {domain.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Student Feedback Carousel */}
        <section
          className="legacy-section"
          style={{ background: "hsl(var(--ink-soft))" }}
        >
          <div className="container">
            <p className="eyebrow">Student feedback</p>
            <h2 className="display section-heading">
              Hear from the Piscine survivors
            </h2>

            <div style={{ marginTop: 45, position: "relative" }}>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {[
                    {
                      name: "Omar K.",
                      role: "Current Learner, Phase 1",
                      text: "The Piscine was the hardest 4 weeks of my life. You come in knowing nothing, and by week 2 you're building a fully functional web server in Go. The peer-to-peer system forces you to truly understand the code.",
                    },
                    {
                      name: "Salma R.",
                      role: "Current Learner, Phase 2",
                      text: "I was a business student before this. The lack of teachers felt terrifying at first, but it makes you fiercely independent. When you solve a problem here, you know you earned it.",
                    },
                    {
                      name: "Ahmed T.",
                      role: "Current Learner, Phase 1",
                      text: "The weekend raids are my favorite part. Coding for 48 hours straight with two random peers, pushing limits you didn't know you had. It feels like an intense multiplayer game.",
                    },
                    {
                      name: "Nour H.",
                      role: "Current Learner, Phase 2",
                      text: "You don't just learn syntax, you learn how to engineer. The defense system where you have to justify your architecture choices to your peers is where the real learning happens.",
                    },
                    {
                      name: "Youssef M.",
                      role: "Current Learner, Phase 1",
                      text: "I dropped out of my CS degree for this. The speed at which you learn when you're 100% focused on projects rather than exams is insane.",
                    },
                  ].map((student, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                      style={{ paddingTop: 60, paddingBottom: 20 }}
                    >
                      <div
                        className="testimonial-card"
                        style={{
                          position: "relative",
                          padding: "70px 32px 32px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          background: "hsl(var(--background))",
                          borderRadius: 16,
                        }}
                      >
                        <div
                          style={{
                            width: 100,
                            height: 100,
                            borderRadius: "50%",
                            background: "hsl(var(--muted))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            position: "absolute",
                            top: -50,
                            left: "50%",
                            transform: "translateX(-50%)",
                            border: "4px solid hsl(var(--primary))",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.8rem",
                              color: "hsl(var(--muted-foreground))",
                            }}
                          >
                            Photo
                          </span>
                        </div>
                        <h4
                          style={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            color: "hsl(var(--primary))",
                            marginBottom: 16,
                          }}
                        >
                          {student.name}
                        </h4>
                        <p
                          className="card-body"
                          style={{
                            flexGrow: 1,
                            marginBottom: 24,
                            textAlign: "center",
                            lineHeight: 1.6,
                            fontSize: "1.05rem",
                          }}
                        >
                          {student.text}
                        </p>
                        <div
                          style={{ display: "flex", gap: 4, color: "#facc15" }}
                        >
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={20}
                              fill="currentColor"
                              stroke="none"
                            />
                          ))}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Custom styling for the arrows to make them pop */}
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    justifyContent: "flex-end",
                    marginTop: 24,
                  }}
                >
                  <CarouselPrevious
                    style={{
                      position: "relative",
                      left: 0,
                      top: 0,
                      transform: "none",
                      right: 0,
                    }}
                  />
                  <CarouselNext
                    style={{
                      position: "relative",
                      left: 0,
                      top: 0,
                      transform: "none",
                      right: 0,
                    }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        <section className="legacy-section">
          <div className="container" style={{ textAlign: "center" }}>
            <p className="eyebrow">Global opportunities</p>
            <h2
              className="display section-heading"
              style={{ marginInline: "auto" }}
            >
              Secure your job with global opportunities
            </h2>
            <p className="section-intro" style={{ marginInline: "auto" }}>
              Upon completion we’ll connect you with top global companies so you
              can start earning in USD, just bring your passion and willingness
              to learn. We believe in providing everyone the opportunity to
              start from scratch and become a pro.
            </p>
            <div className="academy-map" aria-label="Curriculum map">
              <div className="map-line" />
              <span className="map-node">FOUNDATION</span>
              <span className="map-node">SYSTEMS</span>
              <span className="map-node">AI / DATA</span>
              <span className="map-node">CAPSTONE</span>
            </div>
          </div>
        </section>
        <section
          className="legacy-section band"
          style={{ textAlign: "center" }}
        >
          <div className="container">
            <p className="eyebrow">Ready to begin?</p>
            <h2
              className="display section-heading"
              style={{ marginInline: "auto", maxWidth: 800 }}
            >
              The curriculum is built for the elite.
            </h2>
            <p className="section-intro" style={{ marginInline: "auto" }}>
              You cannot simply buy your way in—you have to survive the Piscine.
            </p>
            <Link href="/admissions#register"
              className="button"
              style={{ marginTop: 30 }}
            >
              Learn how to apply <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
