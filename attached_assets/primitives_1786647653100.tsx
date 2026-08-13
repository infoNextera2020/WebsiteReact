import type { ReactNode } from "react";

/** Marks copy the NextEra team still has to fill in. */
export function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="slot mx-0.5 inline-block px-2 py-0.5 text-sm font-bold tracking-wide">
      {children}
    </span>
  );
}

export function SlotBlock({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="slot p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-primary-foreground/70">
        Placeholder
      </p>
      <p className="mt-1 font-bold">{label}</p>
      {hint ? <p className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  dark = false,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={
        dark
          ? "bg-ink py-20 text-ink-foreground sm:py-28"
          : "border-b border-border bg-background py-20 sm:py-28"
      }
    >
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow ? (
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="display text-3xl sm:text-4xl">{title}</h2>
        {intro ? (
          <p
            className={`mt-4 max-w-3xl text-lg ${dark ? "text-ink-foreground/70" : "text-muted-foreground"}`}
          >
            {intro}
          </p>
        ) : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Card({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-border bg-card p-6 text-card-foreground shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${className}`}
    >
      {title ? (
        <h3 className="mb-3 text-sm font-black uppercase tracking-wider">{title}</h3>
      ) : null}
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}

/** Horizontal step flow with arrows (wraps to vertical on mobile). */
export function StepFlow({ steps }: { steps: { label: string; detail: string }[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
      {steps.map((s, i) => (
        <li key={s.label} className="contents">
          <div className="rounded-lg border-2 border-ink bg-card p-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
              Step {i + 1}
            </span>
            <p className="mt-2 font-black uppercase">{s.label}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
          </div>
          {i < steps.length - 1 ? (
            <div
              aria-hidden
              className="flex items-center justify-center text-2xl font-black text-primary md:px-1"
            >
              <span className="hidden md:inline">&rarr;</span>
              <span className="md:hidden">&darr;</span>
            </div>
          ) : null}
        </li>
      ))}
      <li aria-hidden className="hidden" />
    </ol>
  );
}

export function CompareTable({
  rows,
}: {
  rows: { dimension: string; traditional: string; peer: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-ink text-ink-foreground">
            <th className="p-4 font-black uppercase tracking-wider">Dimension</th>
            <th className="p-4 font-black uppercase tracking-wider">Traditional classroom</th>
            <th className="p-4 font-black uppercase tracking-wider text-primary">
              Peer-to-peer at NextEra
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.dimension} className={i % 2 ? "bg-secondary" : "bg-card"}>
              <td className="p-4 font-bold">{r.dimension}</td>
              <td className="p-4 text-muted-foreground">{r.traditional}</td>
              <td className="p-4">{r.peer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Timeline({
  phases,
}: {
  phases: { window: string; title: string; copy: string; bullets: string[] }[];
}) {
  return (
    <ol className="relative space-y-8 border-l-2 border-primary/40 pl-6">
      {phases.map((p) => (
        <li key={p.title} className="relative">
          <span className="absolute -left-[31px] top-2 h-4 w-4 rounded-full border-2 border-ink bg-primary" />
          <div className="rounded-lg border border-border bg-card p-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
              {p.window}
            </span>
            <h3 className="mt-1 text-xl font-black uppercase">{p.title}</h3>
            <p className="mt-3 text-muted-foreground">{p.copy}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden className="font-black text-primary">
                    /
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CheckList({
  items,
  tone,
  title,
}: {
  items: ReactNode[];
  tone: "do" | "dont";
  title: string;
}) {
  return (
    <div
      className={`rounded-lg border-2 p-6 ${tone === "do" ? "border-primary bg-card" : "border-destructive/40 bg-card"}`}
    >
      <h3 className="text-sm font-black uppercase tracking-wider">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span
              aria-hidden
              className={`font-black ${tone === "do" ? "text-primary" : "text-destructive"}`}
            >
              {tone === "do" ? "+" : "\u00d7"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
