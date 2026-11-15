import { useState, useEffect } from "react";

export const PISCINE_TRACKER_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyOsY2-873hPxZSrP5nykQlgLJWYBQhB3czLy5bPnGdZbF-7fCuLpFh3XS_1SaOSENYUw/exec";

// Default/fallback count while fetching or offline
export const DEFAULT_PISCINE_COUNT = 28;
// Total capacity for calculating visual progress percentage
export const PISCINE_CAPACITY = 100;

const STORAGE_KEY = "nextera_piscine_student_count";

export function getCachedPiscineCount(): number {
  if (typeof window === "undefined") return DEFAULT_PISCINE_COUNT;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      const val = parseInt(stored, 10);
      if (!isNaN(val) && val >= 0) return val;
    }
  } catch {
    // localStorage might be unavailable or restricted
  }
  return DEFAULT_PISCINE_COUNT;
}

export function usePiscineStudentCount() {
  const [count, setCount] = useState<number>(getCachedPiscineCount);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchCount() {
      try {
        const response = await fetch(PISCINE_TRACKER_SCRIPT_URL);
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        if (data && data.status === "success" && typeof data.count === "number") {
          if (isMounted) {
            setCount(data.count);
            setLoading(false);
          }
          try {
            window.localStorage.setItem(STORAGE_KEY, String(data.count));
          } catch {
            // ignore localStorage quota/restriction
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to fetch student count");
          setLoading(false);
        }
      }
    }

    fetchCount();

    return () => {
      isMounted = false;
    };
  }, []);

  const progressPercent = Math.min(100, Math.max(0, Math.round((count / PISCINE_CAPACITY) * 100)));

  return { count, progressPercent, loading, error };
}
