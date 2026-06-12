"use client"

import { useState } from "react"
import { Section } from "./primitives"
import { networkNodes } from "@/lib/report-data"

const groupColors: Record<string, string> = {
  professional: "var(--primary)",
  academic: "var(--accent)",
  social: "var(--chart-4)",
  business: "var(--destructive)",
}

const groupLabels: Record<string, string> = {
  professional: "Professional",
  academic: "Academic",
  social: "Social",
  business: "Business",
}

export function NetworkSection() {
  const [hovered, setHovered] = useState<string | null>(null)
  const size = 560
  const center = size / 2
  const radius = 210
  const n = networkNodes.length

  return (
    <Section
      id="network"
      num="05"
      kicker="Correlation"
      title="Social & Professional Network Map"
    >
      <p className="mb-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
        A correlated map drawn from public professional sources and consented
        public Facebook content. Each connection is an OSINT-derived relationship;
        their convergence on a single identity is what creates attack surface.
      </p>

      <div className="grid gap-6 lg:grid-cols-[1fr_220px]">
        <div className="overflow-hidden rounded-lg border border-border bg-card p-2">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="mx-auto h-auto w-full max-w-xl"
            role="img"
            aria-label="Network graph of the target's correlated public connections"
          >
            {/* edges */}
            {networkNodes.map((node, i) => {
              const angle = (i / n) * Math.PI * 2 - Math.PI / 2
              const x = center + radius * Math.cos(angle)
              const y = center + radius * Math.sin(angle)
              const isActive = hovered === node.id
              return (
                <line
                  key={`edge-${node.id}`}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke={isActive ? groupColors[node.group] : "var(--border)"}
                  strokeWidth={isActive ? 1.5 : 1}
                  opacity={hovered && !isActive ? 0.2 : 0.6}
                />
              )
            })}

            {/* outer nodes */}
            {networkNodes.map((node, i) => {
              const angle = (i / n) * Math.PI * 2 - Math.PI / 2
              const x = center + radius * Math.cos(angle)
              const y = center + radius * Math.sin(angle)
              const isActive = hovered === node.id
              const anchor = x < center - 20 ? "end" : x > center + 20 ? "start" : "middle"
              const labelX = x + (anchor === "end" ? -10 : anchor === "start" ? 10 : 0)
              return (
                <g
                  key={node.id}
                  onMouseEnter={() => setHovered(node.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 7 : 5}
                    fill={groupColors[node.group]}
                    opacity={hovered && !isActive ? 0.4 : 1}
                  />
                  <text
                    x={labelX}
                    y={y + 3}
                    textAnchor={anchor}
                    className="font-mono"
                    fontSize="10"
                    fill={isActive ? "var(--foreground)" : "var(--muted-foreground)"}
                    opacity={hovered && !isActive ? 0.4 : 1}
                  >
                    {node.id}
                  </text>
                </g>
              )
            })}

            {/* center node */}
            <circle cx={center} cy={center} r={34} fill="var(--primary)" opacity={0.12} />
            <circle cx={center} cy={center} r={22} fill="var(--primary)" />
            <text
              x={center}
              y={center - 1}
              textAnchor="middle"
              className="font-semibold"
              fontSize="11"
              fill="var(--primary-foreground)"
            >
              Ismo
            </text>
            <text
              x={center}
              y={center + 11}
              textAnchor="middle"
              className="font-semibold"
              fontSize="11"
              fill="var(--primary-foreground)"
            >
              Turve
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Legend
            </p>
            <ul className="space-y-2.5">
              {Object.entries(groupLabels).map(([key, label]) => (
                <li key={key} className="flex items-center gap-2.5 text-sm">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: groupColors[key] }}
                    aria-hidden
                  />
                  <span className="text-muted-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
            Hover a node to isolate its link. Family nodes derive from public
            social interactions only and were excluded from any attack vector.
          </p>
        </div>
      </div>
    </Section>
  )
}
