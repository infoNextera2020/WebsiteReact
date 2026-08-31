import { Link } from "wouter";
import { ArrowRight, Star, Users, Gamepad2, Terminal } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Timeline } from "@/components/nextera/primitives";
import { SiteFrame } from "@/components/nextera/site";
import { partners } from "./shared";
import { CurriculumTree } from "@/components/nextera/curriculum-tree";

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
                background: "hsl(var(--card))",
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
            {/* Visual Interactive Curriculum Tree */}
            <CurriculumTree />
          </div>
        </section>

        {/* Student Feedback Carousel */}
        <section
          className="legacy-section"
          style={{ background: "hsl(var(--card))" }}
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
                      name: "Ahmed Gamal Farfour",
                      role: "01 Coding Academy",
                      text: "This past month has been an incredible experience for me. The instructors were supportive, and I learned so much from my peers. The program was intense but sparked a strong passion for coding. Special thanks to Omar, Bavly, Martin, and Ziad I've learned a lot from each of you, and I'm truly grateful. Thank you for this opportunity 🤍",
                    },
                    {
                      name: "Mohamed Mekawy",
                      role: "01 Coding Academy",
                      text: "This past month at Nextera Era 01 Academy has been a truly enriching experience. I truly had met and knew really good people. the content was insightful. I especially appreciated the collaborative environment — it felt like a community where everyone pushed each other to do better.",
                    },
                    {
                      name: "Youssef Eltuwaisy",
                      role: "01 Coding Academy",
                      text: "The whole experience in Nextera has been perfect the staff and mentors are highly competent and carefully selected, they are always available and ready to help, the curriculum perfectly suits both inexperienced and experts in the field, it gives everyone a fair chance to compete in an engaging friendly and cooperative environment, I met great people and made new friends while learning, the platform feels like a game more than an exam, It has been a phenomenal experience and I recommend anyone from any field to join",
                    },
                    {
                      name: "Amr Yassin",
                      role: "01 Coding Academy",
                      text: "I've had a very enriching experience over the past month. The learning environment here is positive, supportive, and highly motivating.",
                    },
                    {
                      name: "Amr Mohamed Aly",
                      role: "01 Coding Academy",
                      text: "Program 01 has been a rewarding experience with stimulating challenges and valuable growth. Collaborating with such a diverse team was both eye-opening and challenging, especially in the weekly quad tasks. I'm thankful for Omar's inspiring leadership, Martin and Bavly's insightful guidance, and Shehab and Mohamed's constant support. Overall, it was a fulfilling journey, and I'm grateful to the entire team for making it memorable.",
                    }
                  ].map((testimonial, index) => (
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
                           {(testimonial as any).image ? (
                            <img src={(testimonial as any).image} alt={testimonial.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", transform: "scale(3)" }} />
                          ) : (
                            <span style={{ fontSize: "2rem", color: "hsl(var(--muted-foreground))" }}>
                              {testimonial.name.split(" ").map((n: string) => n[0]).join("")}
                            </span>
                          )}
                        </div>
                        <h4
                          style={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            color: "hsl(var(--primary))",
                            marginBottom: 16,
                          }}
                        >
                          {testimonial.name}
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
                          {testimonial.text}
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
              There's no shortcut through the Piscine — but if you're willing to put in the work, there's a seat for you.
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