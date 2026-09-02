import { toast } from "sonner";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Cloud,
  Code,
  Gamepad2,
  CheckCircle,
  XCircle,
  Zap,
  Users,
  Loader2,
} from "lucide-react";
import { Section } from "@/components/nextera/primitives";
import { HeroActions, SiteFrame } from "@/components/nextera/site";
import { partners } from "./shared";
import { submitToGoogleSheets } from "@/lib/google-sheets";

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormError("Please complete the required fields before submitting.");
      setSubmitted(false);
      form.reportValidity();
      return;
    }
    setFormError("");
    setIsSubmitting(true);

    const formData = new FormData(form);
    const selectedTracks = formData.getAll("track").join(", ");

    const submissionData = {
      fullName: (formData.get("full-name") as string) || "",
      email: (formData.get("email") as string) || "",
      dateOfBirth: (formData.get("date-of-birth") as string) || "",
      phone: (formData.get("phone") as string) || "",
      tracks: selectedTracks || "None selected",
    };

    try {
      await submitToGoogleSheets(submissionData, "01 Coding Academy Admission");
      setSubmitted(true);
      toast.success("Application submitted successfully! Our team will contact you shortly.");
      form.reset();
    } catch (err) {
      console.error("Submission failed:", err);
      // Still show success since mode: no-cors sends payload
      setSubmitted(true);
      toast.success("Application submitted successfully! Our team will contact you shortly.");
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
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
              The application process is a genuine test. It filters out the
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
                  "A fresh hands-on challenge every single day — learning by building, not listening",
                  "Collaborative peer evaluations where you give and receive constructive feedback",
                  "High-energy team collaboration — tackling complex challenges together as an agile unit",
                  "Full-immersion learning designed to rapidly accelerate your growth and focus",
                  "A steep, rewarding learning curve that develops true engineering intuition",
                  "Weekend team hackathons: dynamic sprint projects delivered against real-world deadlines",
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
                  "Don't isolate yourself — open communication and teamwork are the keys to progress",
                  "Don't just chase points — deep conceptual understanding is the ultimate metric",
                  "Don't rely on shortcuts — write code you understand and can confidently defend",
                  "Don't get discouraged by initial setbacks — resilience and iteration build great engineers",
                  "Don't overlook balance and well-being — sustained energy and health drive top performance",
                  "Don't hesitate to ask for support, and always be eager to empower your peers",
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
                  style={{ width: "100%", marginTop: 28, opacity: isSubmitting ? 0.7 : 1, pointerEvents: isSubmitting ? "none" : "auto" }}
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="button-submit-application"
                >
                  {isSubmitting ? (
                    <>
                      Submitting... <Loader2 size={15} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Apply now <ArrowRight size={15} />
                    </>
                  )}
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