import { Section, Panel, DataTable } from "./primitives"
import { probabilityAssessment, breakPoints } from "@/lib/report-data"

export function StressSection() {
  return (
    <Section
      id="stress"
      num="09"
      kicker="Phase 3"
      title="Attack Execution Stress Test"
    >
      <p className="mb-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
        Hypothetical outcomes for RIP WIRE&apos;s scenario only. The most likely
        result is a polite reply with a public link, or no response — the attacker
        learns communication style, but no breach occurs.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Probability Assessment">
          <ul className="space-y-4">
            {probabilityAssessment.map((p) => (
              <li key={p.phase}>
                <div className="mb-1 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-foreground">{p.phase}</span>
                  <span className="font-mono text-xs text-primary">{p.estimate}</span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {p.reasoning}
                </p>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Attacker Decision Tree" tone="danger">
          <pre className="overflow-x-auto whitespace-pre font-mono text-xs leading-relaxed text-muted-foreground">
{`Send LinkedIn note
├─ Ignored → dead end (most likely)
└─ Accepted
    ├─ Send benchmark email
    │   ├─ No reply → dead end
    │   ├─ Public resource → attack stalls
    │   └─ Agrees to call
    │       ├─ Verifies RUN-EU → FAIL
    │       └─ Joins w/o verify → relationship only
    └─ Escalation to internal docs
        → HIGH resistance → FAIL`}
          </pre>
        </Panel>
      </div>

      <div className="mt-6">
        <Panel title="What Breaks Our Attack?">
          <DataTable
            headers={["#", "Failure Point", "Mechanism"]}
            rows={breakPoints.map((b) => [
              <span key={b.n} className="font-mono text-primary">
                {b.n}
              </span>,
              b.point,
              b.mechanism,
            ])}
          />
        </Panel>
      </div>
    </Section>
  )
}
