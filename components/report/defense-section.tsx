import { Section, Panel, DataTable } from "./primitives"
import { scenarioDefenses, defenseLayers } from "@/lib/report-data"

export function DefenseSection() {
  return (
    <Section id="defense" num="10" kicker="Reflection" title="Defensive Reflection">
      <p className="mb-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
        How could this attack plan be detected or disrupted? Defenses operate at
        the scenario, individual, organizational, and technical levels — with a
        cultural shift from &quot;open by default&quot; to{" "}
        <span className="text-foreground">&quot;verify by default.&quot;</span>
      </p>

      <Panel
        title="Defenses Specific to the Cross-Border Guidance Exchange"
        tone="accent"
        className="mb-6"
      >
        <DataTable
          headers={["Threat in our plan", "Disruption"]}
          rows={scenarioDefenses.map((d) => [d.threat, d.disruption])}
        />
      </Panel>

      <div className="grid gap-4 md:grid-cols-3">
        {defenseLayers.map((layer) => (
          <div key={layer.title} className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-3 font-medium text-foreground">{layer.title}</h3>
            <ul className="space-y-2">
              {layer.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
