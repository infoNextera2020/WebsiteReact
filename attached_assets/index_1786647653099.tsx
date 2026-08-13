import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CheckList,
  CompareTable,
  Section,
  Slot,
  SlotBlock,
  StepFlow,
  Timeline,
} from "@/components/nextera/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "How NextEra Works | Peer-to-Peer Coding in 2 Years" },
      {
        name: "description",
        content:
          "Inside NextEra Education: peer-to-peer learning with no teachers, the 30-day Piscine, the pre-Piscine game and the 2-year path from C to specialist.",
      },
      { property: "og:title", content: "How NextEra Works | Peer-to-Peer Coding in 2 Years" },
      {
        property: "og:description",
        content:
          "No lectures, no teachers. Learn how the Piscine, the selection game and the 24-month cohort turn beginners into engineers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const dayInLife = [
  { time: "09:00", label: "Challenge drop", detail: "The day's exercises unlock. No brief, no lecture." },
  { time: "11:00", label: "Swarm & research", detail: "Docs, man pages, whiteboards, and the person next to you." },
  { time: "14:00", label: "Peer reviews", detail: "Defend your code line by line. Review someone else's." },
  { time: "17:00", label: "Push & audit", detail: "Submit, get audited, patch what broke." },
  { time: "20:00", label: "Community projects", detail: "Side builds, rush prep, and the stuff you do for fun." },
];

