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

export const featureStories = [
  {
    id: "projects",
    number: "100%",
    label: "Project Based Learning",
    kicker: "Build first",
    intro: "You do not learn the work before you do the work.",
    detail:
      "Every concept becomes something you can run, break, explain and ship. The brief is real, the constraints are real, and your portfolio grows as proof that you can solve problems without a step-by-step script.",
    outcomes: [
      "Ship working software",
      "Learn by solving real constraints",
      "Leave with proof, not just notes",
    ],
  },
  {
    id: "peers",
    number: "100%",
    label: "Peer to Peer Collaboration",
    kicker: "Learn together",
    intro: "Your fastest feedback loop is the person working beside you.",
    detail:
      "There are no isolated classrooms here. You review code, defend your decisions, ask for help and teach what you just figured out. Collaboration is not an extra module — it is how every day works.",
    outcomes: [
      "Give and receive useful feedback",
      "Build communication under pressure",
      "Grow through shared ownership",
    ],
  },
  {
    id: "technology",
    number: "REAL",
    label: "Technology Projects",
    kicker: "Stay current",
    intro: "The tools change. The ability to understand them is the advantage.",
    detail:
      "From systems and APIs to AI, cybersecurity and connected devices, you work with the kind of technology teams use to create, operate and improve products in the real world.",
    outcomes: [
      "Work across modern technology",
      "Understand what sits underneath the tools",
      "Adapt as the industry moves",
    ],
  },
  {
    id: "future",
    number: "FUTURE",
    label: "Ready Skills",
    kicker: "Go further",
    intro: "Build the judgement to keep learning after the programme ends.",
    detail:
      "NextEra is designed for the moment after graduation too. You leave with the habits to research unfamiliar problems, collaborate with confidence and keep your skills useful in a changing digital economy.",
    outcomes: [
      "Think like an engineer",
      "Build a career-ready portfolio",
      "Keep growing beyond the curriculum",
    ],
  },
];

export const faqItems = [
  {
    question:
      "Do I need any prior programming knowledge or a technical background to join?",
    answer:
      "No prior coding experience is required! Our curriculum is designed to take complete beginners from ground zero to job-ready software engineers. We welcome applicants from all academic and professional backgrounds—including law, engineering, arts, commerce, and human sciences. What truly matters is your logical mindset, curiosity, drive, and commitment to learning.",
  },
  {
    question: "What are the admission steps to get accepted into Next Era?",
    answer:
      "The admission journey consists of three straightforward, exciting stages: 1. Online Logic Assessment: An interactive online logic test evaluating your analytical reasoning (no prior programming needed). 2. The Piscine (4-Week Bootcamp): An immersive, hands-on coding bootcamp where you build real projects. 3. Main Cohort Enrollment: Candidates who pass the Piscine are officially admitted into the core curriculum.",
  },
  {
    question:
      "Is there an age limit or specific degree required for application?",
    answer:
      "No, anyone can apply. There are no formal university degree requirements or rigid academic prerequisites. Your talent, dedication, and practical project output speak louder than any formal certificate.",
  },
  {
    question: "How long is the 01 Coding Academy programme?",
    answer:
      "The full path takes two years: 18 months of full-stack foundations followed by six months in a technology specialisation such as AI, cybersecurity, mobile applications, cloud DevOps or video games.",
  },
  {
    question: "What are the payment and installment options?",
    answer:
      "We believe finance should never be a barrier to growth. We offer flexible installment plans ranging from 6 months up to 2 years through our trusted payment partners—including Lime, EduCash, and Banque Misr—making the programme accessible and manageable.",
  },
  {
    question:
      "Do I have to wait until graduation to start working in the tech industry?",
    answer:
      "Absolutely not! At Next Era, your career path is completely self-paced and performance-driven. If you come in with a prior background, or if you demonstrate exceptional commitment and advance rapidly, you can become job-ready and land full-time tech roles or high-value freelance projects in as little as 6 to 7 months!",
  },
  {
    question:
      "How does Next Era help me land a software engineering job so early?",
    answer:
      "Because our curriculum is 100% practical and project-based, by month 6 or 7 you will have already engineered real-world software applications, tackled complex backend systems, and mastered algorithmic problem-solving. This hands-on portfolio gives you a massive advantage.",
  },
  {
    question: "Does Next Era guarantee job placement upon graduation?",
    answer:
      "Yes! Next Era provides a robust job guarantee framework for students who complete the required curriculum milestones, pass code audits, and maintain strong performance standards. We actively connect our graduates directly with top-tier hiring partners.",
  },
  {
    question:
      "What kind of career coaching and interview preparation will I receive?",
    answer:
      "Throughout your journey, you will receive personalized career support including: Professional technical resume and GitHub portfolio optimization, Intensive mock technical interviews and system design practice, Soft skills coaching, and Direct recruitment matching.",
  },
  {
    question: "What specific job titles will I be qualified for?",
    answer:
      "Depending on your specialization tracks, you will be qualified for high-demand tech roles including Full-Stack Developer, Backend Software Engineer, Frontend Engineer, DevOps Engineer, Mobile Developer, and Data Engineer.",
  },
  {
    question: "Where is the Next Era campus located?",
    answer:
      "Our campus is located in the heart of Heliopolis (Masr El Gedida), Cairo, on Ibn Sandar Street. The facility features state-of-the-art infrastructure, high-speed fiber internet, ergonomic collaborative work zones, and dedicated project rooms.",
  },
  {
    question: "Is daily attendance on campus mandatory?",
    answer:
      "Next Era offers a flexible, hybrid-friendly environment. While learning is self-paced and accessible, spending time on campus is where the true excitement happens. Specific mandatory on-site days apply during intensive bootcamps like the 4-week Piscine.",
  },
  {
    question:
      "How does peer-to-peer learning work without traditional teachers?",
    answer:
      "We replace passive lectures with an active, project-driven methodology. You learn by building real software from scratch, reading official documentation, debugging complex code, and evaluating peer projects. This builds self-reliance and adaptability.",
  },
  {
    question:
      "What is the role of Mentors if there are no conventional teachers?",
    answer:
      "Mentors are available both on-site at the campus and online to act as your technical guides and strategic facilitators. Instead of lecturing, they help you unblock complex architectural hurdles, review code quality, and provide actionable feedback.",
  },
  {
    question:
      "What makes the Next Era community and student journey so special?",
    answer:
      "You become part of a vibrant community of ambitious, like-minded peers who share knowledge, collaborate on innovative ideas, and celebrate each other's breakthroughs. From late-night debugging sessions to hackathons, your journey builds lifelong friendships.",
  },
  {
    question: "What happens if I get stuck on a difficult programming problem?",
    answer:
      "You are never alone! Whenever you hit a technical roadblock, you follow our proven 3-step growth mindset: 1. Research & Debug. 2. Peer Collaboration (brainstorm with fellow students). 3. Mentor Consultation (reach out for targeted guidance).",
  },
  {
    question: "What are Quests and how are they evaluated?",
    answer:
      "Quests are individual tasks designed to help you master specific coding concepts and algorithms. Each quest contains instructional videos followed by practical coding tasks. Quests are graded on a 5-star scale; you must successfully pass each task before unlocking the next concept.",
  },
  {
    question: "What are Checkpoints and how are they evaluated?",
    answer:
      "Checkpoints are timed coding assessments held at the end of each week (Thursday & Friday on campus). They test the knowledge gained from that week’s quests under exam constraints to evaluate individual retention, problem-solving speed, and core mastery without peer assistance.",
  },
  {
    question: "What are Raids and how are they evaluated?",
    answer:
      "Raids are intensive weekend group projects where you collaborate in teams of 2 to 3 students to build a full project against the clock. Evaluation is based on team collaboration, code functionality, architectural efficiency, and clarity.",
  },
  {
    question: "What happens after I finish?",
    answer:
      "You graduate with a professional portfolio, a technology specialisation and career support connected to global opportunities with top tech companies.",
  },
];

