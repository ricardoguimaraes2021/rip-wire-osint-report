import { Section, Panel, DataTable } from "./primitives"
import {
  coreConcepts,
  attackFramework,
  notFound,
} from "@/lib/report-data"

export function OverviewSection() {
  return (
    <Section id="overview" num="00" kicker="Phase 0" title="Executive Summary">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            This project explores how publicly available information can be
            collected, analyzed, and connected to build a profile of an
            individual — and how that profile could theoretically support a
            social engineering attack plan.
          </p>
          <p>
            <span className="font-medium text-foreground">
              The objective was not to attack the target
            </span>
            , but to understand how attackers gather information, create context,
            build trust, construct narratives, and identify opportunities — and
            how such risks can be detected and mitigated.
          </p>
        </div>
        <Panel tone="accent" title="Central Finding">
          <p className="text-pretty text-sm leading-relaxed text-foreground">
            Risk is rarely created by a single piece of information. It emerges
            when multiple public observations are{" "}
            <span className="text-primary">connected</span> into a coherent
            narrative. That narrative creates credibility. Credibility creates
            opportunity.{" "}
            <span className="font-medium">Verification disrupts the narrative.</span>
          </p>
        </Panel>
      </div>
    </Section>
  )
}

export function ConceptsSection() {
  return (
    <Section
      id="concepts"
      num="01"
      kicker="Framework"
      title="Core Course Concepts Applied"
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {coreConcepts.map((c) => (
          <div
            key={c.concept}
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <h3 className="mb-2 font-medium text-foreground">{c.concept}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {c.application}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Attack Planning Framework — Workshop Model
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {attackFramework.map((f, i) => (
            <div
              key={f.step}
              className="relative rounded-lg border border-border bg-card p-4"
            >
              <span className="font-mono text-xs text-primary">
                0{i + 1}
              </span>
              <h4 className="mt-1 font-medium text-foreground">{f.step}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {f.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function NotFoundSection() {
  return (
    <div className="mt-8">
      <Panel title="Information NOT Found — Gaps &amp; Boundaries" tone="default">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Even with consent and deep OSINT, credentials and internal systems
          remained out of reach. Correlation produced a rich contextual profile
          without crossing into unauthorized access.
        </p>
        <DataTable
          headers={["Category", "Status"]}
          rows={notFound.map((n) => [n.category, n.status])}
        />
      </Panel>
    </div>
  )
}
