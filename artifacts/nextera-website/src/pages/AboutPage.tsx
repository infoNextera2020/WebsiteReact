import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteFrame } from "@/components/nextera/site";

interface Person {
  initials: string;
  name: string;
  image?: string;
  position?: string;
  linkedin?: string;
  objectPosition?: string;
}

export default function AboutPage() {
  const trustees: Person[] = [
    { initials: "MF", name: "Mr. Mohamed Farouk", image: "/trustee-1.jpg", position: "Chairman and Board Member" },
    { initials: "AT", name: "Eng. Ahmed Tarek", image: "/trustee-2.jpg", position: "Board Member" },
    { initials: "ML", name: "Eng. Mostafa Abdel Latif", image: "/mostafa-abdel-latif.jpg", position: "CEO and Board Member" },
    { initials: "MA", name: "Mr. Mokhtar Ahmed", image: "/trustee-3.jpg", position: "COO and Board Member", linkedin: "https://www.linkedin.com/in/mokhtar-ahmed-mokhtar-421130253/" },
  ];

  const teamRow1: Person[] = [
    { initials: "OS", name: "Eng. Omar Sayed", image: "/Omar Sayed.png", position: "Managing Director", linkedin: "https://www.linkedin.com/in/omar-sayed-18926919b/" },
    { initials: "EG", name: "Essam Gamal", image: "/Essam Gamal.jpeg", position: "Marketing Director", linkedin: "https://www.linkedin.com/in/essamgamal/" },
  ];

  const teamRow2: Person[] = [
    { initials: "PW", name: "Pavly Wagih", image: "/Pavly Wagih.jpeg", position: "Operation Lead", linkedin: "https://www.linkedin.com/in/pavly-wagih-01a677277/" },
    { initials: "AM", name: "Anas Moner", image: "/Anas Moner.jpg", position: "Tech Lead", linkedin: "https://www.linkedin.com/in/anasmoner/" },
    { initials: "MM", name: "Manar Mohamed", image: "/Manar Mohamed.jpeg", position: "Project Lead", linkedin: "https://www.linkedin.com/in/manar-mohamed-2134ba181/", objectPosition: "center 15%" },
    { initials: "WE", name: "Wagdy Elshafei", image: "/Wagdy Elshafei.jpeg", position: "Sales Team Leader", linkedin: "https://www.linkedin.com/in/wagdy-elshafei-620655189/", objectPosition: "center 20%" },
  ];

  const teamRow3: Person[] = [
    { initials: "AK", name: "Abdelrahman Kamal", image: "/Abdelrahman Kamal.jpg", position: "Tech Mentor", objectPosition: "center 20%" },
    { initials: "SE", name: "Shahd ElGanzoury", image: "/Shahd Bahaa.png", position: "Tech Mentor", linkedin: "https://www.linkedin.com/in/shahd-elganzoury-168411379/", objectPosition: "center 20%" },
    { initials: "SA", name: "Sohila Ayman", image: "/Sohila Ayman.jpg", position: "Tech Mentor", linkedin: "https://www.linkedin.com/in/sohilaayman/", objectPosition: "center 20%" },
    { initials: "FM", name: "Fatma Moutaz", image: "/Fatma Moutaz.jpeg", position: "Tech Mentor", linkedin: "https://www.linkedin.com/in/fatma-moutaz-b779711b3/", objectPosition: "center 15%" },
  ];

  const teamRow4: Person[] = [
    { initials: "AA", name: "Aya Ahmed", image: "/Aya Ahmed.jpeg", position: "B2B/B2C Sales", linkedin: "https://www.linkedin.com/in/aya-ahmed-95a0831b6/", objectPosition: "center 20%" },
    { initials: "ML", name: "Mohamed Lasheen", image: "/Mohamed Lasheen.jpeg", position: "Accounting Supervisor", linkedin: "https://www.linkedin.com/in/mohamed-lasheen-820001165/", objectPosition: "center 20%" },
    { initials: "MA", name: "Merna Ayman", image: "/Merna Ayman.jpeg", position: "HR Generalist", linkedin: "https://www.linkedin.com/in/merna-ayman-2276951b5/", objectPosition: "center 20%" },
  ];

  const renderTrustee = (person: Person) => {
    const card = (
      <div
        className="board-member"
        key={person.name}
        data-testid={`board-member-${person.initials}`}
        style={{
          cursor: person.linkedin ? "pointer" : "default",
          flex: "0 1 240px",
          width: 240,
        }}
      >
        {person.image ? (
          <div
            className="profile-circle"
            style={{
              width: 190,
              height: 190,
              borderWidth: 5,
              padding: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={person.image}
              alt={person.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: person.objectPosition || "center 20%",
              }}
            />
          </div>
        ) : (
          <div
            className="profile-circle"
            role="img"
            aria-label={`${person.name} initials`}
            style={{
              width: 190,
              height: 190,
              borderWidth: 5,
              fontSize: "2.6rem",
            }}
          >
            {person.initials}
          </div>
        )}
        <div className="member-name" style={{ fontSize: "1.18rem", marginTop: 18 }}>
          {person.name}
        </div>
        {person.position && (
          <div
            className="member-position"
            style={{
              fontSize: "0.95rem",
              color: "hsl(var(--muted-foreground))",
              marginTop: 6,
              fontWeight: 500,
            }}
          >
            {person.position}
          </div>
        )}
      </div>
    );

    return person.linkedin ? (
      <a
        key={person.name}
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "inline-block",
        }}
        title={`View ${person.name}'s LinkedIn`}
      >
        {card}
      </a>
    ) : (
      card
    );
  };
  const renderMember = (person: Person) => {
    const card = (
      <div
        className="board-member"
        key={person.name}
        data-testid={`team-member-${person.initials}`}
        style={{ cursor: person.linkedin ? "pointer" : "default" }}
      >
        {person.image ? (
          <div
            className="profile-circle"
            style={{ padding: 0, overflow: "hidden" }}
          >
            <img
              src={person.image}
              alt={person.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: person.objectPosition || "center 20%",
              }}
            />
          </div>
        ) : (
          <div
            className="profile-circle"
            role="img"
            aria-label={`${person.name} initials`}
          >
            {person.initials}
          </div>
        )}
        <div className="member-name">{person.name}</div>
        {person.position && (
          <div
            className="member-position"
            style={{
              fontSize: "0.9rem",
              color: "hsl(var(--muted-foreground))",
              marginTop: 4,
              fontWeight: 500,
            }}
          >
            {person.position}
          </div>
        )}
      </div>
    );

    return person.linkedin ? (
      <a
        key={person.name}
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "inline-block",
        }}
        title={`View ${person.name}'s LinkedIn`}
      >
        {card}
      </a>
    ) : (
      card
    );
  };

  return (
    <SiteFrame>
      <main>
        <section className="legacy-hero slanted">
          <div className="container hero-content">
            <p className="eyebrow">NextEra Education</p>
            <h1 className="display hero-title">
              About <span>Us</span>
            </h1>
            <p className="hero-copy hero-subtitle">
              At NextEra Education we are leading an educational revolution
              bridging the space where traditional learning ends and real world
              career success begins.
            </p>
          </div>
        </section>
        <section className="legacy-section" aria-labelledby="vision-title">
          <div className="container">
            <div className="card-grid two">
              <article className="legacy-list-card">
                <h2 id="vision-title" className="card-title">
                  Our Vision
                </h2>
                <p className="card-body">
                  We're working toward an education system where the gap between
                  finishing your learning and being ready for real work simply
                  doesn't exist, where what you can build speaks before what you
                  can present and where every learner whatever their starting
                  point has a genuine path to the opportunities ahead of them.
                </p>
              </article>
              <article className="legacy-list-card">
                <h2 className="card-title">Our Mission</h2>
                <p className="card-body">
                  To equip students and professionals with the technical
                  literacy, practical experience and adaptability required to
                  thrive in a rapidly shifting digital economy.
                </p>
              </article>
            </div>
            <div className="how-card">
              <h2>How We Do It</h2>
              <ul>
                <li>
                  <strong>AI Powered Learning:</strong> Personalizing education
                  across our programs so every learner masters skills
                  effectively and efficiently.
                </li>
                <li>
                  <strong>Peer-to-Peer Mastery:</strong> Through our exclusive
                  partnership with 01 Talent, we deliver 100% project-based,
                  teacher-less coding education.
                </li>
                <li>
                  <strong>Industry Alignment:</strong> Partnering with top
                  companies and global institutions to deliver curricula that
                  match real workforce needs.
                </li>
                <li>
                  <strong>Career Focused Programs:</strong> Turning knowledge
                  into actionable skills that open doors to lasting professional
                  growth.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="legacy-section">
          <div className="container campus-split">
            <div className="campus-copy">
              <p className="eyebrow">Campus vibe</p>
              <h2 className="display section-heading">More than a <span>campus</span></h2>
              <p>
                NextEra isn't just a place to code—it’s an innovation hub. With
                24/7 access, you decide when you work best. Collaborate in open
                zones, compete in weekend hackathons, and network with industry
                leaders at our exclusive milestone events.
              </p>
              <Link href="/admissions#register"
                className="button"
                data-testid="link-campus-apply"
              >
                Start the game <ArrowRight size={15} />
              </Link>
            </div>
            <div
              className="campus-image-placeholder"
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 450,
              }}
            >
              <img
                src="/about-campus.jpg"
                alt="Campus Vibe"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                  borderRadius: 16,
                  border: "1px solid hsl(var(--border))",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section
          className="legacy-section band"
          aria-labelledby="trustees-title"
        >
          <div className="container">
            <p className="eyebrow">Leadership</p>
            <h2 id="trustees-title" className="display section-heading">
              Meet Our Board of Trustees
            </h2>
            <p className="section-intro">
              Our esteemed Board of Trustees brings a wealth of expertise and
              leadership to guide our mission and vision. Their dedication
              ensures the success and integrity of our platform.
            </p>
            <div
              className="board-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "48px",
                width: "100%",
                marginTop: 44,
              }}
            >
              {/* Row 1: Mr. Mohamed Farouk & Eng. Ahmed Tarek */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "40px 64px",
                  width: "100%",
                }}
              >
                {trustees.slice(0, 2).map(renderTrustee)}
              </div>

              {/* Row 2: Eng. Mostafa Abdel Latif & Mr. Mokhtar Ahmed */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "40px 64px",
                  width: "100%",
                }}
              >
                {trustees.slice(2, 4).map(renderTrustee)}
              </div>
            </div>
          </div>
        </section>
        <section
          className="legacy-section"
          aria-labelledby="team-title"
        >
          <div className="container">
            <p className="eyebrow">Team</p>
            <h2 id="team-title" className="display section-heading">
              Meet Our Team
            </h2>
            <p className="section-intro">
              The dedicated team driving NextEra's operations, technology, and educational innovation.
            </p>
            <div
              className="board-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "44px",
                width: "100%",
                marginTop: 40,
              }}
            >
              {/* Row 1: Eng. Omar Sayed & Essam Gamal */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "40px 52px",
                  width: "100%",
                }}
              >
                {teamRow1.map(renderMember)}
              </div>

              {/* Row 2: Pavly Wagih, Anas Moner, Manar Mohamed, Wagdy Elshafei */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "40px 52px",
                  width: "100%",
                }}
              >
                {teamRow2.map(renderMember)}
              </div>

              {/* Row 3: Abdelrahman Kamal, Shahd ElGanzoury, Sohila Ayman, Fatma Moutaz */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "40px 52px",
                  width: "100%",
                }}
              >
                {teamRow3.map(renderMember)}
              </div>

              {/* Row 4: Aya Ahmed, Mohamed Lasheen, Merna Ayman */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "40px 52px",
                  width: "100%",
                }}
              >
                {teamRow4.map(renderMember)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}