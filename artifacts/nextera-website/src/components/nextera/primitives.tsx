import type { ReactNode } from 'react';

export function Slot({ children }: { children: ReactNode }) {
  return <span className="slot">{children}</span>;
}

export function SlotBlock({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="slot" data-testid={`slot-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
      <div className="slot-label">Reference note</div>
      <p><strong>{label}</strong></p>
      {hint ? <p className="hint">{hint}</p> : null}
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
    <section id={id} className={`primitive-section${dark ? ' dark' : ''}`} data-testid={`section-${id}`}>
      <div className="primitive-inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="display section-heading">{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
        <div style={{ marginTop: 48 }}>{children}</div>
      </div>
    </section>
  );
}

export function Card({
  title,
  children,
  className = '',
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`primitive-card ${className}`} data-testid={title ? `card-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : 'card-content'}>
      {title ? <h3 className="card-title" style={{ fontSize: '1rem' }}>{title}</h3> : null}
      <div className="card-body">{children}</div>
    </div>
  );
}

export function StepFlow({ steps }: { steps: { label: string; detail: string }[] }) {
  return (
    <ol className="step-flow" data-testid="step-flow">
      {steps.map((step, index) => (
        <li key={step.label}>
          <div className="step-card">
            <span className="step-tag">Step {index + 1}</span>
            <h3>{step.label}</h3>
            <p>{step.detail}</p>
          </div>
          {index < steps.length - 1 ? <div className="flow-arrow" aria-hidden="true"><span>→</span></div> : null}
        </li>
      ))}
    </ol>
  );
}

export function CompareTable({
  rows,
}: {
  rows: { dimension: string; traditional: string; peer: string }[];
}) {
  return (
    <div className="compare-wrap" data-testid="comparison-table">
      <table className="compare-table">
        <thead>
          <tr><th>Dimension</th><th>Traditional classroom</th><th>Peer-to-peer at NextEra</th></tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.dimension}>
              <td>{row.dimension}</td><td>{row.traditional}</td><td>{row.peer}</td>
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
    <ol className="timeline" data-testid="programme-timeline">
      {phases.map((phase) => (
        <li className="timeline-item" key={phase.title}>
          <span className="timeline-window">{phase.window}</span>
          <div className="primitive-card">
            <h3 className="card-title" style={{ fontSize: '1.25rem' }}>{phase.title}</h3>
            <p className="card-body">{phase.copy}</p>
            <ul>
              {phase.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
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
  tone: 'do' | 'dont';
  title: string;
}) {
  return (
    <div className={`check-card${tone === 'dont' ? ' dont' : ''}`} data-testid={`checklist-${tone}`}>
      <h3>{title}</h3>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
}