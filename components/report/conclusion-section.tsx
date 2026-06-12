import { Section } from "./primitives"
import { takeaways, references, meta } from "@/lib/report-data"

export function ConclusionSection() {
  return (
    <Section id="conclusion" num="11" kicker="Closing" title="Conclusion & Key Takeaways">
      <ol className="mb-10 space-y-3">
        {takeaways.map((t, i) => (
          <li
            key={t}
            className="flex gap-4 rounded-lg border border-border bg-card p-4"
          >
            <span className="font-mono text-sm font-semibold tabular-nums text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-pretty text-sm leading-relaxed text-foreground">{t}</p>
          </li>
        ))}
      </ol>

      <div className="mb-12 rounded-lg border border-primary/40 bg-primary/5 p-6 text-center">
        <p className="mx-auto max-w-2xl text-balance text-lg font-medium leading-relaxed text-foreground md:text-xl">
          Attackers rarely need secrets. They need context. Verification disrupts
          context — and verification disrupts narratives.
        </p>
      </div>

      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          References &amp; Sources
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {references.map((r) => (
            <li key={r.source}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/40"
              >
                <span className="text-foreground">{r.source}</span>
                <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="mt-12 border-t border-border pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Document generated for educational purposes under explicit informed
          consent.
        </p>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {meta.course} · {meta.group} Group · June 2026
        </p>
      </footer>
    </Section>
  )
}
