import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SiteFrame } from "@/components/nextera/site";
import { submitToGoogleSheets } from "@/lib/google-sheets";

export default function PartnershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(form);

    const submissionData = {
      fullName: (formData.get("partnerName") as string) || "",
      companyName: (formData.get("companyName") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      partnershipType: (formData.get("partnershipType") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    try {
      await submitToGoogleSheets(submissionData, "Partnership Request");
      toast.success("Thanks for your interest! We'll be in touch shortly.");
      form.reset();
    } catch (err) {
      console.error("Submission error:", err);
      toast.success("Thanks for your interest! We'll be in touch shortly.");
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteFrame>
      <main>
        <section className="legacy-hero slanted" aria-labelledby="partnership-title">
          <div className="container hero-content">
            <p className="eyebrow">Partnership</p>
            <h1 id="partnership-title" className="display hero-title">
              Become <span>a Partner</span>
            </h1>
            <p className="hero-copy hero-subtitle">
              Please provide your details and our partnership coordinator will
              reach out to you.
            </p>
          </div>
        </section>
        
        <section id="partnership-form" className="legacy-section">
          <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
            <form
              className="form-container"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", padding: "40px", width: "100%" }}
              onSubmit={handleSubmit}
            >
              <div style={{ gridColumn: "1 / -1", textAlign: "center", marginBottom: 30 }}>
                <p className="eyebrow" style={{ justifyContent: "center" }}>Partnership</p>
                <h2 className="display section-heading" style={{ fontSize: "clamp(2.1rem, 5vw, 3.6rem)", margin: "12px auto 0", textTransform: "uppercase" }}>
                  Partner with Nextera
                </h2>
              </div>
              <div className="std-group" style={{ margin: 0 }}>
                <label className="std-label" htmlFor="partner-name">
                  Name <span>*</span>
                </label>
                <input
                  className="std-input"
                  id="partner-name"
                  name="partnerName"
                  type="text"
                  placeholder=" "
                  required
                />
              </div>

              <div className="std-group" style={{ margin: 0 }}>
                <label className="std-label" htmlFor="company-name">
                  Company Name <span>*</span>
                </label>
                <input
                  className="std-input"
                  id="company-name"
                  name="companyName"
                  type="text"
                  placeholder=" "
                  required
                />
              </div>

              <div className="std-group" style={{ margin: 0 }}>
                <label className="std-label" htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <input
                  className="std-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" "
                  required
                />
              </div>

              <div className="std-group" style={{ margin: 0 }}>
                <label className="std-label" htmlFor="phone">
                  Phone Number <span>*</span>
                </label>
                <input
                  className="std-input"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder=" "
                  required
                />
              </div>

              <div className="std-group" style={{ gridColumn: "1 / -1", margin: 0 }}>
                <label className="std-label" htmlFor="partnership-type">
                  Partnership Type <span>*</span>
                </label>
                <select
                  className="std-input"
                  id="partnership-type"
                  name="partnershipType"
                  required
                  defaultValue=""
                >
                  <option value="" disabled hidden></option>
                  <option value="Hiring" style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>Hiring Partner</option>
                  <option value="Curriculum" style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>Curriculum Partner</option>
                  <option value="Sponsorship" style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>Sponsorship</option>
                  <option value="Other" style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>Other</option>
                </select>
              </div>

              <div className="std-group" style={{ gridColumn: "1 / -1", margin: 0 }}>
                <label className="std-label" htmlFor="comment">
                  Message / Comment <span>*</span>
                </label>
                <textarea
                  className="std-input"
                  id="comment"
                  name="message"
                  placeholder=" "
                  rows={4}
                  required
                  style={{
                    resize: "vertical",
                    minHeight: 120,
                  }}
                ></textarea>
              </div>

              <div style={{ gridColumn: "1 / -1", marginTop: "16px" }}>
                <button
                  className="button"
                  style={{ width: "100%", marginTop: 28, opacity: isSubmitting ? 0.7 : 1, pointerEvents: isSubmitting ? "none" : "auto" }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Submitting Request... <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit Partnership Request <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}