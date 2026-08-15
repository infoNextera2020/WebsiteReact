import { Link } from "wouter";
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

export default function AboutPage() {
  const trustees = [
    ["MF", "Mr. Mohamed Farouk"],
    ["AT", "Eng. Ahmed Tarek"],
    ["MA", "Mr. Mokhtar Ahmed"],
    ["OS", "Omar Sayed"],
    ["EG", "Essam Gamal"],
    ["PW", "Pavly Wagih"],
    ["AM", "Anas Moner"],
  ];
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
              <h2 className="display section-heading">More than a campus</h2>
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
              }}
            >
              <img
                src="https://placehold.co/600x400/1a1a1a/4d4d4d?text=Campus+Vibe"
                alt="Campus Vibe"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 16,
                  border: "1px solid hsl(var(--border))",
                  objectFit: "cover",
                }}
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
                gap: "40px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "40px 52px",
                  width: "100%",
                }}
              >
                {trustees.slice(0, 3).map(([initials, name]) => (
                  <div
                    className="board-member"
                    key={name}
                    data-testid={`board-member-${initials}`}
                  >
                    <div
                      className="profile-circle"
                      role="img"
                      aria-label={`${name} initials`}
                    >
                      {initials}
                    </div>
                    <div className="member-name">{name}</div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "40px 52px",
                  width: "100%",
                }}
              >
                {trustees.slice(3).map(([initials, name]) => (
                  <div
                    className="board-member"
                    key={name}
                    data-testid={`board-member-${initials}`}
                  >
                    <div
                      className="profile-circle"
                      role="img"
                      aria-label={`${name} initials`}
                    >
                      {initials}
                    </div>
                    <div className="member-name">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
