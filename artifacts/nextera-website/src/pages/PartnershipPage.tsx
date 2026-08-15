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
            <p className="hero-copy hero-subtitle">
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
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for your interest!");
              }}
              style={{
                background: "hsl(var(--card))",
                padding: 48,
                borderRadius: 16,
                border: "1px solid hsl(var(--border))",
                boxShadow: "0 12px 35px hsl(var(--shadow-color) / 0.1)",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <input
                  className="floating-control"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  className="floating-control"
                  type="text"
                  placeholder="Company Name"
                  required
                />
                <input
                  className="floating-control"
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  className="floating-control"
                  type="tel"
                  placeholder="Phone"
                  required
                />
                <select
                  className="floating-control"
                  required
                  style={{
                    appearance: "none",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="Hiring">Hiring Partner</option>
                  <option value="Curriculum">Curriculum Partner</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  className="floating-control"
                  placeholder="Comment"
                  rows={4}
                  required
                ></textarea>
                <button
                  className="button"
                  style={{ marginTop: 8 }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
