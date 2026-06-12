import { Section, Panel, DataTable, Tag } from "./primitives"
import { waybackChanges, waybackConclusion, waybackScriptOutput } from "@/lib/report-data"

export function WaybackSection() {
  const stats = [
    { label: "URLs discovered", value: "5" },
    { label: "HTML snapshots", value: "12" },
    { label: "Content changes", value: "4" },
    { label: "New private data", value: "0" },
  ]

  return (
    <Section
      id="wayback"
      num="06"
      kicker="Historical"
      title="Wayback Machine Analysis"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
            A custom Python script (
            <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs">
              ismo_turve_archive.py
            </code>
            ) queried Wayback CDX indexes via{" "}
            <span className="text-foreground">waybackpy</span>, compared
            snapshots, extracted contact metadata, and flagged content changes
            across HAMK pages.
          </p>

          <Panel title="Script Output (Console Summary)">
            <pre className="max-h-[420px] overflow-auto whitespace-pre font-mono text-xs leading-relaxed text-muted-foreground">
              {waybackScriptOutput}
            </pre>
          </Panel>

          <Panel title="Content Changes Detected (4 total)">
            <DataTable
              headers={["Date", "Page", "Change"]}
              rows={waybackChanges.map((c) => [
                <span key={c.date} className="font-mono text-xs">
                  {c.date}
                </span>,
                c.page,
                c.change,
              ])}
            />
          </Panel>

          <Panel title="Conclusion">
            <DataTable
              headers={["Finding", "Detail"]}
              rows={waybackConclusion.map((w) => [w.finding, w.detail])}
            />
          </Panel>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border bg-card p-4 text-center"
              >
                <p className="font-mono text-3xl font-semibold tabular-nums text-primary">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-tight text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-accent">
              Defense Insight
            </p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Archives confirmed institutional stability over time — they did{" "}
              <span className="text-foreground">not</span> reveal new private
              data. Personal context came from Facebook and registries, not
              historical web archives.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Tag>Email: unchanged</Tag>
            <Tag>Phone: unchanged</Tag>
            <Tag tone="medium">Dept added 2025</Tag>
          </div>
        </div>
      </div>
    </Section>
  )
}
