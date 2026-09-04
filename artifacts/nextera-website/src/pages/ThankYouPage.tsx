import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Mail, Calendar, Sparkles, Home, BookOpen, HelpCircle } from "lucide-react";
import { SiteFrame } from "@/components/nextera/site";

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Fire Meta Pixel events if initialized
    if (typeof window !== "undefined" && (window as any).fbq) {
      try {
        (window as any).fbq("track", "Lead");
        (window as any).fbq("track", "CompleteRegistration");
      } catch (e) {
        console.error("Meta Pixel event error:", e);
      }
    }
  }, []);

  return (
    <SiteFrame>
      <main>
        {/* Hero Section */}
        <section className="legacy-hero slanted" style={{ paddingBottom: "80px" }}>
          <div className="container hero-content" style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "100px",
                background: "hsl(var(--primary) / 0.12)",
                border: "1px solid hsl(var(--primary) / 0.3)",
                color: "hsl(var(--primary))",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              <CheckCircle2 size={16} /> Application Received
            </div>

            <h1 className="display hero-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)", margin: "0 auto 20px" }}>
              Thank You! <br />
              <span>You're on the Path.</span>
            </h1>

            <p className="hero-copy hero-subtitle" style={{ maxWidth: "700px", margin: "0 auto 36px", fontSize: "1.2rem" }}>
              Your application for the <strong>01 Coding Academy</strong> has been successfully submitted. Our admissions team has received your details and is reviewing them.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/" className="button">
                <Home size={16} /> Return to Homepage
              </Link>
              <Link href="/academy" className="button secondary">
                <BookOpen size={16} /> Explore Curriculum <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="primitive-section" style={{ background: "hsl(var(--background))" }}>
          <div className="primitive-inner">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <p className="eyebrow" style={{ textAlign: "center", margin: "0 auto" }}>Next Steps</p>
              <h2
                className="display section-heading"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  margin: "12px auto 0",
                  textAlign: "center",
                }}
              >
                What Happens Next?
              </h2>
              <p className="section-intro" style={{ margin: "16px auto 0", textAlign: "center" }}>
                Here is what you should anticipate over the next few days as your application progresses.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                marginBottom: "50px",
              }}
            >
              <article
                className="legacy-list-card"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  position: "relative",
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "hsl(var(--primary) / 0.1)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <p
                    style={{
                      color: "hsl(var(--primary))",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: "0 0 6px",
                    }}
                  >
                    Step 01
                  </p>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "hsl(var(--foreground))" }}>
                    Application Verification
                  </h3>
                </div>
                <p className="card-body" style={{ margin: 0, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                  Our admissions coordinators verify your applicant profile and ensure all prerequisites are in place. This typically takes 24 to 48 hours.
                </p>
              </article>

              <article
                className="legacy-list-card"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  position: "relative",
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "hsl(var(--primary) / 0.1)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  <Sparkles size={24} />
                </div>
                <div>
                  <p
                    style={{
                      color: "hsl(var(--primary))",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: "0 0 6px",
                    }}
                  >
                    Step 02
                  </p>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "hsl(var(--foreground))" }}>
                    Cognitive Game Link
                  </h3>
                </div>
                <p className="card-body" style={{ margin: 0, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                  You will receive an email invitation to take our 90-minute online cognitive logic test. No coding background is required — only pure problem solving.
                </p>
              </article>

              <article
                className="legacy-list-card"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  position: "relative",
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "hsl(var(--primary) / 0.1)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  <Calendar size={24} />
                </div>
                <div>
                  <p
                    style={{
                      color: "hsl(var(--primary))",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: "0 0 6px",
                    }}
                  >
                    Step 03
                  </p>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "hsl(var(--foreground))" }}>
                    Campus Check-in & Piscine
                  </h3>
                </div>
                <p className="card-body" style={{ margin: 0, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                  High-scoring candidates will be invited to our campus in Cairo for the in-person Check-in event and seat reservation in the upcoming Piscine cohort.
                </p>
              </article>
            </div>

            {/* Advisory Callout */}
            <div
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "24px 32px",
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--primary) / 0.3)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "hsl(var(--primary) / 0.15)",
                  color: "hsl(var(--primary))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={22} />
              </div>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <h4 style={{ margin: "0 0 4px", fontSize: "1rem", fontWeight: 700 }}>
                  Important: Check Your Inbox & Spam
                </h4>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.5 }}>
                  Invitations and updates are sent via email. Make sure to check your Spam or Promotions tab to ensure you don't miss your game access link.
                </p>
              </div>
              <Link href="/faq" className="button secondary" style={{ padding: "10px 18px", fontSize: "0.9rem" }}>
                <HelpCircle size={15} /> Questions? Read FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