function Index() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="border-b-4 border-primary bg-ink py-28 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-primary">
            NextEra Education / 01EDU
          </p>
          <h1 className="display max-w-4xl text-5xl sm:text-6xl">
            No teachers. No lectures.
            <br />
            <span className="text-primary">Just you, your peers</span>
            <br />
            and the problem.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-foreground/70">
            NextEra runs a peer-to-peer, 100% project-based programme where you learn by building,
            reviewing and teaching &mdash; the same way engineering actually works.
          </p>
          <p className="mt-6 max-w-2xl border-l-2 border-primary pl-4 text-xl font-bold">
            Two years. Zero lectures. One portfolio that speaks before you do.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#game"
              className="rounded-sm border-2 border-primary bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Start the game
            </a>
            <a
              href="#piscine"
              className="rounded-sm border-2 border-ink-foreground/30 px-8 py-4 text-sm font-black uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              Apply to the next Piscine
            </a>
          </div>
          <div className="mt-10 max-w-xl">
            <SlotBlock
              label="Hero visual / logo lockup goes here"
              hint="Drop the NextEra hero image, campus photo or looping terminal animation."
            />
          </div>
        </div>
      </section>

      {/* 1. Peer to peer */}
      <Section
        id="peer-to-peer"
        eyebrow="Section 01"
        title="Peer-to-peer learning: how it works"
        intro="There is no teacher at the front of the room, because there is no front of the room. You are handed a problem, a deadline and a room full of people solving the same thing. You learn by doing it, by explaining it, and by auditing someone else's attempt at it."
      >
        <StepFlow
          steps={[
            {
              label: "Encounter the problem",
              detail:
                "A real project lands with a spec and constraints — no walkthrough, no slides.",
            },
            {
              label: "Collaborate & research",
              detail:
                "Documentation, experimentation and peers. Struggle is the curriculum, not a bug in it.",
            },
            {
              label: "Peer review & iterate",
              detail:
                "Your work is audited by classmates against a public rubric. You audit theirs. Then you go again.",
            },
          ]}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card title="Faster feedback loops">
            Feedback arrives in hours from the people beside you, not in weeks from a marker you
            never meet.
          </Card>
          <Card title="Retention through teaching">
            Explaining a concept forces you to actually own it. Every learner is also, daily, an
            instructor.
          </Card>
          <Card title="Real collaboration skills">
            Code review, disagreement, version control and shared ownership are the default working
            mode from week one.
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
            Traditional vs. peer-to-peer
          </h3>
          <CompareTable
            rows={[
              {
                dimension: "Feedback speed",
                traditional: "Days to weeks, from one grader",
                peer: "Hours, from multiple reviewers",
              },
              {
                dimension: "Ownership",
                traditional: "The syllabus decides your pace",
                peer: "You decide what to learn next and defend the choice",
              },
              {
                dimension: "Adaptability",
                traditional: "Curriculum updates once a year",
                peer: "Projects change as the industry changes",
              },
              {
                dimension: "Skill retention",
                traditional: "Memorise, sit exam, forget",
                peer: "Build, teach, review, reuse",
              },
              {
                dimension: "Proof of ability",
                traditional: "A transcript",
                peer: "A portfolio of shipped work and an audit history",
              },
            ]}
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border-2 border-ink bg-card p-6">
            <p className="text-3xl font-black">
              Students retain up to <Slot>[X]%</Slot> more when they teach others
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Source placeholder: <Slot>[study / author / year]</Slot>
            </p>
          </div>
          <SlotBlock
            label="Second stat or student quote"
            hint="e.g. average peer reviews per student per week, or a testimonial with name and cohort."
          />
        </div>
      </Section>

      {/* 2. Two-year programme */}
      <Section
        id="programme"
        eyebrow="Section 02"
        title="The 2-year cohort: from imperative to specialist"
        intro="Twenty-four months of deliberate progression. You start by writing C against a merciless Unix shell and you finish by shipping production-grade systems in the specialisation you chose."
        dark
      >
        <div className="mb-12 overflow-x-auto rounded-lg border border-ink-foreground/15 bg-ink-soft p-6">
          <pre className="min-w-[640px] text-xs leading-6 text-primary">{`M0 ─────── M6 ─────── M12 ─────── M18 ─────── M24
 │           │            │            │           │
 ▼           ▼            ▼            ▼           ▼
FOUNDATIONS  OOP &        SYSTEMS &    SPECIALISE  CAPSTONE
C · Unix     ARCHITECTURE OPEN SOURCE  TRACKS      + PORTFOLIO
algorithms   team builds  cross-disc.  Cyber/AI/   employable
rigor                     projects     Mobile/Web3 engineer`}</pre>
        </div>

        <div className="text-foreground">
          <Timeline
            phases={[
              {
                window: "Months 0 – 6",
                title: "Phase 1 · Imperative foundations",
                copy: "You learn to think like a machine before you learn to abstract like an architect. C, the Unix shell and raw algorithmic work strip away every convenience and force real understanding of memory, control flow and complexity. Rigor is graded as harshly as correctness.",
                bullets: [
                  "C, pointers, memory management and manual data structures",
                  "Unix, the shell, git and a strict code standard",
                  "Algorithmic problem solving and complexity reasoning",
                ],
              },
              {
                window: "Months 6 – 12",
                title: "Phase 2 · Object-oriented & architecture",
                copy: "Once you can build anything from nothing, you learn to build things other people can extend. Object-oriented design, higher-level languages and your first real team projects introduce planning, interfaces and the cost of bad structure.",
                bullets: [
                  "OOP, design patterns and clean interface design",
                  "Databases, APIs and full-stack team projects",
                  "Agile collaboration, code review culture and testing",
                ],
              },
              {
                window: "Months 12 – 18",
                title: "Phase 3 · Systems & open source",
                copy: "The problems stop having tidy edges. You handle concurrency, distributed systems and performance, and you ship contributions into codebases you did not write. Cross-disciplinary projects pair you with people who think differently from you.",
                bullets: [
                  "Advanced system design, concurrency and scalability",
                  "Open-source contribution and working in unfamiliar codebases",
                  "DevOps, observability and cross-disciplinary product work",
                ],
              },
              {
                window: "Months 18 – 24",
                title: "Phase 4 · Specialisation & capstone",
                copy: "You commit to a track and go deep, finishing with a capstone built to production standards and defended in front of peers and industry reviewers. You leave with a specialisation, a portfolio and a professional network.",
                bullets: [
                  "Tracks: Cybersecurity · Mobile & Gaming · AI/Data · Web3 and more",
                  "Capstone project, shipped, documented and defended",
                  "Employment readiness: portfolio, interviews, industry partners",
                ],
              },
            ]}
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SlotBlock
            label="Track list confirmation"
            hint="Confirm the exact specialisation tracks offered in Egypt and add or remove any."
          />
          <SlotBlock
            label="Cohort dates & intake size"
            hint="Next cohort start date, duration per phase, and number of seats."
          />
        </div>
      </Section>

      {/* 3. Piscine */}
      <Section
        id="piscine"
        eyebrow="Section 03"
        title="The Piscine: one month of fire"
        intro="Thirty days of full immersion. The Piscine is the selection phase — a compressed simulation of the entire programme where you are measured on how you learn, not on what you already know."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <CheckList
            tone="do"
            title="What to expect"
            items={[
              "A new challenge every single day, with no lecture attached",
              "Peer evaluations you both receive and deliver, out loud",
              "Intense collaboration — the room solves faster than you do",
              "Very little sleep and a schedule that bleeds into the evening",
              "A learning curve steeper than anything you have done before",
              "Real emotional highs and lows, sometimes in the same hour",
              "Weekend rushes: group projects delivered against the clock",
            ]}
          />
          <CheckList
            tone="dont"
            title="What NOT to do"
            items={[
              "Don't isolate yourself — silence is the fastest way to fall behind",
              "Don't chase the score instead of the understanding",
              "Don't copy code you cannot defend in a review",
              "Don't quit after a failed exam; the recovery is part of the signal",
              "Don't neglect sleep, food and movement — burnout is not grit",
              "Don't compare yourself destructively; different starting points, same finish line",
              "Don't refuse help, and don't refuse to give it",
            ]}
          />
        </div>

        <h3 className="mt-14 mb-4 text-sm font-black uppercase tracking-wider">
          A day in the Piscine
        </h3>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {dayInLife.map((d) => (
            <li key={d.time} className="rounded-lg border-t-4 border-primary bg-card p-5">
              <p className="text-2xl font-black">{d.time}</p>
              <p className="mt-1 text-sm font-black uppercase tracking-wide">{d.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d.detail}</p>
            </li>
          ))}
        </ol>
        <div className="mt-4">
          <SlotBlock
            label="Confirm the real daily schedule"
            hint="Replace the times above with the actual Piscine timetable, including exam days and rush weekends."
          />
        </div>

        <div className="mt-12 rounded-lg border-l-4 border-primary bg-secondary p-8">
          <h3 className="text-lg font-black uppercase">Rejection is redirection</h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Not everyone who finishes the Piscine gets a seat, and that is not a verdict on your
            worth or your intelligence. The Piscine measures fit with one very specific way of
            learning at one very specific moment in your life. People who were not selected have
            come back stronger in a later cohort, and others discovered a direction that suited them
            better. If you leave with a month of hard evidence about how you work under pressure,
            you did not lose anything.
          </p>
          <p className="mt-4">
            <Slot>[Optional: quote from a student who reapplied and got in]</Slot>
          </p>
        </div>
      </Section>

      {/* 4. Pre-piscine game */}
      <Section
        id="game"
        eyebrow="Section 04"
        title="The pre-Piscine game: your problem-solving DNA"
        intro="Before the Piscine there is a short online game — roughly 90 minutes, no coding required. It is not an IQ test and there is nothing to revise."
        dark
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-ink-foreground/15 bg-ink-soft p-8">
            <h3 className="text-sm font-black uppercase tracking-wider text-primary">
              What it actually measures
            </h3>
            <ul className="mt-4 space-y-3 text-ink-foreground/80">
              <li>Logical reasoning under an unfamiliar rule set</li>
              <li>Pattern recognition and abstraction speed</li>
              <li>Persistence when the first three attempts fail</li>
              <li>Creative problem solving rather than memorised method</li>
            </ul>
            <h3 className="mt-8 text-sm font-black uppercase tracking-wider text-primary">
              What it reveals about you
            </h3>
            <ul className="mt-4 space-y-3 text-ink-foreground/80">
              <li>Adaptability &mdash; how quickly you change a failing strategy</li>
              <li>Learning speed &mdash; how fast new rules become instinct</li>
              <li>Grit &mdash; what you do at the hard level, not the easy one</li>
              <li>Collaborative instinct &mdash; whether you seek input or dig in alone</li>
            </ul>
          </div>

          {/* 2x2 quadrant */}
          <div className="rounded-lg border border-ink-foreground/15 bg-ink-soft p-8">
            <h3 className="text-sm font-black uppercase tracking-wider text-primary">
              The quadrant the game maps
            </h3>
            <div className="mt-6 flex gap-3">
              <div className="flex items-center">
                <span className="rotate-180 text-[11px] font-black uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
                  Persistence &rarr;
                </span>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-2">
                {[
                  { t: "Methodical grinder", d: "Keeps going, needs sharper strategy" },
                  { t: "Natural engineer", d: "Solves hard problems and refuses to stop" },
                  { t: "Explorer", d: "Curious start, fades under resistance" },
                  { t: "Quick sprinter", d: "Fast insight, tested by long problems" },
                ].map((q, i) => (
                  <div
                    key={q.t}
                    className={`rounded-md border p-4 ${
                      i === 1
                        ? "border-primary bg-primary/15"
                        : "border-ink-foreground/15 bg-ink/40"
                    }`}
                  >
                    <p className="text-sm font-black uppercase">{q.t}</p>
                    <p className="mt-1 text-xs text-ink-foreground/60">{q.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] font-black uppercase tracking-[0.2em]">
              Problem-solving ability &rarr;
            </p>
            <p className="mt-6 text-sm text-ink-foreground/70">
              No quadrant is a rejection. The game shows where you stand today and which muscle the
              Piscine will build first.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border-l-4 border-primary bg-ink-soft p-8">
          <h3 className="text-lg font-black uppercase">Not a filter &mdash; a mirror</h3>
          <p className="mt-3 max-w-3xl text-ink-foreground/70">
            The game exists as much for you as for us. Most applicants finish it knowing something
            honest about how they handle an unsolved problem, and that alone tells them whether this
            path is theirs. You are not being ranked against strangers; you are being shown a
            reflection.
          </p>
          <p className="mt-4 text-ink-foreground/70">
            <Slot>[Insert real game duration, format and link]</Slot>
          </p>
        </div>
      </Section>

      {/* Final */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="display text-3xl sm:text-4xl">Why NextEra / 01EDU</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            It starts with a game that shows you how you think, continues through a month that shows
            you what you are made of, and ends two years later with a portfolio of production-grade
            work, a specialisation and a network of engineers who learned beside you. There are no
            lectures because there is no shortcut &mdash; only problems, peers and the habit of
            solving things you have never seen before. That habit is the qualification.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#game"
              className="rounded-sm border-2 border-primary bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
            >
              Start the game
            </a>
            <a
              href="#piscine"
              className="rounded-sm border-2 border-ink px-8 py-4 text-sm font-black uppercase tracking-widest transition-colors hover:bg-ink hover:text-ink-foreground"
            >
              Apply to the next Piscine
            </a>
          </div>
          <div className="mt-10 text-left">
            <SlotBlock
              label="Application links"
              hint="Point both buttons at the real 01EDU game URL and the Piscine application form."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
