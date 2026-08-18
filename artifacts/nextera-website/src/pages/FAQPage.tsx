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

export default function FAQPage() {
  return (
    <SiteFrame>
      <main>
        <section className="legacy-hero" aria-labelledby="faq-hero-title">
          <div className="container hero-content">
            <p className="eyebrow">NextEra Education / FAQ</p>
            <h1 id="faq-hero-title" className="display hero-title">
              Questions<span>, answered.</span>
            </h1>
            <p className="hero-copy hero-subtitle">
              Thinking about the next step? Start here for the straight answers
              about our learning model, admissions process and what comes after
              the programme.
            </p>
          </div>
        </section>
        <section
          className="primitive-section"
          aria-labelledby="faq-list-title"
        >
          <div className="primitive-inner">
            <p className="eyebrow">No fine print</p>
            <h2 id="faq-list-title" className="display section-heading">
              Before you dive in
            </h2>
            <div className="faq-container faq-page-container">
              <FAQList />
            </div>
          </div>
        </section>
        <section className="legacy-section faq-cta">
          <div className="container faq-cta-inner">
            <p className="eyebrow">Ready when you are</p>
            <h2 className="display section-heading">
              The best way to understand NextEra is to enter the work.
            </h2>
            <Link href="/admissions#register"
              className="button"
              data-testid="link-faq-apply"
            >
              Start your application <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
