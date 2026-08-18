import { SiteFrame } from "@/components/nextera/site";
import { ArrowRight, Bot, Code, Cpu, GraduationCap, Lightbulb, Trophy } from "lucide-react";
import { Link } from "wouter";
import { Card, Section, CheckList } from "@/components/nextera/primitives";

export default function TechVersePage() {
  return (
    <SiteFrame>
      
      <main>
        <section className="hero">
          <div className="container hero-content" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "60px", alignItems: "center" }}>
            
            <div className="hero-left">
              <p className="eyebrow" style={{ marginBottom: "1rem", display: "inline-flex", gap: "8px" }}>
                <Cpu size={16} /> Technology Education & Innovation
              </p>
              <h1 className="display hero-title" style={{ margin: "0 0 24px" }}>
                TechVerse
              </h1>
              <p className="hero-copy hero-subtitle" style={{ margin: "0 0 24px" }}>
                TechVerse is a technology education initiative by NextEra Education, focused on providing students with practical learning opportunities in Artificial Intelligence, Programming, and emerging technologies.
              </p>
              <p className="hero-copy hero-subtitle" style={{ margin: "0 0 40px" }}>
                The initiative combines educational programs with technology competitions, giving students the opportunity to develop technical knowledge and apply it through practical projects and real-world challenges.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#register" className="button">
                  Apply Now <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div className="hero-right" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "32px", backdropFilter: "blur(10px)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "hsl(var(--primary))", marginBottom: "24px" }}>
                TechVerse at a Glance
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "AI & Programming Programs for schools",
                  "Programming Programs starting from age 6",
                  "01 Programs for students aged 12+",
                  "AI Competition",
                  "IoT Innovation Challenge",
                  "Practical and project-based learning experiences",
                  "Opportunities to apply technical skills through competitions and challenges"
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(85,255,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    </div>
                    <span style={{ fontSize: "14px", color: "hsl(var(--ink-foreground))", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <Section 
          id="programs"
          title="Schools Programs" 
          intro="TechVerse provides technology programs for schools covering Artificial Intelligence and Programming, with content adapted to students' age and learning level. The programs focus on developing programming fundamentals, computational thinking, problem-solving skills, and an understanding of AI concepts through practical activities and project-based learning."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px", marginTop: "40px" }}>
            
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
                  alignItems: "flex-start",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div style={{ marginTop: "2px" }}>
                  <Code size={24} color="hsl(var(--primary))" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px", marginTop: 0 }}>
                    Programming Programs
                  </h3>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid hsl(var(--primary)/0.3)", borderRadius: "999px", padding: "4px 12px", background: "hsl(var(--primary)/0.05)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", color: "hsl(var(--primary))", textTransform: "uppercase" }}>Ages 6+</span>
                  </div>
                </div>
              </div>
              <p
                style={{
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: 1.6,
                }}
                dangerouslySetInnerHTML={{ __html: `Programming programs are available for children starting from 6 years old, introducing students to coding and computational thinking through structured, age-appropriate learning experiences.` }}
              />
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
                  alignItems: "flex-start",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div style={{ marginTop: "2px" }}>
                  <GraduationCap size={24} color="hsl(var(--primary))" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px", marginTop: 0 }}>
                    01 Programs
                  </h3>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid hsl(var(--primary)/0.3)", borderRadius: "999px", padding: "4px 12px", background: "hsl(var(--primary)/0.05)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", color: "hsl(var(--primary))", textTransform: "uppercase" }}>Ages 12+</span>
                  </div>
                </div>
              </div>
              <p
                style={{
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: 1.6,
                }}
                dangerouslySetInnerHTML={{ __html: `TechVerse offers 01 Programs, providing a more advanced learning pathway in programming and technology.<br/>The programs focus on strengthening technical skills, problem-solving, programming, and practical project development.` }}
              />
            </div>
          </div>
        </Section>

        <Section 
          id="technology-competitions"
          title="Technology Competitions"
          intro="Apply your knowledge and develop solutions to practical challenges."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: "24px", marginTop: "40px" }}>
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
                <Trophy size={24} color="hsl(var(--primary))" />
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                  AI Competition
                </h3>
              </div>
              <div style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid hsl(var(--primary)/0.3)", borderRadius: "999px", padding: "4px 12px", background: "hsl(var(--primary)/0.05)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", color: "hsl(var(--primary))", textTransform: "uppercase" }}>AI Concepts</span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid hsl(var(--primary)/0.3)", borderRadius: "999px", padding: "4px 12px", background: "hsl(var(--primary)/0.05)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", color: "hsl(var(--primary))", textTransform: "uppercase" }}>Problem-Solving</span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid hsl(var(--primary)/0.3)", borderRadius: "999px", padding: "4px 12px", background: "hsl(var(--primary)/0.05)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", color: "hsl(var(--primary))", textTransform: "uppercase" }}>Creativity</span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid hsl(var(--primary)/0.3)", borderRadius: "999px", padding: "4px 12px", background: "hsl(var(--primary)/0.05)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", color: "hsl(var(--primary))", textTransform: "uppercase" }}>Technical Implementation</span>
                  </div>
                </div>
                <p style={{ marginBottom: "16px" }}>The AI Competition provides students with the opportunity to explore Artificial Intelligence and develop technology-based solutions to real-world problems.</p>
                <p style={{ marginBottom: "12px" }}>Participants work on projects that demonstrate their understanding in key areas:</p>
                
              </div>
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
                <Lightbulb size={24} color="hsl(var(--primary))" />
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                  IoT Innovation Challenge
                </h3>
              </div>
              <div style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid hsl(var(--primary)/0.3)", borderRadius: "999px", padding: "4px 12px", background: "hsl(var(--primary)/0.05)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", color: "hsl(var(--primary))", textTransform: "uppercase" }}>Smart Agriculture</span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid hsl(var(--primary)/0.3)", borderRadius: "999px", padding: "4px 12px", background: "hsl(var(--primary)/0.05)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", color: "hsl(var(--primary))", textTransform: "uppercase" }}>Smart Energy</span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid hsl(var(--primary)/0.3)", borderRadius: "999px", padding: "4px 12px", background: "hsl(var(--primary)/0.05)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(var(--primary))" }}></div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", color: "hsl(var(--primary))", textTransform: "uppercase" }}>Smart Systems</span>
                  </div>
                </div>
                <p style={{ marginBottom: "16px" }}>The IoT Innovation Challenge focuses on developing innovative solutions using Internet of Things technologies.</p>
                <p style={{ marginBottom: "12px" }}>Students design and build IoT-based projects using sensors, connected devices, and software to address challenges in key domains:</p>
                <p>The challenge provides students with practical experience in developing, testing, and presenting technology solutions.</p>
              </div>
            </div>
          </div>
        </Section>



        
        <section className="primitive-section" id="register">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p className="eyebrow" style={{ justifyContent: "center" }}>Registration</p>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", marginBottom: "12px" }}>Join the Challenge</h2>
              <p style={{ maxWidth: 700, margin: "0 auto", color: "hsl(var(--muted-foreground))" }}>
                Fill out the form below to register your school or organization for the TechVerse IoT Innovation Challenge. Our team will contact you with the next steps.
              </p>
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <form className="form-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", padding: "40px", width: "100%" }} onSubmit={(e) => { e.preventDefault(); toast.success("Registration submitted successfully! Our team will contact you shortly."); e.currentTarget.reset(); }}>
                
                <div className="floating-group" style={{ gridColumn: "1 / -1", margin: 0 }}>
                  <input className="floating-control" id="coordinator" type="text" placeholder=" " required />
                  <label className="floating-label" htmlFor="coordinator">Coordinator Name <span>*</span></label>
                </div>

                <div className="floating-group" style={{ margin: 0 }}>
                  <input className="floating-control" id="school" type="text" placeholder=" " required />
                  <label className="floating-label" htmlFor="school">School / Org Name <span>*</span></label>
                </div>

                <div style={{ position: "relative", margin: 0 }}>
                  <select className="floating-control" required style={{ padding: "24px 16px 8px", appearance: "none" }}>
                    <option value="" disabled selected></option>
                    <option value="International School" style={{ color: "black" }}>International School</option>
                    <option value="National School" style={{ color: "black" }}>National School</option>
                    <option value="STEM School" style={{ color: "black" }}>STEM School</option>
                    <option value="Academy" style={{ color: "black" }}>Academy / Training Center</option>
                    <option value="Other" style={{ color: "black" }}>Other</option>
                  </select>
                  <label style={{ position: "absolute", left: "16px", top: "12px", fontSize: "0.75rem", color: "hsl(var(--muted-foreground))", pointerEvents: "none" }}>Institution Type <span style={{ color: "hsl(var(--primary))" }}>*</span></label>
                </div>

                <div className="floating-group" style={{ margin: 0 }}>
                  <input className="floating-control" id="city" type="text" placeholder=" " required />
                  <label className="floating-label" htmlFor="city">City / Location <span>*</span></label>
                </div>

                <div className="floating-group" style={{ margin: 0 }}>
                  <input className="floating-control" id="phone" type="tel" placeholder=" " required />
                  <label className="floating-label" htmlFor="phone">Phone Number <span>*</span></label>
                </div>

                <div className="floating-group" style={{ gridColumn: "1 / -1", margin: 0 }}>
                  <input className="floating-control" id="email" type="email" placeholder=" " required />
                  <label className="floating-label" htmlFor="email">Email Address <span>*</span></label>
                </div>

                <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "10px" }}>
                  <div style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))", borderRadius: "10px", padding: "16px" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(var(--primary))", marginBottom: "4px" }}>Junior Division</div>
                    <div style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", marginBottom: "12px" }}>Ages 10–14 · 5 students/team</div>
                    <input type="number" min="0" placeholder="Number of teams" style={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: "8px", padding: "10px 14px", color: "hsl(var(--foreground))", outline: "none", fontSize: "14px", width: "100%", boxSizing: "border-box" }} />
                  </div>
                  <div style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))", borderRadius: "10px", padding: "16px" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(var(--primary))", marginBottom: "4px" }}>Senior Division</div>
                    <div style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", marginBottom: "12px" }}>Ages 15–18 · 5 students/team</div>
                    <input type="number" min="0" placeholder="Number of teams" style={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: "8px", padding: "10px 14px", color: "hsl(var(--foreground))", outline: "none", fontSize: "14px", width: "100%", boxSizing: "border-box" }} />
                  </div>
                </div>

                <div style={{ gridColumn: "1 / -1", marginTop: "16px" }}>
                  <button type="submit" className="button" style={{ width: "100%", padding: "16px", fontSize: "16px" }}>
                    Register Now <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
