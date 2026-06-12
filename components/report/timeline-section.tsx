import { Section } from "./primitives"
import { timeline } from "@/lib/report-data"

export function TimelineSection() {
  return (
    <Section
      id="timeline"
      num="04"
      kicker="Correlation"
      title="Career & Education Timeline"
    >
      <p className="mb-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
        Synthesized from LinkedIn experience &amp; education, HAMK Unlimited,
        project documentation, and Wayback Machine archives. LinkedIn provided the
        most complete structured career history of all sources.
      </p>

      <ol className="relative">
        <span
          className="absolute left-[3.25rem] top-2 bottom-2 w-px bg-border md:left-[4.25rem]"
          aria-hidden
        />
        {timeline.map((t) => (
          <li key={t.year} className="relative flex gap-4 pb-6 last:pb-0 md:gap-6">
            <div className="flex w-12 shrink-0 justify-end pt-0.5 md:w-16">
              <span className="font-mono text-sm font-medium tabular-nums text-primary">
                {t.year}
              </span>
            </div>
            <span
              className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary ring-4 ring-background"
              aria-hidden
            />
            <div className="flex-1 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/40 md:p-4">
              <p className="text-pretty text-sm font-medium leading-relaxed text-foreground">
                {t.event}
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {t.source}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