export function FeatureExplorer() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const activeFeature = hoveredFeature ?? selectedFeature;
  const story = featureStories[activeFeature];

  return (
    <div className="feature-explorer">
      <div
        className="feature-grid"
        role="list"
        aria-label="Why NextEra Education"
      >
        {featureStories.map((feature, index) => (
          <button
            className={`feature-card${activeFeature === index ? " is-active" : ""}`}
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
            <span className="feature-kicker">
              0{index + 1} / {feature.kicker}
            </span>
            <span className="feature-label">{feature.label}</span>
            <span className="feature-arrow" aria-hidden="true">
              <ArrowRight size={17} />
            </span>
          </button>
        ))}
      </div>
      <div
        className="feature-detail-panel"
        id="feature-detail-panel"
        aria-live="polite"
      >
        <div className="feature-detail-content" key={story.id}>
          <div>
            <p className="feature-detail-kicker">Inside / {story.label}</p>
            <h3 className="feature-detail-title">{story.intro}</h3>
            <p className="feature-detail-copy">{story.detail}</p>
          </div>
          <ul className="feature-outcomes">
            {story.outcomes.map((outcome) => (
              <li key={outcome}>
                <span aria-hidden="true">+</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FAQList({
  className = "",
  limit,
}: {
  className?: string;
  limit?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = limit ? faqItems.slice(0, limit) : faqItems;
  return (
    <div className={`faq-list ${className}`.trim()}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="faq-item" key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                fontWeight: 700,
                textAlign: "left",
                fontFamily: "inherit",
                fontSize: "inherit",
              }}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  flexShrink: 0,
                  marginLeft: 16,
                }}
              />
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition:
                  "grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: "12px 0 8px 0",
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: 1.6,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const dayInLife = [
  {
    time: "09:00",
    label: "Challenge drop",
    detail: "The day's exercises unlock. No brief, no lecture.",
  },
  {
    time: "11:00",
    label: "Swarm & research",
    detail: "Docs, man pages, whiteboards, and the person next to you.",
  },
  {
    time: "14:00",
    label: "Peer reviews",
    detail: "Defend your code line by line. Review someone else's.",
  },
  {
    time: "17:00",
    label: "Push & audit",
    detail: "Submit, get audited, patch what broke.",
  },
  {
    time: "20:00",
    label: "Community projects",
    detail: "Side builds, rush prep, and the stuff you do for fun.",
  },
];

export const partners = [
  {
    name: "Nok",
    fullName: "Nok Human Capital",
    url: "https://nokhc.net/",
    logo: "/partners/nok.png",
    className: "logo-nok",
  },
  {
    name: "Gramian",
    fullName: "Gramian Consultancy Group",
    url: "https://gramianconsulting.com/",
    logo: "/partners/gramian.png",
    className: "logo-gramian",
  },
  {
    name: "HiRemoters",
    fullName: "HiRemoters",
    url: "https://hiremoters.ai/",
    logo: "/partners/hiremoters.png",
    className: "logo-hiremoters",
  },
  {
    name: "Quantum",
    fullName: "Quantum HR",
    url: "https://quantumhr.co/",
    logo: "/partners/quantum.png",
    className: "logo-quantum",
  },
  {
    name: "Magnet",
    fullName: "Magnet Empowering Organizations",
    url: "https://b-magnet.com/",
    logo: "/partners/magnet.png",
    className: "logo-magnet",
  },
];
