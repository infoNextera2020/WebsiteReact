import React, { useState } from "react";
import {
  Brain,
  Shield,
  Coffee,
  Cloud,
  Blocks,
  Smartphone,
  Gamepad2,
  Code,
  Terminal,
  Server,
  Layers,
  Sparkles,
  ArrowDown,
  CheckCircle2,
  GitBranch,
  Cpu,
} from "lucide-react";

export function CurriculumTree() {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const foundationPillars = [
    {
      name: "Imperative (Go)",
      icon: Terminal,
      level: "Core 01",
      desc: "CLI tools, concurrency, network sockets & file systems",
      projects: [
        "Go Concurrency & Parsing (go-reloaded)",
        "Interactive Band API Visualizer (groupie-tracker)",
        "Full-Stack Web Forum with SQLite (forum)",
        "TCP Socket Group Chat Server (net-cat)",
      ],
    },
    {
      name: "Algorithms & Logic",
      icon: Code,
      level: "Core 02",
      desc: "Data structures, graph pathfinding & algorithmic optimization",
      projects: [
        "Graph Flow Pathfinding Optimizer (lem-in)",
        "Two-Stack Sorting Algorithm (push-swap)",
        "Recursive Polyomino Packing (tetris-optimizer)",
        "Statistical Linear Regression (linear-stats)",
      ],
    },
    {
      name: "AdminSys & Linux",
      icon: Server,
      level: "Core 03",
      desc: "Linux server administration, VM clusters & network security",
      projects: [
        "Linux Server Provisioning & VM Virtualization (linux / add-vm)",
        "Remote SSH Bastion Architecture (remote-ssh)",
        "Network Packet & Port Scanner (network-scan)",
      ],
    },
    {
      name: "Web Full-Stack",
      icon: Layers,
      level: "Core 04",
      desc: "Custom reactive DOM, real-time WebSockets & GraphQL APIs",
      projects: [
        "Real-Time WebSocket Forum (real-time-forum)",
        "Full-Scale Social Network Platform (social-network)",
        "Custom Reactive DOM Framework (mini-framework)",
      ],
    },
    {
      name: "Systems & Rust",
      icon: Cpu,
      level: "Core 05",
      desc: "Memory management, raw socket servers & 3D raytracing",
      projects: [
        "Custom UNIX Shell in Rust (0-shell / piscine-rust)",
        "HTTP/1.1 Socket Web Server (localhost)",
        "Multi-Threaded 3D Raytracer (rt-raytracer)",
      ],
    },
  ];

  const specializationBranches = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      role: "AI / Machine Learning Engineer",
      icon: Brain,
      badge: "6 Projects",
      desc: "Develop predictive ML pipelines, NLP sentiment analyzers, quantitative trading models (S&P 500), credit risk scoring engines, and neural vision networks.",
      projects: [
        "Predictive ML & Neural Nets (piscine-ai)",
        "S&P 500 Quantitative Trading (sp500)",
        "NLP Scraper & Sentiment Analyzer (nlp-scraper)",
        "Explainable Credit Scoring Risk Engine (credit-scoring)",
      ],
    },
    {
      id: "cyber",
      title: "Cybersecurity & Defense",
      role: "Security Engineer / Penetration Tester",
      icon: Shield,
      badge: "11 Projects",
      desc: "Perform active penetration testing, binary exploitation, live malware analysis, cryptographic protocol auditing, and offensive/defensive network forensics.",
      projects: [
        "Web App Penetration & SQLi/XSS (web-hack)",
        "Binary Exploitation & Buffer Overflow Lab (hole-in-bin)",
        "Live Malware Analysis & Eradication (mal-track)",
        "Code Obfuscation & Evasion (obfuscator)",
        "Process Injection & Dynamic Patching (injector)",
      ],
    },
    {
      id: "java",
      title: "Java Enterprise Systems",
      role: "Enterprise Software Engineer",
      icon: Coffee,
      badge: "11 Projects",
      desc: "Engineer production-grade backends using Spring Boot, Angular, transactional high-volume e-commerce architectures, and automated CI/CD pipelines.",
      projects: [
        "Spring Boot & Angular E-Commerce (buy-01/02)",
        "Jenkins Automated CI/CD Pipeline (mr-jenk)",
        "Neo4j Graph Recommendation Engine (neo-4-flix)",
        "Microservices Service Registry (nexus)",
        "Java OOP & Spring Core (piscine-java)",
      ],
    },
    {
      id: "devops",
      title: "Cloud & DevOps",
      role: "DevOps & Cloud Infrastructure Engineer",
      icon: Cloud,
      badge: "7 Projects",
      desc: "Architect scalable multi-cloud infrastructure, automate Kubernetes container orchestration, manage Docker environments, and build zero-downtime deployment pipelines.",
      projects: [
        "Terraform AWS Microservices (cloud-design)",
        "Multi-Service Docker Architecture (play-with-containers)",
        "Kubernetes Cluster Orchestrator (orchestrator)",
      ],
    },
    {
      id: "blockchain",
      title: "Blockchain & Web3",
      role: "Blockchain & Smart Contract Developer",
      icon: Blocks,
      badge: "5 Projects",
      desc: "Build decentralized applications (dApps), write and audit Solidity smart contracts, implement layer-2 payment channels, and build Web3 financial protocols.",
      projects: [
        "Decentralized NFT Marketplace (nft-marketplace)",
        "Layer-2 Off-Chain Payment Channel (payment-channel)",
        "Cryptographic Blockchain Core (piscine-blockchain)",
      ],
    },
    {
      id: "mobile",
      title: "Mobile Applications",
      role: "Mobile Application Engineer (iOS & Android)",
      icon: Smartphone,
      badge: "7 Projects",
      desc: "Ship production-ready Flutter and cross-platform apps featuring end-to-end encrypted messaging, real-time WebSocket market feeds, and native hardware integrations.",
      projects: [
        "Real-Time AR Celestial Sky Map (sky-map)",
        "End-to-End Encrypted Messenger (secure-messenger)",
        "Live Stock Market WebSocket Ticker (stock-market)",
        "Cross-Platform Flutter Core (piscine-flutter)",
      ],
    },
    {
      id: "games",
      title: "Game Development & 3D",
      role: "Game Developer / Graphics Programmer",
      icon: Gamepad2,
      badge: "6 Projects",
      desc: "Develop custom 2D/3D physics engines, real-time multiplayer FPS networking with client-side prediction, and advanced 3D raytracing graphics pipelines.",
      projects: [
        "Dynamic Character Locomotion Engine (locomotion-core)",
        "Multiplayer FPS with Server Reconciliation (multiplayer-fps)",
        "Rigid-Body Vehicle Simulation (vehicle-physics)",
        "Stealth Combat AI Simulator (stealth-boom)",
      ],
    },
  ];

  return (
    <div
      className="curriculum-tree-container"
      style={{
        width: "100%",
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: 16,
        padding: "clamp(24px, 4vw, 48px)",
        boxShadow: "0 12px 36px rgba(0,0,0,0.06)",
        marginBottom: 48,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ textAlign: "center", position: "relative", zIndex: 1, marginBottom: 36 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            background: "hsl(var(--primary) / 0.1)",
            border: "1px solid hsl(var(--primary) / 0.3)",
            color: "hsl(var(--primary))",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          <GitBranch size={16} /> NextEra Curriculum Architecture
        </div>
        <h3
          className="display"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            margin: "0 0 12px",
            color: "hsl(var(--foreground))",
          }}
        >
          From Foundation Pillars to <span style={{ color: "hsl(var(--primary))" }}>Specialized Mastery</span>
        </h3>
        <p
          style={{
            maxWidth: 720,
            margin: "0 auto",
            color: "hsl(var(--muted-foreground))",
            fontSize: "0.98rem",
            lineHeight: 1.6,
          }}
        >
          Every student starts with 5 mandatory core software engineering pillars, building real production systems before branching into 1 of 7 elite career specializations.
        </p>
      </div>

      {/* TIER 1: FOUNDATIONAL CORE PILLARS (Months 1-18) */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "hsl(var(--primary))",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <CheckCircle2 size={14} /> Tier 1: Foundational Core (Months 1 – 18)
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              color: "hsl(var(--muted-foreground))",
              fontFamily: "var(--font-mono)",
            }}
          >
            5 Mandatory Pillars · 100% Hands-On
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 14,
          }}
        >
          {foundationPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                style={{
                  background: "hsl(var(--secondary) / 0.4)",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 12,
                  padding: "18px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  transition: "all 0.25s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      background: "hsl(var(--primary) / 0.12)",
                      color: "hsl(var(--primary))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={17} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "hsl(var(--primary))",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      background: "hsl(var(--primary) / 0.1)",
                      border: "1px solid hsl(var(--primary) / 0.2)",
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {pillar.level}
                  </span>
                </div>
                <h4
                  style={{
                    margin: "4px 0 0",
                    fontSize: "0.94rem",
                    fontWeight: 700,
                    color: "hsl(var(--foreground))",
                  }}
                >
                  {pillar.name}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.82rem",
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: 1.45,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONNECTOR / GATEWAY (Month 18 Gateway) */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          margin: "28px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.5) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 20px",
            borderRadius: 999,
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--primary) / 0.4)",
            color: "hsl(var(--primary))",
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            boxShadow: "0 4px 15px hsl(var(--primary) / 0.12)",
          }}
        >
          <ArrowDown size={14} /> Month 18 Gateway: Choose 1 of 7 Advanced Specializations <ArrowDown size={14} />
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.5) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* TIER 2: 7 ADVANCED SPECIALIZATION BRANCHES (Months 18-24) */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "hsl(var(--primary))",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Sparkles size={14} /> Tier 2: Specialized Career Tracks (Months 18 – 24)
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              color: "hsl(var(--muted-foreground))",
              fontFamily: "var(--font-mono)",
            }}
          >
            Click any branch to inspect key curriculum deliverables
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {specializationBranches.map((branch) => {
            const Icon = branch.icon;
            const isSelected = selectedBranch === branch.id;
            return (
              <div
                key={branch.id}
                onClick={() => setSelectedBranch(isSelected ? null : branch.id)}
                style={{
                  background: isSelected
                    ? "hsl(var(--primary) / 0.08)"
                    : "hsl(var(--secondary) / 0.4)",
                  border: isSelected
                    ? "1px solid hsl(var(--primary))"
                    : "1px solid hsl(var(--border))",
                  borderRadius: 12,
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  transform: isSelected ? "translateY(-2px)" : "none",
                  boxShadow: isSelected
                    ? "0 8px 24px hsl(var(--primary) / 0.15)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 8,
                        background: "hsl(var(--primary) / 0.15)",
                        color: "hsl(var(--primary))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={19} />
                    </div>
                    <div>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "hsl(var(--foreground))",
                        }}
                      >
                        {branch.title}
                      </h4>
                      <span
                        style={{
                          fontSize: "0.74rem",
                          color: "hsl(var(--primary))",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          display: "block",
                          marginTop: 2,
                        }}
                      >
                        {branch.role}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "hsl(var(--foreground))",
                      fontFamily: "var(--font-mono)",
                      background: "hsl(var(--secondary))",
                      border: "1px solid hsl(var(--border))",
                      padding: "2px 8px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                      fontWeight: 600,
                    }}
                  >
                    {branch.badge}
                  </span>
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: "0.86rem",
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: 1.5,
                  }}
                >
                  {branch.desc}
                </p>

                {isSelected && (
                  <div
                    style={{
                      marginTop: 4,
                      paddingTop: 12,
                      borderTop: "1px solid hsl(var(--primary) / 0.2)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-mono)",
                        color: "hsl(var(--primary))",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 700,
                      }}
                    >
                      Core Portfolio Deliverables:
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {branch.projects.map((proj, pIdx) => (
                        <span
                          key={pIdx}
                          style={{
                            fontSize: "0.74rem",
                            fontFamily: "var(--font-mono)",
                            background: "hsl(var(--primary) / 0.1)",
                            border: "1px solid hsl(var(--primary) / 0.25)",
                            color: "hsl(var(--foreground))",
                            padding: "4px 10px",
                            borderRadius: 6,
                          }}
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}