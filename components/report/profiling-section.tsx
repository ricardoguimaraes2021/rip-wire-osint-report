import { Section } from "./primitives"
import { profileEstimates } from "@/lib/report-data"

function barTone(v: number) {
  if (v >= 80) return "bg-primary"
  if (v >= 60) return "bg-accent"
  return "bg-destructive"
}

export function ProfilingSection() {
  return (
    <Section id="profiling" num="07" kicker="Phase 2" title="Profiling">
      <div className="mb-8 max-w-3xl rounded-lg border border-border bg-card p-4">
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          All profiling is <span className="text-foreground">probabilistic</span>.
          Observations are distinguished from assumptions. The percentages below
          are illustrative estimates based on the consistency of public artifacts
          — <span className="text-foreground">not empirical measurements</span>.
        </p>
      </div>

      <div className="space-y-4">
        {profileEstimates.map((p) => (
          <div key={p.dimension} className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <h3 className="font-medium text-foreground">{p.dimension}</h3>
              <span className="font-mono text-sm font-semibold tabular-nums text-foreground">
                {p.estimate}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full rounded-full ${barTone(p.estimate)}`}
                style={{ width: `${p.estimate}%` }}
              />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {p.basis}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-destructive/30 bg-destructive/5 p-4 md:p-5">
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-destructive">
          OPSEC Paradox
        </p>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          The target teaches social engineering defense while maintaining a
          publicly exploitable professional surface. Technical expertise does not
          automatically translate to personal digital hygiene — presented as a
          universal human challenge, not judgment.
        </p>
      </div>
    </Section>
  )
}
