/**
 * RIP WIRE OSINT — PowerPoint generator
 * Uniform dark theme · consolidated slides · slide masters
 * Run: npm run generate:pptx
 */
import pptxgen from "pptxgenjs"
import {
  meta,
  methodology,
  coreConcepts,
  attackFramework,
  identity,
  contactInfo,
  residence,
  family,
  employmentHistory,
  education,
  publications,
  projects,
  githubFindings,
  timeline,
  socmintComparison,
  interests,
  trustAnchors,
  networkNodes,
  waybackChanges,
  waybackConclusion,
  profileEstimates,
  notFound,
  attackStages,
  frameworkApplication,
  channelStrategy,
  resistance,
  exampleMessages,
  probabilityAssessment,
  breakPoints,
  scenarioDefenses,
  defenseLayers,
  takeaways,
  references,
  sections,
} from "../lib/report-data"

const OUT = "/home/ricardo/Documents/Ismo/RIP_WIRE_OSINT_Presentation.pptx"

/** Matches website dark intelligence-console palette */
const C = {
  bg: "1A2332",
  bgCard: "222C3D",
  bgRow: "263040",
  bgRowAlt: "1E2736",
  primary: "D4A017",
  accent: "5EB3CC",
  text: "EEF1F5",
  textMuted: "8E98A8",
  border: "3A4558",
  headerBg: "141C28",
}

const FONT = "Calibri"
const MONO = "Courier New"

const M = {
  TITLE: "RIP_TITLE",
  CONTENT: "RIP_CONTENT",
} as const

type Pres = pptxgen
type Slide = pptxgen.Slide

let slideCounter = 0

function defineMasters(pres: Pres) {
  const brandFooter = {
    text: "RIP WIRE · OSINT Case Study · #HackYourself",
    options: {
      x: 0.45,
      y: 7.02,
      w: 6,
      h: 0.28,
      fontSize: 7.5,
      color: C.textMuted,
      fontFace: MONO,
    },
  }

  pres.defineSlideMaster({
    title: M.TITLE,
    background: { color: C.bg },
    objects: [
      { rect: { x: 0, y: 0, w: "100%", h: 0.1, fill: { color: C.primary } } },
      brandFooter,
    ],
  })

  pres.defineSlideMaster({
    title: M.CONTENT,
    background: { color: C.bg },
    slideNumber: { x: 12.15, y: 7.02, fontSize: 8, color: C.textMuted },
    objects: [
      { rect: { x: 0, y: 0, w: "100%", h: 0.1, fill: { color: C.primary } } },
      { rect: { x: 0.45, y: 6.92, w: 12.35, h: 0.01, fill: { color: C.border } } },
      brandFooter,
    ],
  })
}

function chrome(
  slide: Slide,
  sectionNum: string,
  sectionLabel: string,
  title: string,
) {
  slide.addShape("rect" as pptxgen.ShapeType, {
    x: 0.45,
    y: 0.28,
    w: 0.55,
    h: 0.55,
    fill: { color: C.primary },
    line: { color: C.primary },
  })
  slide.addText(sectionNum, {
    x: 0.45,
    y: 0.3,
    w: 0.55,
    h: 0.5,
    fontSize: 11,
    bold: true,
    color: C.bg,
    align: "center",
    valign: "middle",
    fontFace: MONO,
  })
  slide.addText(sectionLabel.toUpperCase(), {
    x: 1.1,
    y: 0.28,
    w: 4,
    h: 0.28,
    fontSize: 8,
    color: C.accent,
    fontFace: MONO,
    charSpacing: 2,
  })
  slide.addText(title, {
    x: 1.1,
    y: 0.52,
    w: 11.5,
    h: 0.45,
    fontSize: 20,
    bold: true,
    color: C.text,
    fontFace: FONT,
  })
}

function contentSlide(
  pres: Pres,
  sectionNum: string,
  sectionLabel: string,
  title: string,
): Slide {
  slideCounter++
  const s = pres.addSlide({ masterName: M.CONTENT })
  chrome(s, sectionNum, sectionLabel, title)
  return s
}

