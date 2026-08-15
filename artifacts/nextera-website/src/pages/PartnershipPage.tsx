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

export default function PartnershipPage() {
  return (
    <SiteFrame>
      <main>
        <section className="legacy-hero" aria-labelledby="partnership-title">
          <div
            className="container hero-content"
            style={{ textAlign: "center" }}
          >
            <p className="eyebrow">Partnership</p>
            <h1 id="partnership-title" className="display hero-title">
              Become a Partner
            </h1>
            <p
              className="hero-copy hero-subtitle"
              style={{ margin: "0 auto", textAlign: "center" }}
            >
              Please provide your details and our partnership coordinator will
              reach out to you.
            </p>
          </div>
        </section>
        <section className="primitive-section" style={{ paddingBottom: 100 }}>
          <div
            className="container"
            style={{ maxWidth: 640, margin: "0 auto" }}
          >
            <form
              className="form-container"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for your interest!");
              }}
            >
              <div style={{ marginTop: 10 }}>
                <div className="floating-group">
                  <input
                    className="floating-control"
                    id="partner-name"
                    type="text"
                    placeholder=" "
                    required
                  />
                  <label className="floating-label" htmlFor="partner-name">
                    Name <span>*</span>
                  </label>
                </div>

                <div className="floating-group">
                  <input
                    className="floating-control"
                    id="company-name"
                    type="text"
                    placeholder=" "
                    required
                  />
                  <label className="floating-label" htmlFor="company-name">
                    Company Name <span>*</span>
                  </label>
                </div>

                <div className="floating-group">
                  <input
                    className="floating-control"
                    id="email"
                    type="email"
                    placeholder=" "
                    required
                  />
                  <label className="floating-label" htmlFor="email">
                    Email Address <span>*</span>
                  </label>
                </div>

                <div className="floating-group">
                  <input
                    className="floating-control"
                    id="phone"
                    type="tel"
                    placeholder=" "
                    required
                  />
                  <label className="floating-label" htmlFor="phone">
                    Phone Number <span>*</span>
                  </label>
                </div>

                <div className="floating-group">
                  <select
                    className="floating-control"
                    id="partnership-type"
                    required
                    style={{
                      appearance: "none",
                      color: "hsl(var(--foreground))",
                      paddingTop: 18, // Extra padding to clear the label
                    }}
                  >
                    <option value="" disabled selected hidden></option>
                    <option value="Hiring" style={{ color: "initial" }}>
                      Hiring Partner
                    </option>
                    <option value="Curriculum" style={{ color: "initial" }}>
                      Curriculum Partner
                    </option>
                    <option value="Sponsorship" style={{ color: "initial" }}>
                      Sponsorship
                    </option>
                    <option value="Other" style={{ color: "initial" }}>
                      Other
                    </option>
                  </select>
                  <label className="floating-label" htmlFor="partnership-type">
                    Partnership Type <span>*</span>
                  </label>
                </div>

                <div className="floating-group">
                  <textarea
                    className="floating-control"
                    id="comment"
                    placeholder=" "
                    rows={4}
                    required
                    style={{
                      paddingTop: 20,
                      resize: "vertical",
                      minHeight: 120,
                    }}
                  ></textarea>
                  <label className="floating-label" htmlFor="comment">
                    Message / Comment <span>*</span>
                  </label>
                </div>

                <button
                  className="button"
                  style={{
                    width: "100%",
                    marginTop: 12,
                    padding: "16px 0",
                    fontSize: "1.1rem",
                  }}
                  type="submit"
                >
                  Submit Partnership Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
