import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, X } from "lucide-react";
import { usePiscineStudentCount } from "@/lib/piscine-tracker";

// Storage mode: 'session' (reappears once per new visit/browser session)
// Can be toggled to 'local' for permanent suppression across all visits
const STORAGE_TYPE: "session" | "local" = "session";
const STORAGE_KEY = "nextera_piscine_modal_seen";

export function PiscinePromoModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { count, progressPercent } = usePiscineStudentCount();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Countdown timer to Piscine 10: 22/11/2026 09:00:00 (Cairo UTC+2)
  useEffect(() => {
    const targetDate = new Date("2026-11-22T09:00:00+02:00").getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // First-time visitor detection (2-second delay on first entry)
  useEffect(() => {
    if (typeof window === "undefined") return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    try {
      const storage = STORAGE_TYPE === "session" ? window.sessionStorage : window.localStorage;
      const alreadySeen = storage.getItem(STORAGE_KEY);

      if (!alreadySeen) {
        timer = setTimeout(() => {
          const dialog = dialogRef.current;
          if (dialog && !dialog.open) {
            dialog.showModal();
            setIsOpen(true);
            // Mark as seen so they are not interrupted again during this session
            storage.setItem(STORAGE_KEY, "true");
          }
        }, 2000);
      }
    } catch {
      // Storage restricted / private browsing fallback
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    const dialog = dialogRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
    setIsOpen(false);
  };

  // Light-dismiss fallback: clicks on the ::backdrop (target is the dialog element itself)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (e.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      const isInside =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;

      if (!isInside) {
        handleClose();
      }
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="piscine-modal"
      aria-labelledby="piscine-modal-title"
      closedby="any"
      onClick={handleBackdropClick}
      onCancel={handleClose}
    >
      <div className="piscine-modal-card">
        <button
          type="button"
          className="piscine-modal-close"
          onClick={handleClose}
          aria-label="Close announcement"
        >
          <X size={18} />
        </button>

        {/* Top Cohort Badge */}
        <div className="piscine-modal-badge">
          <span className="piscine-modal-pulse" aria-hidden="true" />
          <span>PISCINE 10</span>
        </div>

        {/* Date & Title */}
        <h2 id="piscine-modal-title" className="piscine-modal-title">
          Next Piscine Starts
        </h2>
        <div className="piscine-modal-date">22 NOV 2026</div>
        <p className="piscine-modal-sub">
          4-Week Intensive Selection Pool · Cairo Campus
        </p>

        {/* Countdown Timer */}
        <div className="piscine-modal-timer-section">
          <div className="piscine-modal-timer-label">Applications Closing In</div>
          <div className="piscine-modal-timer">
            <div className="piscine-timer-block">
              <span className="piscine-timer-num">{timeLeft.days}</span>
              <span className="piscine-timer-unit">Days</span>
            </div>
            <span className="piscine-timer-colon" aria-hidden="true">:</span>
            <div className="piscine-timer-block">
              <span className="piscine-timer-num">{timeLeft.hours}</span>
              <span className="piscine-timer-unit">Hours</span>
            </div>
            <span className="piscine-timer-colon" aria-hidden="true">:</span>
            <div className="piscine-timer-block">
              <span className="piscine-timer-num">{timeLeft.minutes}</span>
              <span className="piscine-timer-unit">Mins</span>
            </div>
            <span className="piscine-timer-colon" aria-hidden="true">:</span>
            <div className="piscine-timer-block">
              <span className="piscine-timer-num">{timeLeft.seconds}</span>
              <span className="piscine-timer-unit">Secs</span>
            </div>
          </div>
        </div>

        {/* Live Spots Tracker */}
        <div className="piscine-modal-tracker">
          <div className="piscine-modal-tracker-header">
            <span className="piscine-modal-students">{count} students already in</span>
            <span className="piscine-modal-spots-alert">Limited spots left</span>
          </div>
          <div className="piscine-modal-progress-track">
            <div
              className="piscine-modal-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="piscine-modal-actions">
          <Link
            href="/admissions#register"
            className="piscine-modal-apply-btn"
            onClick={() => {
              handleClose();
              if (window.location.pathname === "/admissions") {
                const el = document.getElementById("register");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            <span>Apply Now</span>
            <ArrowRight size={17} />
          </Link>
          <button
            type="button"
            className="piscine-modal-dismiss-btn"
            onClick={handleClose}
          >
            Explore Website First
          </button>
        </div>
      </div>
    </dialog>
  );
}