function tbl(
  slide: Slide,
  headers: string[],
  rows: string[][],
  opts: {
    x?: number
    y?: number
    w?: number
    h?: number
    colW?: number[]
    fontSize?: number
  } = {},
) {
  const fs = opts.fontSize ?? 8.5
  const data: pptxgen.TableRow[] = [
    headers.map((h) => ({
      text: h,
      options: {
        bold: true,
        fill: { color: C.headerBg },
        color: C.primary,
        fontSize: fs,
        fontFace: FONT,
        border: [{ type: "solid" as const, color: C.border, pt: 0.5 }],
      },
    })),
    ...rows.map((row, i) =>
      row.map((cell) => ({
        text: cell,
        options: {
          fontSize: fs,
          fontFace: FONT,
          color: C.text,
          fill: { color: i % 2 === 0 ? C.bgRow : C.bgRowAlt },
          valign: "top" as const,
          border: [{ type: "solid" as const, color: C.border, pt: 0.5 }],
        },
      })),
    ),
  ]
  slide.addTable(data, {
    x: opts.x ?? 0.45,
    y: opts.y ?? 1.15,
    w: opts.w ?? 12.35,
    h: opts.h,
    colW: opts.colW,
    border: { type: "solid", color: C.border, pt: 0.5 },
    autoPage: false,
  })
}

function bullets(
  slide: Slide,
  items: string[],
  opts: { x?: number; y?: number; w?: number; h?: number; fontSize?: number } = {},
) {
  slide.addText(
    items.map((t) => ({
      text: t,
      options: { bullet: { code: "2022" }, breakLine: true, color: C.text },
    })),
    {
      x: opts.x ?? 0.55,
      y: opts.y ?? 1.15,
      w: opts.w ?? 12.2,
      h: opts.h ?? 5.6,
      fontSize: opts.fontSize ?? 11,
      fontFace: FONT,
      valign: "top",
      paraSpaceAfter: 4,
    },
  )
}

function panel(
  slide: Slide,
  x: number,
  y: number,
  w: number,
  h: number,
  title: string,
  body: string,
  accent = C.accent,
) {
  slide.addShape("roundRect" as pptxgen.ShapeType, {
    x,
    y,
    w,
    h,
    fill: { color: C.bgCard },
    line: { color: C.border, pt: 1 },
    rectRadius: 0.04,
  })
  slide.addText(title, {
    x: x + 0.12,
    y: y + 0.1,
    w: w - 0.24,
    h: 0.3,
    fontSize: 10,
    bold: true,
    color: accent,
    fontFace: FONT,
  })
  slide.addText(body, {
    x: x + 0.12,
    y: y + 0.42,
    w: w - 0.24,
    h: h - 0.52,
    fontSize: 9,
    color: C.text,
    fontFace: FONT,
    valign: "top",
  })
}

function twoCol(
  slide: Slide,
  leftTitle: string,
  leftRows: string[][],
  leftHeaders: string[],
  rightTitle: string,
  rightRows: string[][],
  rightHeaders: string[],
  y = 1.15,
) {
  slide.addText(leftTitle, {
    x: 0.45,
    y,
    w: 5.9,
    h: 0.3,
    fontSize: 10,
    bold: true,
    color: C.accent,
    fontFace: FONT,
  })
  tbl(slide, leftHeaders, leftRows, {
    x: 0.45,
    y: y + 0.32,
    w: 5.9,
    colW: leftHeaders.map(() => 5.9 / leftHeaders.length),
    fontSize: 7.5,
  })
  slide.addText(rightTitle, {
    x: 6.55,
    y,
    w: 6.25,
    h: 0.3,
    fontSize: 10,
    bold: true,
    color: C.accent,
    fontFace: FONT,
  })
  tbl(slide, rightHeaders, rightRows, {
    x: 6.55,
    y: y + 0.32,
    w: 6.25,
    colW: rightHeaders.map(() => 6.25 / rightHeaders.length),
    fontSize: 7.5,
  })
}

