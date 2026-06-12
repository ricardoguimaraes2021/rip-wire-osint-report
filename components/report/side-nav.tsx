"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { sections } from "@/lib/report-data"

export function SideNav() {
  const [active, setActive] = useState(sections[0].id)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-border bg-card px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground shadow-lg lg:hidden"
        aria-expanded={open}
      >
        {open ? "Close" : "Index"}
      </button>

      {open ? (
        <button
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
        />
      ) : null}

      <nav
        className={cn(
          "fixed z-40 transition-transform lg:translate-x-0",
          "bottom-20 right-5 max-h-[70vh] w-60 overflow-y-auto rounded-lg border border-border bg-card p-3 shadow-2xl",
          "lg:sticky lg:top-0 lg:bottom-auto lg:right-auto lg:h-screen lg:max-h-screen lg:w-full lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:py-10 lg:shadow-none",
          open ? "translate-x-0" : "translate-x-[120%]",
        )}
        aria-label="Report sections"
      >
        <p className="mb-4 hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground lg:block">
          Contents
        </p>
        <ul className="space-y-0.5">
          {sections.map((s) => {
            const isActive = active === s.id
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center gap-3 rounded-md px-2.5 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-xs tabular-nums transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground/60",
                    )}
                  >
                    {s.num}
                  </span>
                  <span className="leading-tight">{s.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
