import { toast } from "sonner";
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

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const submitApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormError("Please complete the required fields before submitting.");
      setSubmitted(false);
      form.reportValidity();
      return;
    }
    setFormError("");
    setSubmitted(true);
    toast.success("Application submitted successfully! Our team will contact you shortly.");
    form.reset();
  };
  return (
    <SiteFrame>
      <main>
        <section className="legacy-hero slanted">
          <div className="container hero-content">
            <p className="eyebrow">01 Coding Academy</p>
            <h1 className="display hero-title">
              Admissions <span>&</span> <span>Piscine</span>
            </h1>
            <p className="hero-copy hero-subtitle">
              The application process is an elite challenge. It filters out the
              uncommitted while encouraging diverse backgrounds to rise to their
              potential.
            </p>
          </div>
        </section>

        {/* 5. The Admissions Funnel */}
        <section
          className="primitive-section"
          aria-labelledby="admissions-title"
        >
          <div className="primitive-inner">
            <p className="eyebrow">How it works</p>
            <h2 id="admissions-title" className="display section-heading">
              Admission Process
            </h2>
            <p className="section-intro">
              Our admissions process is completely merit-based. Flexible
              installment plans from 6 months to 2 years available, with no CVs
              or prior coding experience required.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 24,
                marginTop: 45,
              }}
            >
              {[
                {
                  number: "1",
                  title: "The Game",
                  body: "A 90-minute online cognitive assessment testing your memory and logic. No coding required.",
                  icon: Gamepad2,
                },
                {
                  number: "2",
                  title: "The Check-In",
                  body: "An intro event to meet the team, explore the campus, and understand the commitment.",
                  icon: Users,
                },
                {
                  number: "3",
                  title: "The Piscine",
                  body: "A grueling, intensive 4-week coding bootcamp to test your resilience, logic, and peer collaboration.",
                  icon: Zap,
                },
                {
                  number: "4",
                  title: "The Core Program",
                  body: "Pass the Piscine, and you earn your seat in the ultimate 2-year software engineering journey.",
                  icon: Code,
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    className="legacy-list-card"
                    key={step.number}
                    style={{
                      padding: 30,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 48,
                        height: 48,
                        borderRadius: 8,
                        background: "hsl(var(--primary) / .1)",
                        color: "hsl(var(--primary))",
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <p
                        style={{
                          color: "hsl(var(--primary))",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          marginBottom: 4,
                          letterSpacing: ".05em",
                          textTransform: "uppercase",
                        }}
                      >
                        Step {step.number}
                      </p>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "hsl(var(--foreground))",
                          margin: 0,
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="card-body" style={{ margin: 0 }}>
                      {step.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="primitive-section dark"
          aria-labelledby="tuition-title"
        >
          <div
            className="container"
            style={{ textAlign: "center", maxWidth: 860 }}
          >
            <p className="eyebrow">Tuition & Financing</p>
            <h2
              id="tuition-title"
              className="display section-heading"
              style={{ margin: "0 auto" }}
            >
              Learn now. Pay later.
            </h2>
            <p className="section-intro" style={{ margin: "24px auto 0" }}>
              We believe finance should never be a barrier to growth. We offer
              flexible payment plans ranging from 6 months to 2 years through
              our trusted installment partners—including Lime, EduCash, and
              Banque Misr—making the program completely accessible.
            </p>
          </div>
        </section>

        {/* 7. The Piscine */}
        <section id="piscine" className="legacy-section">
          <div className="container">
            <div className="piscine-callout" style={{ background: "linear-gradient(135deg, #0d1a12 0%, #173620 100%)", borderColor: "hsl(var(--primary) / 0.3)" }}>
              <p className="eyebrow">Step 3: Selection phase</p>
              <h2
                className="display section-heading"
                style={{ color: "hsl(var(--ink-foreground))" }}
              >
                The Piscine:{" "}
                <span style={{ color: "hsl(var(--primary))" }}>
                  sink or swim
                </span>
              </h2>
              <p>
                The Piscine (French for "swimming pool") is our legendary
                4-week, immersive selection bootcamp. It is designed to strip
                away traditional learning habits and throw you directly into the
                deep end of coding. You will code 7 days a week, face seemingly
                impossible logic puzzles, and rely entirely on your peers to
                survive.
              </p>
              <div className="piscine-stats">
                <div>
                  <h3>0% Prior Knowledge</h3>
                  <p>
                    We test your logic, resilience, and teamwork—not your
                    previous computer science experience.
                  </p>
                </div>
                <div>
                  <h3>100% Commitment</h3>
                  <p>
                    It is a grueling, transformative month. You will fail, you
                    will retry, and you will learn how to learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="day-in-life"
          eyebrow="The Piscine"
          title="One month of fire"
          intro="Thirty days of full immersion. The Piscine is the selection phase — a compressed simulation of the entire programme where you are measured on how you learn, not on what you already know."
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32,
              margin: "40px 0",
            }}
          >
            {/* Green Box */}
            <div
              style={{
                border: "1px solid hsl(var(--primary))",
                borderRadius: 8,
                padding: 32,
                background:
                  "linear-gradient(180deg, hsl(var(--primary) / .05) 0%, transparent 100%)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "hsl(var(--primary))",
                  marginBottom: 24,
                }}
              >
                What to expect
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {[
                  "A new challenge every single day, with no lecture attached",
                  "Peer evaluations you both receive and deliver, out loud",
                  "Intense collaboration — the room solves faster than you do",
                  "Very little sleep and a schedule that bleeds into the evening",
                  "A learning curve steeper than anything you have done before",
                  "Weekend rushes: group projects delivered against the clock",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      color: "hsl(var(--foreground))",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  >
                    <CheckCircle
                      size={20}
                      color="hsl(var(--primary))"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Box */}
            <div
              style={{
                border: "1px solid hsl(var(--destructive))",
                borderRadius: 8,
                padding: 32,
                background:
                  "linear-gradient(180deg, hsl(var(--destructive) / .05) 0%, transparent 100%)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "hsl(var(--destructive))",
                  marginBottom: 24,
                }}
              >
                What NOT to do
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {[
                  "Don't isolate yourself — silence is the fastest way to fall behind",
                  "Don't chase the score instead of the understanding",
                  "Don't copy code you cannot defend in a review",
                  "Don't quit after a failed exam; the recovery is part of the signal",
                  "Don't neglect sleep, food and movement — burnout is not grit",
                  "Don't refuse help, and don't refuse to give it",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      color: "hsl(var(--foreground))",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  >
                    <XCircle
                      size={20}
                      color="hsl(var(--destructive))"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="piscine-schedule-block"
            data-testid="piscine-weekly-schedule"
          >
            <p className="eyebrow" style={{ marginTop: 60 }}>
              4-Week Filtration (26 Days)
            </p>
            <h3
              className="display section-heading"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", marginTop: 8 }}
            >
              Weekly Schedule: Quests, Checkpoints &amp; Raids
            </h3>
            <p
              className="section-intro"
              style={{ marginTop: 12, marginBottom: 32 }}
            >
              The Piscine follows a structured weekly rhythm balancing
              individual concept mastery, timed skill assessments, and
              collaborative weekend sprints.
            </p>

            <div className="piscine-rhythm-grid">
              <div className="piscine-rhythm-card">
                <div className="rhythm-tag quest">01 / Sunday – Wednesday</div>
                <h4 className="rhythm-title">Individual Quests</h4>
                <p className="rhythm-time">
                  10:00 AM – 10:00 PM · Optional Online / Campus
                </p>
                <p className="rhythm-desc">
                  Individual coding tasks designed to master core concepts
                  through videos and hands-on exercises. Graded on a 5-star
                  scale; each task must be completed and passed to unlock
                  subsequent concepts.
                </p>
              </div>

              <div className="piscine-rhythm-card">
                <div className="rhythm-tag checkpoint">
                  02 / Thursday &amp; Friday
                </div>
                <h4 className="rhythm-title">Weekly Checkpoints</h4>
                <p className="rhythm-time">
                  Thu: 5:00 PM – 8:00 PM | Fri: 3:00 PM – 6:00 PM · Mandatory
                  On-Campus
                </p>
                <p className="rhythm-desc">
                  Timed coding challenges testing knowledge gained during the
                  week’s quests. Conducted under exam conditions without peer
                  assistance to evaluate individual problem solving and
                  retention.
                </p>
              </div>

              <div className="piscine-rhythm-card">
                <div className="rhythm-tag raid">03 / Saturdays</div>
                <h4 className="rhythm-title">Weekend Raids</h4>
                <p className="rhythm-time">
                  Weeks 1, 2 &amp; 3 · Intensive Group Builds
                </p>
                <p className="rhythm-desc">
                  Collaborative team sprints (teams of 2 to 3 students) building
                  a complete challenge against the clock. Evaluated by mentors
                  on functionality, code efficiency, clarity, and team synergy.
                </p>
              </div>
            </div>

            <div className="piscine-table-wrap">
              <table
                className="piscine-table"
                aria-label="Piscine weekly schedule matrix"
              >
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
                    <td>
                      <strong>Week 01</strong>
                    </td>
                    <td>
                      <span className="badge-quest">Quests</span> Individual
                      Concepts &amp; Logic
                    </td>
                    <td>
                      <span className="badge-checkpoint">Checkpoint 01</span>{" "}
                      Timed Offline Exam
                    </td>
                    <td>
                      <span className="badge-raid">Raid 01</span> 3-Person Team
                      Challenge
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Week 02</strong>
                    </td>
                    <td>
                      <span className="badge-quest">Quests</span> Data
                      Structures &amp; Shell
                    </td>
                    <td>
                      <span className="badge-checkpoint">Checkpoint 02</span>{" "}
                      Timed Offline Exam
                    </td>
                    <td>
                      <span className="badge-raid">Raid 02</span> 3-Person Team
                      Challenge
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Week 03</strong>
                    </td>
                    <td>
                      <span className="badge-quest">Quests</span> Algorithms
                      &amp; Systems
                    </td>
                    <td>
                      <span className="badge-checkpoint">Checkpoint 03</span>{" "}
                      Timed Offline Exam
                    </td>
                    <td>
                      <span className="badge-raid">Raid 03</span> 3-Person Team
                      Challenge
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Week 04</strong>
                    </td>
                    <td>
                      <span className="badge-quest">Quests</span> Advanced
                      Architecture
                    </td>
                    <td>
                      <span className="badge-checkpoint">Final Checkpoint</span>{" "}
                      Filtration Exam
                    </td>
                    <td>
                      <span className="badge-core">Cohort Selection</span> Seat
                      Allocation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        {/* Eligibility */}
        <section
          className="primitive-section"
          style={{ background: "hsl(var(--background))" }}
        >
          <div className="primitive-inner">
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <div style={{ marginBottom: 40 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 16px",
                    borderRadius: 4,
                    background: "hsl(var(--primary) / .1)",
                    color: "hsl(var(--primary))",
                    border: "1px solid hsl(var(--primary) / .2)",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    fontSize: ".85rem",
                    marginBottom: 24,
                  }}
                >
                  <CheckCircle size={16} /> Eligibility
                </div>
                <h2 className="display section-heading">
                  Who is eligible to apply?
                </h2>
                <p className="section-intro">
                  Tech isn't just for math geniuses. NextEra is built for
                  everyone — gamers, artists, career switchers, and fresh
                  graduates alike. We don't care about degrees or CVs. We only
                  care about your logic and dedication.
                </p>
              </div>

              <div
                style={{
                  maxWidth: 800,
                  padding: 40,
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                  }}
                >
                  {[
                    "No prior coding experience is required or expected.",
                    "No high school diploma, university degree, or certificates needed.",
                    "No CVs, resumes, or letters of recommendation accepted.",
                    "Must be able to commit full-time during the 4-week Piscine.",
                    "Open to all backgrounds — the only thing that matters is how you think.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                        color: "hsl(var(--foreground))",
                        fontWeight: 500,
                        fontSize: "1.1rem",
                      }}
                    >
                      <CheckCircle
                        size={24}
                        color="hsl(var(--primary))"
                        style={{ flexShrink: 0 }}
                      />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Campus Vibe, Global Opportunities, & Application Form */}

        <section id="register" className="legacy-section band">
          <div className="container">
            <form
              className="form-container"
              onSubmit={submitApplication}
              data-testid="application-form"
            >
              <div style={{ textAlign: "center", marginBottom: 10 }}>
                <p className="eyebrow" style={{ justifyContent: "center" }}>Start your application</p>
                <h2
                  className="display section-heading"
                  style={{ fontSize: "clamp(2.1rem, 5vw, 3.6rem)", margin: "12px auto 0" }}
                >
                  Ready to enter the pool?
                </h2>
              </div>
              <div style={{ marginTop: 30 }}>
                <div className="std-group">
                  <label className="std-label" htmlFor="full-name">
                    Full Name <span>*</span>
                  </label>
<input
                    className="std-input"
                    id="full-name"
                    name="full-name"
                    type="text"
                    placeholder=" "
                    required
                  />
                </div>
                <div className="std-group">
                  <label className="std-label" htmlFor="email">
                    Email Address <span>*</span>
                  </label>
<input
                    className="std-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" "
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="std-group">
                    <label className="std-label" htmlFor="date-of-birth">
                      Date of Birth <span>*</span>
                    </label>
<input
                      className="std-input"
                      id="date-of-birth"
                      name="date-of-birth"
                      type="date"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="std-group">
                    <label className="std-label" htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>
<input
                      className="std-input"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder=" "
                      required
                    />
                  </div>
                </div>
                <label className="form-label">
                  Mark the tracks that you are interested in
                </label>
                <div className="checkbox-grid">
                  {[
                    "Artificial Intelligence & Machine Learning",
                    "Java Full Stack",
                    "Cybersecurity",
                    "Cloud DevOps",
                    "Mobile Applications",
                    "Video Games",
                    "Blockchain and Crypto currencies",
                    "User experience (UX/UI)",
                  ].map((track) => (
                    <label key={track}>
                      <input type="checkbox" name="track" value={track} />
                      {track}
                    </label>
                  ))}
                </div>
                <button
                  className="button"
                  style={{ width: "100%", marginTop: 28 }}
                  type="submit"
                  data-testid="button-submit-application"
                >
                  Apply now <ArrowRight size={15} />
                </button>
                {formError ? (
                  <p
                    className="form-error"
                    role="alert"
                    data-testid="form-error"
                  >
                    {formError}
                  </p>
                ) : null}
                {submitted ? (
                  <p
                    className="form-success"
                    role="status"
                    data-testid="form-success"
                  >
                    <Check
                      size={15}
                      style={{ verticalAlign: "middle", marginRight: 5 }}
                    />
                    Application submitted successfully!
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
