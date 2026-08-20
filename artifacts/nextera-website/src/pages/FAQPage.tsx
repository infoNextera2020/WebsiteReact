import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteFrame } from "@/components/nextera/site";
import { FAQList } from "./shared";

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