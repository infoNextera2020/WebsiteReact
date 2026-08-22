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
      projects: ["go-reloaded", "groupie-tracker", "forum", "net-cat"],
    },
    {
      name: "Algorithms & Logic",
      icon: Code,
      level: "Core 02",
      desc: "Data structures, graph pathfinding & optimization",
      projects: ["lem-in", "push-swap", "tetris-optimizer", "linear-stats"],
    },
    {
      name: "AdminSys & Linux",
      icon: Server,
      level: "Core 03",
      desc: "Linux server administration, VM clusters & network security",
      projects: ["linux", "add-vm", "remote-ssh", "network-scan"],
    },
    {
      name: "Web Full-Stack",
      icon: Layers,
      level: "Core 04",
      desc: "Custom reactive DOM, real-time WebSockets & GraphQL",
      projects: ["real-time-forum", "social-network", "mini-framework"],
    },
    {
      name: "Systems & Rust",
      icon: Cpu,
      level: "Core 05",
      desc: "Memory management, raw socket servers & 3D raytracing",
      projects: ["piscine-rust", "0-shell", "localhost", "rt-raytracer"],
    },
  ];

  const specializationBranches = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      role: "AI & ML Engineer",
      icon: Brain,
      badge: "6 Projects",
      desc: "NLP sentiment models, S&P 500 algorithmic trading & predictive scoring",
      projects: ["piscine-ai", "sp500-strategies", "nlp-scraper", "credit-scoring"],
    },
    {
      id: "cyber",
      title: "Cybersecurity",
      role: "Security & Pentest Engineer",
      icon: Shield,
      badge: "11 Projects",
      desc: "Binary exploitation, live malware tracking & cryptographic defense",
      projects: ["web-hack", "injector", "mal-track", "obfuscator", "hole-in-bin"],
    },
    {
      id: "java",
      title: "Java Enterprise",
      role: "Enterprise Software Engineer",
      icon: Coffee,
      badge: "11 Projects",
      desc: "Spring Boot microservices, high-throughput e-commerce & CI/CD",
      projects: ["piscine-java", "buy-01/02", "mr-jenk", "nexus", "neo-4-flix"],
    },
    {
      id: "devops",
      title: "Cloud & DevOps",
      role: "DevOps / SRE Specialist",
      icon: Cloud,
      badge: "7 Projects",
      desc: "Kubernetes cluster orchestration, multi-cloud architecture & Docker",
      projects: ["orchestrator", "cloud-design", "play-with-containers"],
    },
    {
      id: "blockchain",
      title: "Blockchain & Web3",
      role: "Smart Contract Developer",
      icon: Blocks,
      badge: "5 Projects",
      desc: "Solidity smart contracts, layer-2 payment channels & NFT protocols",
      projects: ["piscine-blockchain", "nft-marketplace", "payment-channel"],
    },
    {
      id: "mobile",
      title: "Mobile Applications",
      role: "iOS & Android Engineer",
      icon: Smartphone,
      badge: "7 Projects",
      desc: "Production Flutter apps, end-to-end encrypted chat & WebSocket tickers",
      projects: ["piscine-flutter", "secure-messenger", "stock-market", "sky-map"],
    },
    {
      id: "games",
      title: "Game Dev & 3D",
      role: "Game Engine Programmer",
      icon: Gamepad2,
      badge: "6 Projects",
      desc: "Custom 2D/3D physics engines, multiplayer networking & locomotion AI",
      projects: ["locomotion-core", "multiplayer-fps", "vehicle-physics", "stealth-boom"],
    },
  ];

  return (
    <div
      className="curriculum-tree-container"
      style={{
        width: "100%",
        background: "linear-gradient(180deg, rgba(14, 25, 18, 0.7) 0%, rgba(9, 14, 11, 0.95) 100%)",
        border: "1px solid/hsl(var(--primary) / 0.25)",
        borderRadius: 16,
        padding: "clamp(24px, 4vw, 48px)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
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
          background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
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
            family: "var(--font-mono)",
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
            maxWidth: 680,
            margin: "0 auto",
            color: "hsl(var(--muted-foreground))",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          Every student starts with 5 mandatory core software engineering pillars, mastering real systems before branching into 1 of 7 elite career specializations.
        </p>
      </div>

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
              family: "var(--font-mono)",
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
            <CheckCircle2 size={14} /> Tier 1: Foundational Core (Months 1 – 10)
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              color: "hsl(var(--muted-foreground))",
              family: "var(--font-mono)",
            }}
          >
            5 Mandatory Pillars · 100% Hands-On
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: 14,
          }}
        >
          {foundationPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(18, 30, 22, 0.6)',
                  border: 'qpx solid hsl(var(--primary) / 0.25)',
                  borderRadius: 12,
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      background: 'hsl(var(--primary) / 0.15)',
                      color: 'hsl(var(--primary))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      color: 'hsl(var(--primary))',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      background: 'hsl(var(--primary) / 0.1)',
                      padding: '2px 8px',
                      borderRadius: 4,
                    }}
                  >
                    {pillar.level}
                  </span>
                </div>
                <h4 style={{ margin: '4px 0 0', fontSize: '0.92rem', fontWeight: 700, color: 'hsl(var(--foreground))' }}>
                  {pillar.name}
                </h4>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.45 }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          margin: '28px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div style={{ width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.4) 50%, transparent 100%)' }} />
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 20px',
            borderRadius: 999,
            background: 'hsl(var(--card))',
            border: '1px solid hsl(var(--primary) / 0.4)',
            color: 'hsl(var(--primary))',
            family: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 15px hsl(var(--primary) / 0.15)',
          }}
        >
          <ArrowDown size={14} /> Branching Gateway: Choose 1 of 7 Advanced Specializations <ArrowDown size={14} />
        </div>
        <div style={{ width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.4) 50%, transparent 100%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
          <span style={{ family: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--primary))', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Sparkles size={14} /> Tier 2: Specialized Career Tracks (Months 11 – 24)
          </span>
          <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', family: 'var(--font-mono)' }}>
            Click any branch to inspect key curriculum deliverables
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14 }}>
          {specializationBranches.map((branch) => {
            const Icon = branch.icon;
            const isSelected = selectedBranch === branch.id;
            return (
              <div
                key={branch.id}
                onClick={() => setSelectedBranch(isSelected ? null : branch.id)}
                style={{
                  background: isSelected? 'linear-gradient(135deg, rgba(20, 45, 28, 0.9) 0%, rgba(13, 26, 17, 0.95) 100%)' : 'rgba(16, 24, 18, 0.75)',
                  border: isSelected? '1px solid hsl(var(--primary))' : '1px solid hsl(var(--border))',
                  borderRadius: 12,
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                  boxShadow: isSelected ? '0 10px 30px hsl(var(--primary) / 0.2)' : '0 4px 15px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'hsl(var(--primary) / 0.15)', color: 'hsl(var(--primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 700, color: 'hsl(var(--foreground)' }}>{branch.title}</h4>
                      <span style={{ fontSize: '0.72rem', color: 'hsl(var(--primary))', family: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginTop: 2 }}>{branch.role}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.68rem', color: 'hsl(var(--foreground)', family: 'var(--font-mono)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: 999, whiteSpace: 'nowrap' }}>
                    {branch.badge}
                  </span>
                </div>

                <p style={{ margin: 0, fontSize: '0.84rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.45 }}>
                  {branch.desc}
                </p>

                {isSelected && (
                  <div style={{ marginTop: 4, paddingTop: 10, borderTop: '1px solid hsl(var(--primary) / 0.2)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                      Core Portfolio Deliverables:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {branch.projects.map((proj, pIdx) => (
                        <span key={pIdx} style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', background: 'hsl(var(--primary) / 0.12)', border: '1px solid hsl(var(--primary) / 0.3)', color: 'hsl(var(--foreground))', padding: '2px 8px', borderRadius: 4 }}>
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