function main() {
  const pres = new pptxgen()
  pres.layout = "LAYOUT_WIDE"
  pres.author = "RIP WIRE"
  pres.title = "RIP WIRE — OSINT Case Study"
  pres.subject = meta.course

  defineMasters(pres)

  // ── 1 · Title ──────────────────────────────────────────────────────
  {
    slideCounter++
    const s = pres.addSlide({ masterName: M.TITLE })
    s.addText("RIP WIRE", {
      x: 0.6,
      y: 1.4,
      w: 11,
      h: 0.5,
      fontSize: 15,
      color: C.primary,
      fontFace: MONO,
      charSpacing: 8,
    })
    s.addText("OSINT Case Study", {
      x: 0.6,
      y: 1.95,
      w: 11,
      h: 0.9,
      fontSize: 42,
      color: C.text,
      bold: true,
      fontFace: FONT,
    })
    s.addText("#HackYourself — Dark Side of Social Engineering", {
      x: 0.6,
      y: 2.95,
      w: 11,
      h: 0.45,
      fontSize: 17,
      color: C.accent,
      fontFace: FONT,
    })
    panel(s, 0.6, 3.7, 11.8, 2.6, "Assignment Context", [
      `Target: ${meta.target}`,
      `Group: ${meta.group} (${meta.groupExpanded})`,
      `Presentation: ${meta.presentation}`,
      meta.consent,
    ].join("\n"), C.primary)
  }

  // ── 2 · Agenda ─────────────────────────────────────────────────────
  {
    const s = contentSlide(pres, "—", "Overview", "Agenda")
    tbl(
      s,
      ["#", "Section", "Focus"],
      sections.map((sec) => [sec.num, sec.label, agendaFocus(sec.id)]),
      { y: 1.15, colW: [0.7, 3.5, 8.15], fontSize: 9 },
    )
  }

  // ── 3 · Executive Summary (consolidated) ───────────────────────────
  {
    const s = contentSlide(pres, "00", "Executive Summary", "Objective, Methodology & Central Finding")
    panel(
      s,
      0.45,
      1.15,
      7.6,
      2.5,
      "Objective",
      "Explore how public information is collected, correlated, and used to build a profile — and how that profile could support a social engineering attack plan. We did NOT attack the target; we studied attacker methodology and defensive countermeasures.",
    )
    panel(
      s,
      8.2,
      1.15,
      4.6,
      2.5,
      "Central Finding",
      "Risk emerges when observations connect into a narrative. Narrative → credibility → opportunity. Verification disrupts the narrative.",
      C.primary,
    )
    panel(s, 0.45, 3.75, 12.35, 2.8, "Methodology pipeline", methodology, C.accent)
  }

  // ── 4 · Core Concepts + Framework ──────────────────────────────────
  {
    const s = contentSlide(pres, "01", "Core Concepts", "Five Principles")
    coreConcepts.forEach((c, i) => {
      const col = i % 3
      const row = Math.floor(i / 3)
      const x = 0.45 + col * 4.15
      const y = 1.15 + row * 2.55
      panel(s, x, y, 3.95, 2.35, c.concept, c.application)
    })
  }
  {
    const s = contentSlide(pres, "01", "Core Concepts", "Attack Planning Framework")
    attackFramework.forEach((f, i) => {
      const x = 0.45 + i * 3.12
      panel(s, x, 1.3, 2.95, 4.8, `${i + 1}. ${f.step}`, f.detail, C.primary)
    })
  }

  // ── 5–7 · OSINT (3 consolidated slides) ─────────────────────────
  {
    const s = contentSlide(pres, "02", "OSINT", "Identity, Residence & Family")
    twoCol(
      s,
      "Identity & Role",
      identity.map((r) => [r.field, r.finding]),
      ["Field", "Finding"],
      "Residence",
      residence.map((r) => [r.field, r.finding]),
      ["Field", "Finding"],
      1.15,
    )
    s.addText("Family Context (ethical boundaries — context only, excluded from attack vectors)", {
      x: 0.45,
      y: 4.55,
      w: 12,
      h: 0.28,
      fontSize: 9,
      color: C.textMuted,
      italic: true,
      fontFace: FONT,
    })
    tbl(
      s,
      ["Relation", "Detail", "Note"],
      family.map((r) => [r.relation, r.detail, r.source]),
      { y: 4.9, colW: [1.8, 5.5, 5.05], fontSize: 8 },
    )
  }
  {
    const s = contentSlide(pres, "02", "OSINT", "Contact Channels & Digital Footprint")
    tbl(
      s,
      ["Channel", "Value"],
      contactInfo.map((r) => [r.channel, r.value]),
      { y: 1.15, colW: [3.2, 9.15], fontSize: 8.5 },
    )
  }
  {
    const s = contentSlide(pres, "02", "OSINT", "Career, Education, Projects & GitHub")
    tbl(
      s,
      ["Period", "Role / Qualification", "Org / Focus"],
      [
        ...employmentHistory.map((r) => [r.period, r.role, `${r.org} · ${r.location}`]),
        ...education.map((r) => [r.period, r.qual, r.inst]),
      ],
      { y: 1.1, colW: [2.2, 4.5, 5.65], fontSize: 7.5 },
    )
    s.addText("Projects", {
      x: 0.45,
      y: 3.55,
      w: 6,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: C.accent,
      fontFace: FONT,
    })
    tbl(
      s,
      ["Project", "Focus"],
      projects.map((r) => [`${r.project} (${r.period})`, r.focus]),
      { y: 3.8, x: 0.45, w: 6.0, colW: [2.2, 3.8], fontSize: 7.5 },
    )
    s.addText("Publications & GitHub", {
      x: 6.65,
      y: 3.55,
      w: 6,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: C.accent,
      fontFace: FONT,
    })
    const pubLines = [
      ...publications.recent.map((p) => `• ${p}`),
      ...publications.earlier.slice(0, 3).map((p) => `• ${p}`),
      ...githubFindings.map((g) => `• ${g.finding}: ${g.detail}`),
    ].join("\n")
    panel(s, 6.55, 3.8, 6.25, 2.85, "Key outputs & technical exposure", pubLines)
  }

  // ── 8 · SOCMINT ─────────────────────────────────────────────────
  {
    const s = contentSlide(pres, "03", "SOCMINT", "OSINT vs SOCMINT · Interests · Trust Anchors")
    tbl(
      s,
      ["OSINT provides", "SOCMINT adds"],
      socmintComparison.map((r) => [r.osint, r.socmint]),
      { y: 1.15, w: 7.5, colW: [3.75, 3.75], fontSize: 8.5 },
    )
    tbl(
      s,
      ["Interest", "Signal"],
      interests.map((r) => [r.category, r.detail]),
      { y: 1.15, x: 8.1, w: 4.7, colW: [1.5, 3.2], fontSize: 8 },
    )
    s.addText("Trust Anchors — credibility levers for pretexts", {
      x: 0.45,
      y: 3.35,
      w: 12,
      h: 0.28,
      fontSize: 9,
      bold: true,
      color: C.primary,
      fontFace: FONT,
    })
    bullets(s, trustAnchors, { y: 3.65, fontSize: 10, h: 3.0 })
  }

  // ── 9 · Timeline ────────────────────────────────────────────────
  {
    const s = contentSlide(pres, "04", "Timeline", "Professional Chronology")
    tbl(
      s,
      ["Year", "Event"],
      timeline.map((r) => [r.year, `${r.event} (${r.source})`]),
      { y: 1.15, colW: [0.9, 11.45], fontSize: 8.5 },
    )
  }

  // ── 10 · Network ──────────────────────────────────────────────
  {
    const s = contentSlide(pres, "05", "Network", "Correlated Nodes by Category")
    const groups: { key: string; label: string; color: string }[] = [
      { key: "professional", label: "Professional", color: C.primary },
      { key: "academic", label: "Academic / Projects", color: C.accent },
      { key: "social", label: "Social / Community", color: "A78BFA" },
      { key: "business", label: "Business", color: "6EE7B7" },
    ]
    groups.forEach((g, i) => {
      const col = i % 2
      const row = Math.floor(i / 2)
      const x = 0.45 + col * 6.35
      const y = 1.15 + row * 2.75
      const nodes = networkNodes.filter((n) => n.group === g.key).map((n) => n.id)
      panel(s, x, y, 6.1, 2.5, g.label, nodes.join("  ·  "), g.color)
    })
    s.addText(
      "Correlation enables credible pretexts: RUN-EU + Työuralle + Uraohjausopas + HAMK institutional context.",
      { x: 0.45, y: 6.55, w: 12, h: 0.35, fontSize: 9, color: C.textMuted, italic: true, fontFace: FONT },
    )
  }

  // ── 11 · Wayback ──────────────────────────────────────────────
  {
    const s = contentSlide(pres, "06", "Wayback", "Archive Summary & Conclusions")
    panel(
      s,
      0.45,
      1.15,
      3.8,
      2.2,
      "Scope",
      "5 URLs · 12 HTML snapshots · 4 content changes\nStable contact since 2024:\nismo.turve@hamk.fi\n+358 50 302 2320",
    )
    tbl(
      s,
      ["Date", "Page", "Change"],
      waybackChanges.map((r) => [r.date, r.page, r.change]),
      { x: 4.4, y: 1.15, w: 8.4, colW: [1.2, 2.8, 4.4], fontSize: 8 },
    )
    tbl(
      s,
      ["Finding", "Detail"],
      waybackConclusion.map((r) => [r.finding, r.detail]),
      { y: 3.55, colW: [2.2, 10.15], fontSize: 8.5 },
    )
  }

  // ── 12 · Profiling ──────────────────────────────────────────────
  {
    const s = contentSlide(pres, "07", "Profiling", "Dimension Estimates & Information Gaps")
    tbl(
      s,
      ["Dimension", "%", "Basis"],
      profileEstimates.map((p) => [p.dimension, String(p.estimate), p.basis]),
      { y: 1.15, w: 7.4, colW: [2.4, 0.6, 4.4], fontSize: 8 },
    )
    s.addText("NOT Found — ethical boundaries", {
      x: 8.0,
      y: 1.15,
      w: 5,
      h: 0.28,
      fontSize: 9,
      bold: true,
      color: C.accent,
      fontFace: FONT,
    })
    tbl(
      s,
      ["Category", "Status"],
      notFound.map((n) => [n.category, n.status]),
      { x: 8.0, y: 1.45, w: 4.8, colW: [2.0, 2.8], fontSize: 7.5 },
    )
    panel(
      s,
      0.45,
      5.35,
      12.35,
      1.35,
      "Profiling note",
      "All estimates are probabilistic. Personal OPSEC hygiene scored lowest (30%) despite high cyber-awareness — GitHub gists and consumer email for business illustrate the OPSEC paradox.",
      C.primary,
    )
  }

  // ── 13–14 · Attack Plan ─────────────────────────────────────────
  {
    const s = contentSlide(pres, "08", "Attack Plan", "Scenario Design · Stages · Framework · Channels")
    bullets(
      s,
      [
        "Pretext: RUN-EU partner researcher benchmarking vocational guidance + digital safety",
        "Anchors: Työuralle-hanke, Uraohjausopas, AI-scams publication, HAMK context",
        "Ethical exclusions: family, housing co-op, personal email",
      ],
      { y: 1.1, h: 1.2, fontSize: 9 },
    )
    tbl(
      s,
      ["Stage", "Objective"],
      attackStages.map((r) => [r.stage, r.objective]),
      { y: 2.35, colW: [1.2, 11.15], fontSize: 7.5 },
    )
    tbl(
      s,
      ["Element", "Application"],
      frameworkApplication.map((r) => [r.label, r.value]),
      { y: 3.55, w: 7.2, colW: [1.5, 5.7], fontSize: 7.5 },
    )
    tbl(
      s,
      ["Stage", "Channel", "Rationale"],
      channelStrategy.map((r) => [r.stage, r.channel, r.rationale]),
      { x: 7.8, y: 3.55, w: 5.0, colW: [1.0, 1.5, 2.5], fontSize: 6.5 },
    )
  }
  {
    const s = contentSlide(pres, "08", "Attack Plan", "Example Messages (LinkedIn + Email)")
    exampleMessages.forEach((msg, i) => {
      const x = 0.45 + i * 6.35
      const title =
        "subject" in msg && msg.subject
          ? `${msg.label}\nSubject: ${msg.subject}`
          : msg.label
      panel(s, x, 1.2, 6.1, 5.5, title, msg.body, i === 0 ? C.accent : C.primary)
    })
  }

  // ── 15 · Stress Test ────────────────────────────────────────────
  {
    const s = contentSlide(pres, "09", "Stress Test", "Resistance & Probability Assessment")
    tbl(
      s,
      ["Resistance", "Likelihood", "Why"],
      resistance.map((r) => [r.resistance, r.likelihood, r.why]),
      { y: 1.1, w: 7.5, colW: [3.5, 1.2, 2.8], fontSize: 7.5 },
    )
    tbl(
      s,
      ["Phase", "Estimate", "Reasoning"],
      probabilityAssessment.map((r) => [r.phase, r.estimate, r.reasoning]),
      { x: 8.1, y: 1.1, w: 4.7, colW: [1.8, 0.9, 2.0], fontSize: 7 },
    )
    tbl(
      s,
      ["#", "Break Point", "Mechanism"],
      breakPoints.map((r) => [String(r.n), r.point, r.mechanism]),
      { y: 4.0, colW: [0.4, 3.2, 8.75], fontSize: 7.5 },
    )
  }
  {
    const s = contentSlide(pres, "09", "Stress Test", "Scenario-Specific Defenses")
    tbl(
      s,
      ["Threat", "Disruption"],
      scenarioDefenses.map((r) => [r.threat, r.disruption]),
      { y: 1.15, colW: [3.5, 8.85], fontSize: 9 },
    )
    panel(
      s,
      0.45,
      5.2,
      12.35,
      1.5,
      "Most likely outcome",
      "Target shares only public materials or does not respond. Attacker learns communication style; no breach. Stage 2 (internal process docs) estimated at 5–15% success.",
      C.primary,
    )
  }

  // ── 16 · Defense ────────────────────────────────────────────────
  {
    const s = contentSlide(pres, "10", "Defense", "Three Mitigation Layers")
    defenseLayers.forEach((layer, i) => {
      const x = 0.45 + i * 4.15
      panel(
        s,
        x,
        1.2,
        3.95,
        5.5,
        layer.title,
        layer.items.map((item) => `• ${item}`).join("\n"),
        [C.primary, C.accent, "6EE7B7"][i],
      )
    })
  }

  // ── 17 · Conclusion ─────────────────────────────────────────────
  {
    const s = contentSlide(pres, "11", "Conclusion", "Key Takeaways")
    bullets(s, takeaways, { y: 1.15, fontSize: 11 })
  }
  {
    const s = contentSlide(pres, "11", "Conclusion", "References & Sources")
    tbl(
      s,
      ["Source", "URL"],
      references.map((r) => [r.source, r.url]),
      { y: 1.15, colW: [3.2, 9.15], fontSize: 9 },
    )
  }

  // ── 18 · Closing ──────────────────────────────────────────────────
  {
    slideCounter++
    const s = pres.addSlide({ masterName: M.TITLE })
    s.addText("Thank You", {
      x: 0.6,
      y: 2.4,
      w: 11,
      h: 1.0,
      fontSize: 40,
      color: C.text,
      bold: true,
      align: "center",
      fontFace: FONT,
    })
    s.addText("RIP WIRE — Romania · India · Portugal", {
      x: 0.6,
      y: 3.5,
      w: 11,
      h: 0.5,
      fontSize: 16,
      color: C.primary,
      align: "center",
      fontFace: FONT,
    })
    s.addText("Questions & Defense Discussion", {
      x: 0.6,
      y: 4.1,
      w: 11,
      h: 0.4,
      fontSize: 14,
      color: C.accent,
      align: "center",
      fontFace: FONT,
    })
  }

  pres.writeFile({ fileName: OUT }).then(() => {
    console.log(`Presentation saved: ${OUT}`)
    console.log(`Total slides: ${slideCounter}`)
  })
}

function agendaFocus(id: string): string {
  const map: Record<string, string> = {
    overview: "Objective, methodology, central finding",
    concepts: "Course principles & attack framework",
    osint: "Identity, contacts, career, publications",
    socmint: "Facebook context, interests, trust anchors",
    timeline: "Professional chronology",
    network: "Correlated nodes & pretext levers",
    wayback: "HAMK profile evolution in archives",
    profiling: "Probabilistic estimates & gaps",
    attack: "Cross-Border Guidance Exchange scenario",
    stress: "Resistance, probability, break points",
    defense: "Individual, org & technical controls",
    conclusion: "Takeaways & references",
  }
  return map[id] ?? ""
}

main()
