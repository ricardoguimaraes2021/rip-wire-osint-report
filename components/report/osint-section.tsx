import { Section, Panel, DataTable, Tag } from "./primitives"
import {
  identity,
  contactInfo,
  residence,
  family,
  employmentHistory,
  education,
  publications,
  projects,
  githubFindings,
} from "@/lib/report-data"
import { NotFoundSection } from "./intro-sections"

export function OsintSection() {
  return (
    <Section id="osint" num="02" kicker="Phase 1" title="OSINT Findings">
      <p className="mb-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
        Findings gathered through search-engine techniques (quoted searches,{" "}
        <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs">site:</code>{" "}
        and{" "}
        <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs">filetype:</code>{" "}
        operators, username/email correlation) across professional, academic,
        and registry sources. Categorized below.
      </p>

      <div className="space-y-6">
        <Panel title="01 — Identity">
          <DataTable
            headers={["Field", "Finding", "Source"]}
            rows={identity.map((r) => [r.field, r.finding, r.source])}
          />
        </Panel>

        <Panel title="02 — Contact Channels">
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Multiple channels exist across institutional, personal, and business
            contexts. Correlating them increases attacker{" "}
            <span className="text-foreground">optionality</span> — the attack
            plan deliberately used only the institutional channel.
          </p>
          <DataTable
            headers={["Channel", "Value", "Source"]}
            rows={contactInfo.map((r) => [
              r.channel,
              <span key={r.channel} className="font-mono text-xs text-foreground">
                {r.value}
              </span>,
              r.source,
            ])}
          />
        </Panel>

        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="03 — Residence &amp; Location">
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Geographic anchoring was resolved to{" "}
              <span className="text-foreground">municipality and cooperative</span>{" "}
              level only. The exact street address was deliberately left
              uncollected as an ethical boundary.
            </p>
            <DataTable
              headers={["Field", "Finding", "Source"]}
              rows={residence.map((r) => [r.field, r.finding, r.source])}
            />
          </Panel>

          <Panel title="04 — Family &amp; Social Context">
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Public Facebook content exposed{" "}
              <span className="text-foreground">family relationships</span> that
              an attacker could use as emotional levers. Non-public details were
              not collected.
            </p>
            <DataTable
              headers={["Relation", "Detail", "Source"]}
              rows={family.map((r) => [r.relation, r.detail, r.source])}
            />
          </Panel>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="05 — Employment History (LinkedIn)">
            <ol className="relative space-y-5 border-l border-border pl-5">
              {employmentHistory.map((e) => (
                <li key={e.period} className="relative">
                  <span className="absolute -left-[1.4rem] top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-card" aria-hidden />
                  <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                  <p className="font-medium text-foreground">{e.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {e.org} · {e.location}
                  </p>
                </li>
              ))}
            </ol>
          </Panel>

          <div className="space-y-6">
            <Panel title="06 — Education (LinkedIn)">
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.qual} className="border-l-2 border-accent/50 pl-3">
                    <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                    <p className="font-medium text-foreground">{e.qual}</p>
                    <p className="text-sm text-muted-foreground">{e.inst}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-md border border-primary/30 bg-primary/5 p-3 text-sm leading-relaxed text-muted-foreground">
                The MEng in Cyber Security (completed July 2024) overlaps with his
                return to Senior Lecturer and recent publications — combining{" "}
                <span className="text-foreground">fresh cyber credentials</span> with{" "}
                <span className="text-foreground">long teaching experience</span>.
              </p>
            </Panel>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="07 — Publications &amp; Thought Leadership">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-primary">
              Recent (2024–2025)
            </p>
            <ul className="mb-4 space-y-1.5 text-sm text-muted-foreground">
              {publications.recent.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-primary" aria-hidden>›</span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Earlier (2019+)
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {publications.earlier.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-muted-foreground/60" aria-hidden>›</span>
                  {p}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="08 — Projects &amp; Collaborations">
            <DataTable
              headers={["Project", "Period", "Focus"]}
              rows={projects.map((p) => [p.project, p.period, p.focus])}
            />
          </Panel>
        </div>

        <Panel title="09 — Technical / Developer Footprint (GitHub)" tone="danger">
          <div className="grid gap-3 sm:grid-cols-2">
            {githubFindings.map((g) => (
              <div key={g.finding} className="rounded-md border border-border bg-background/40 p-3">
                <p className="mb-1 font-mono text-xs uppercase tracking-wider text-destructive">
                  {g.finding}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{g.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag tone="high">OPSEC Paradox</Tag>
            <Tag>32 public gists</Tag>
            <Tag>VirtualBox configs</Tag>
            <Tag>Static IPs exposed</Tag>
          </div>
        </Panel>
      </div>

      <NotFoundSection />
    </Section>
  )
}
