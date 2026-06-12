import { SideNav } from "@/components/report/side-nav"
import { Hero } from "@/components/report/hero"
import { OverviewSection, ConceptsSection } from "@/components/report/intro-sections"
import { OsintSection } from "@/components/report/osint-section"
import { SocmintSection } from "@/components/report/socmint-section"
import { TimelineSection } from "@/components/report/timeline-section"
import { NetworkSection } from "@/components/report/network-section"
import { WaybackSection } from "@/components/report/wayback-section"
import { ProfilingSection } from "@/components/report/profiling-section"
import { AttackSection } from "@/components/report/attack-section"
import { StressSection } from "@/components/report/stress-section"
import { DefenseSection } from "@/components/report/defense-section"
import { ConclusionSection } from "@/components/report/conclusion-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 px-4 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        <aside className="lg:border-r lg:border-border">
          <SideNav />
        </aside>

        <main className="min-w-0 py-8 lg:py-0">
          <Hero />
          <OverviewSection />
          <ConceptsSection />
          <OsintSection />
          <SocmintSection />
          <TimelineSection />
          <NetworkSection />
          <WaybackSection />
          <ProfilingSection />
          <AttackSection />
          <StressSection />
          <DefenseSection />
          <ConclusionSection />
        </main>
      </div>
    </div>
  )
}
