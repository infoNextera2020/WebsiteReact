import { SiteFrame } from "@/components/nextera/site";
import { ArrowRight, Bot, Code, Cpu, GraduationCap, Lightbulb, Trophy } from "lucide-react";
import { Link } from "wouter";
import { Card, Section, CheckList } from "@/components/nextera/primitives";

export default function TechVersePage() {
  return (
    <SiteFrame>
      <main>
        <section className="hero">
          <div className="container hero-content" style={{ textAlign: "center" }}>
            <p className="eyebrow" style={{ justifyContent: "center", marginBottom: "1rem", display: "inline-flex", gap: "8px" }}>
              <Cpu size={16} /> Technology Education & Innovation
            </p>
            <h1 className="display hero-title" style={{ maxWidth: 800, margin: "0 auto 24px" }}>
              TechVerse
            </h1>
            <p className="hero-copy hero-subtitle" style={{ maxWidth: 700, margin: "0 auto 24px" }}>
              TechVerse is a technology education initiative by NextEra Education, focused on providing students with practical learning opportunities in Artificial Intelligence, Programming, and emerging technologies.
            </p>
            <p className="hero-copy hero-subtitle" style={{ maxWidth: 700, margin: "0 auto 40px" }}>
              The initiative combines educational programs with technology competitions, giving students the opportunity to develop technical knowledge and apply it through practical projects and real-world challenges.
            </p>
            <Link href="/admissions" className="button">
              Apply Now <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        <Section 
          title="Schools Programs" 
          subtitle="Empowering the next generation"
          className="dark"
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "40px" }}>
            <Card 
              title="AI & Programming" 
              icon={<Bot size={24} color="hsl(var(--primary))" />}
            >
              <p style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                TechVerse provides technology programs for schools covering Artificial Intelligence and Programming, with content adapted to students' age and learning level.
                <br/><br/>
                The programs focus on developing programming fundamentals, computational thinking, problem-solving skills, and an understanding of AI concepts through practical activities and project-based learning.
              </p>
            </Card>
            <Card 
              title="Programming Programs | Ages 6+" 
              icon={<Code size={24} color="hsl(var(--primary))" />}
            >
              <p style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                Programming programs are available for children starting from 6 years old, introducing students to coding and computational thinking through structured, age-appropriate learning experiences.
              </p>
            </Card>
            <Card 
              title="01 Programs | Ages 12+" 
              icon={<GraduationCap size={24} color="hsl(var(--primary))" />}
            >
              <p style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                For students aged 12 and above, TechVerse offers 01 Programs, providing a more advanced learning pathway in programming and technology. 
                <br/><br/>
                The programs focus on strengthening technical skills, problem-solving, programming, and practical project development.
              </p>
            </Card>
          </div>
        </Section>

        <Section 
          title="Technology Competitions" 
          subtitle="Apply your knowledge and develop solutions to practical challenges."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px", marginTop: "40px" }}>
            <Card 
              title="AI Competition" 
              icon={<Trophy size={24} color="hsl(var(--primary))" />}
            >
              <p style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                The AI Competition provides students with the opportunity to explore Artificial Intelligence and develop technology-based solutions to real-world problems.
                <br/><br/>
                Participants work on projects that demonstrate their understanding of AI concepts, problem-solving abilities, creativity, and technical implementation.
              </p>
            </Card>
            <Card 
              title="IoT Innovation Challenge" 
              icon={<Lightbulb size={24} color="hsl(var(--primary))" />}
            >
              <p style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                The IoT Innovation Challenge focuses on developing innovative solutions using Internet of Things technologies.
                <br/><br/>
                Students design and build IoT-based projects using sensors, connected devices, and software to address challenges in areas such as Smart Agriculture & Water Management, Smart Energy & Environment, and Smart Systems.
                <br/><br/>
                The challenge provides students with practical experience in developing, testing, and presenting technology solutions.
              </p>
            </Card>
          </div>
        </Section>

<Section 
          title="TechVerse at a Glance" 
          subtitle="What to expect from the program"
          className="dark"
        >
          <div style={{ maxWidth: "800px", margin: "40px auto 0" }}>
            <CheckList items={[
              "AI & Programming Programs for schools",
              "Programming Programs starting from age 6",
              "01 Programs for students aged 12+",
              "AI Competition",
              "IoT Innovation Challenge",
              "Practical and project-based learning experiences",
              "Opportunities to apply technical skills through competitions and challenges"
            ]} />
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
              <form className="form-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", padding: "40px", width: "100%" }} onSubmit={(e) => e.preventDefault()}>
                
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
