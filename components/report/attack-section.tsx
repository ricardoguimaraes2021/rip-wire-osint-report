import { Section, Panel, DataTable, Tag } from "./primitives"
import {
  attackStages,
  frameworkApplication,
  channelStrategy,
  resistance,
  exampleMessages,
} from "@/lib/report-data"

function likelihoodTone(l: string) {
  return l === "High" ? "high" : l === "Medium" ? "medium" : "low"
}

export function AttackSection() {
  return (
    <Section
      id="attack"
      num="08"
      kicker="Phase 3 · Theoretical"
      title="Attack Plan — Cross-Border Guidance Exchange"
    >
      <div className="mb-8 flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/5 p-4">
        <span className="mt-0.5 font-mono text-destructive" aria-hidden>
          !
        </span>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">
            Purely analytical exercise by RIP WIRE.
          </span>{" "}
          No real attack was planned, attempted, or executed. No malware, no
          family targeting, no impersonation of housing or utility services.
        </p>
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-3">
        {attackStages.map((s) => (
          <div key={s.stage} className="rounded-lg border border-border bg-card p-4">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-primary">
              {s.stage}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {s.objective}
            </p>
          </div>
        ))}
      </div>

      <Panel title="Framework Application" tone="accent" className="mb-6">
        <ul className="space-y-3">
          {frameworkApplication.map((f) => (
            <li
              key={f.label}
              className="flex flex-col gap-1 border-l-2 border-primary/40 pl-3 sm:flex-row sm:gap-4"
            >
              <span className="w-32 shrink-0 font-mono text-xs uppercase tracking-wider text-primary">
                {f.label}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {f.value}
              </span>
            </li>
          ))}
        </ul>
      </Panel>

      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Channel Selection Strategy">
          <DataTable
            headers={["Stage", "Channel", "Rationale"]}
            rows={channelStrategy.map((c) => [c.stage, c.channel, c.rationale])}
          />
        </Panel>

        <Panel title="Anticipated Resistance">
          <ul className="space-y-3">
            {resistance.map((r) => (
              <li key={r.resistance} className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm leading-snug text-foreground">{r.resistance}</p>
                  <p className="text-xs text-muted-foreground">{r.why}</p>
                </div>
                <Tag tone={likelihoodTone(r.likelihood)}>{r.likelihood}</Tag>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Example Messages — Theoretical, RIP WIRE Original
        </p>
        {exampleMessages.map((m) => (
          <div
            key={m.label}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive" aria-hidden />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {m.label}
              </span>
            </div>
            <div className="p-4">
              {m.subject ? (
                <p className="mb-3 border-b border-border pb-2 font-mono text-xs text-muted-foreground">
                  Subject:{" "}
                  <span className="text-foreground">{m.subject}</span>
                </p>
              ) : null}
              <p className="whitespace-pre-line text-pretty text-sm leading-relaxed text-muted-foreground">
                {m.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
