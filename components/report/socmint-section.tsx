import { Section, Panel, DataTable, Tag } from "./primitives"
import {
  socmintComparison,
  interests,
  trustAnchors,
} from "@/lib/report-data"

export function SocmintSection() {
  return (
    <Section
      id="socmint"
      num="03"
      kicker="Phase 1 · SOCMINT"
      title="Facebook — Public Content, With Consent"
    >
      <p className="mb-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
        The target explicitly consented to analysis of publicly visible social
        media content. This source provided significantly more{" "}
        <span className="text-foreground">context</span> than traditional search
        engines or institutional pages alone. Family members were{" "}
        <span className="text-foreground">excluded</span> from all attack vectors.
      </p>

      <div className="mb-6 grid gap-3 md:grid-cols-3">
        {socmintComparison.map((c) => (
          <div key={c.osint} className="rounded-lg border border-border bg-card p-4">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              OSINT provides
            </p>
            <p className="mb-3 text-sm text-muted-foreground">{c.osint}</p>
            <div className="border-t border-border pt-3">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-primary">
                SOCMINT adds
              </p>
              <p className="text-sm text-foreground">{c.socmint}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Interests &amp; Lifestyle">
          <DataTable
            headers={["Category", "Detail"]}
            rows={interests.map((i) => [i.category, i.detail])}
          />
        </Panel>

        <Panel title="Trust Anchors Identified" tone="accent">
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Public anchors an attacker could use to build credibility — analyzed
            as risk surface, not exploited.
          </p>
          <div className="flex flex-wrap gap-2">
            {trustAnchors.map((t) => (
              <Tag key={t} tone="low">
                {t}
              </Tag>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4 md:p-5">
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-primary">
          Predictability
        </p>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          RUN-EU trips and academic-calendar events create{" "}
          <span className="text-foreground">temporal windows</span> where
          professional outreach — or impersonation of collaborators — may feel
          especially plausible. Risk emerges when professional and social layers
          are correlated.
        </p>
      </div>
    </Section>
  )
}
