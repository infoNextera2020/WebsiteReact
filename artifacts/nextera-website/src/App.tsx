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
import { Toaster as SonnerToaster } from "sonner";
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

import HomePage from "./pages/HomePage";
import AdmissionsPage from "./pages/AdmissionsPage";
import AboutPage from "./pages/AboutPage";
import AcademyPage from "./pages/AcademyPage";
import TechVersePage from "./pages/TechVersePage";
import FAQPage from "./pages/FAQPage";
import PartnershipPage from "./pages/PartnershipPage";
import ThankYouPage from "./pages/ThankYouPage";

import { useEffect } from "react";
import { useLocation } from "wouter";

const routeMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "NextEra Education | Next-Gen Coding Academy & Innovation Hub",
    description:
      "NextEra Education is a next-generation coding academy delivering peer-to-peer, project-based tech education with guaranteed employment pathways.",
  },
  "/admissions": {
    title: "Admissions & Piscine | NextEra Education",
    description:
      "Discover the 01 Coding Academy selection process. Learn about the Piscine bootcamp, eligibility criteria, and step-by-step application guidelines.",
  },
  "/about": {
    title: "About Us | NextEra Education",
    description:
      "Learn about NextEra Education's mission, vision, leadership, and our board of trustees driving educational innovation in tech.",
  },
  "/academy": {
    title: "01 Coding Academy | NextEra Education",
    description:
      "Explore our 01 Coding Academy curriculum: full-stack development, AI, cybersecurity, systems engineering, and peer-to-peer pedagogy.",
  },
  "/techverse": {
    title: "TechVerse | NextEra Education",
    description:
      "Join TechVerse by NextEra Education: empowering future innovators in AI, robotics, coding, and transformative tech skills.",
  },
  "/faq": {
    title: "Frequently Asked Questions | NextEra Education",
    description:
      "Find answers to common questions about NextEra Education, tuition, Piscine selection, campus life, and career placement.",
  },
  "/partnership": {
    title: "Partner With Us | NextEra Education",
    description:
      "Collaborate with NextEra Education to hire world-class software engineering talent and shape the future of the global tech workforce.",
  },
  "/thank-you": {
    title: "Thank You | NextEra Education",
    description:
      "Thank you for submitting your application to NextEra Education. Our admissions team has received your information.",
  },
};

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    const meta = routeMetadata[pathname] || {
      title: "NextEra Education | Next-Gen Coding Academy",
      description:
        "NextEra Education — Next-generation peer-to-peer coding academy and innovation hub.",
    };
    document.title = meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", meta.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", meta.description);
    }

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute("content", meta.title);
    }

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute("content", meta.description);
    }

    setTimeout(() => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/admissions" component={AdmissionsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/academy" component={AcademyPage} />
      <Route path="/techverse" component={TechVersePage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/partnership" component={PartnershipPage} />
      <Route path="/thank-you" component={ThankYouPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
        <SonnerToaster position="bottom-right" theme="dark" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
