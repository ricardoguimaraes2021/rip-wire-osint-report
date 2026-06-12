import { meta, methodology } from "@/lib/report-data"

function MethodologyFlow() {
  const steps = methodology.split("→").map((s) => s.trim())
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span className="text-primary" aria-hidden>
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  const facts = [
    { k: "Course", v: meta.course },
    { k: "Type", v: meta.type },
    { k: "Group", v: `${meta.group} — ${meta.groupExpanded}` },
    { k: "Presentation", v: meta.presentation },
  ]

  return (
    <header className="relative overflow-hidden border-b border-border pb-12 pt-10 md:pt-16">
      {/* faint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden />
            Educational · With Consent
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Case File / RIP-WIRE-2026
          </span>
        </div>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          From OSINT to Profiling, Attack Planning &amp; Stress Testing
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          An analytical group assignment examining how publicly available
          information can be collected, correlated, and connected into a profile —
          and how that risk can be detected and disrupted.
        </p>

        <div className="mt-8 rounded-lg border border-border bg-card/60 p-4 md:p-5">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Target of Analysis
          </p>
          <p className="text-pretty text-base font-medium md:text-lg">{meta.target}</p>
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.k} className="border-l-2 border-primary/50 pl-3">
              <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {f.k}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-foreground">{f.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Methodology
          </p>
          <MethodologyFlow />
        </div>
      </div>
    </header>
  )
}
