import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  id,
  num,
  kicker,
  title,
  children,
  className,
}: {
  id: string
  num: string
  kicker?: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-border py-14 md:py-20", className)}
    >
      <div className="mb-8 flex items-start gap-4">
        <span className="font-mono text-sm text-primary tabular-nums leading-tight pt-1">
          {num}
        </span>
        <div>
          {kicker ? (
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {kicker}
            </p>
          ) : null}
          <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </section>
  )
}

export function Panel({
  children,
  className,
  title,
  tone = "default",
}: {
  children: ReactNode
  className?: string
  title?: string
  tone?: "default" | "danger" | "accent"
}) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card",
        tone === "danger" && "border-destructive/40",
        tone === "accent" && "border-primary/40",
        tone === "default" && "border-border",
        className,
      )}
    >
      {title ? (
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              tone === "danger" ? "bg-destructive" : tone === "accent" ? "bg-accent" : "bg-primary",
            )}
            aria-hidden
          />
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {title}
          </h3>
        </div>
      ) : null}
      <div className="p-4 md:p-5">{children}</div>
    </div>
  )
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: ReactNode[][]
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-secondary/50">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border/60 last:border-0 transition-colors hover:bg-secondary/30"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "px-4 py-3 align-top leading-relaxed",
                    j === 0 ? "font-medium text-foreground" : "text-muted-foreground",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode
  tone?: "default" | "high" | "medium" | "low"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-xs",
        tone === "high" && "border-destructive/40 bg-destructive/10 text-destructive",
        tone === "medium" && "border-primary/40 bg-primary/10 text-primary",
        tone === "low" && "border-accent/40 bg-accent/10 text-accent",
        tone === "default" && "border-border bg-secondary text-muted-foreground",
      )}
    >
      {children}
    </span>
  )
}
