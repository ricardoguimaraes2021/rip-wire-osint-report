// Central data layer for the RIP WIRE OSINT analytical report.
// All content is from the educational group assignment (with consent).

export const meta = {
  course: "SAP #HackYourself — Dark Side of Social Engineering",
  type: "Analytical Group Assignment",
  group: "RIP WIRE",
  groupExpanded: "Romania · India · Portugal",
  target: "Ismo Turve — Senior Lecturer, Häme University of Applied Sciences (HAMK)",
  presentation: "June 12th, 2026 (Teams)",
  consent: "Explicit informed consent from target and family (educational use only)",
}

export const sections = [
  { id: "overview", label: "Executive Summary", num: "00" },
  { id: "concepts", label: "Core Concepts", num: "01" },
  { id: "osint", label: "OSINT Findings", num: "02" },
  { id: "socmint", label: "SOCMINT — Facebook", num: "03" },
  { id: "timeline", label: "Career Timeline", num: "04" },
  { id: "network", label: "Network Map", num: "05" },
  { id: "wayback", label: "Wayback Analysis", num: "06" },
  { id: "profiling", label: "Profiling", num: "07" },
  { id: "attack", label: "Attack Plan", num: "08" },
  { id: "stress", label: "Stress Test", num: "09" },
  { id: "defense", label: "Defense", num: "10" },
  { id: "conclusion", label: "Conclusion", num: "11" },
]

export const methodology = `Digital Footprint → OSINT → SOCMINT → Profiling → Attack Planning → Stress Testing → Defense`

export const coreConcepts = [
  {
    concept: "Public ≠ Harmless",
    application:
      "Individual facts (name, employer, publication) appear low-risk alone; risk emerges when connected.",
  },
  {
    concept: "Context Creates Credibility",
    application:
      "Attackers rarely need secrets — they need context (HAMK, projects, publications, colleagues).",
  },
  {
    concept: "Patterns Over Posts",
    application:
      "Academic calendar, project cycles, publication frequency matter more than single posts.",
  },
  {
    concept: "Assumptions, Not Facts",
    application:
      "All profiling is probabilistic; observations are distinguished from assumptions.",
  },
  {
    concept: "Verification Breaks Narratives",
    application:
      "Callbacks, secondary approval, and friction disrupt attacker assumptions.",
  },
]

export const attackFramework = [
  { step: "Anchor", detail: "A verified fact (HAMK, publication, conference, project)" },
  { step: "Adjacent Truth", detail: "A believable detail connected to the anchor" },
  { step: "Pressure", detail: "Urgency (deadline, admin request, project issue)" },
  { step: "Ask", detail: "A plausible action request" },
]

export const identity = [
  { field: "Full name", finding: "Ismo Turve", source: "HAMK, Facebook (public), registries" },
  { field: "Approximate age", finding: "~58", source: "Public records (correlated)" },
  { field: "Location / region", finding: "Heinola, Finland", source: "Facebook (public), community posts, registries" },
  { field: "Professional role", finding: "Senior Lecturer (EN) / Lehtori (FI)", source: "HAMK" },
  { field: "Institution", finding: "HAMK — Häme University of Applied Sciences", source: "HAMK, LinkedIn" },
  { field: "Department", finding: "Business Information Technology / Tietojenkäsittely", source: "HAMK (since 2025)" },
  { field: "Online aliases", finding: "Steam: KharOn · GitHub: ismoturve", source: "Public gaming/dev profiles" },
]

export const contactInfo = [
  { channel: "Institutional email", value: "ismo.turve@hamk.fi", source: "HAMK contact page" },
  { channel: "Institutional phone", value: "+358 50 302 2320", source: "HAMK contact page" },
  { channel: "Personal / consumer email", value: "ismo.turve@live.com", source: "Public business registries" },
  { channel: "Academic email (prior)", value: "ismo.turve@jyu.fi", source: "Public registries, publications" },
  { channel: "Business phone", value: "+358 40 507 8822", source: "Public business registries (IT-Safety)" },
  { channel: "Facebook", value: "Public profile (friends list / posts visible)", source: "Public" },
  { channel: "LinkedIn", value: "in/ismo-turve-a43203141", source: "Public" },
  { channel: "X / Twitter", value: "@IsmoTurve (61 followers, low activity)", source: "Public" },
  { channel: "GitHub", value: "ismoturve (32 public gists)", source: "Public" },
  { channel: "Steam", value: "KharOn", source: "Public profile" },
  { channel: "Business web", value: "itsafe.fi (IT-Safety)", source: "Public" },
]

export const residence = [
  { field: "Country", finding: "Finland", source: "Registries, Facebook" },
  { field: "City / municipality", finding: "Heinola", source: "Facebook (public), community posts, registries" },
  { field: "Neighbourhood", finding: "Pirholantie area", source: "Facebook (public), housing-cooperative correlation" },
  { field: "Housing cooperative", finding: "Asunto Oy Pirholankangas", source: "Public business / property registries" },
  { field: "Exact street address", finding: "Not recorded — cooperative level only", source: "Ethical boundary" },
]

export const family = [
  { relation: "Spouse", detail: "Heli Turve", source: "Facebook (public), tagged posts" },
  { relation: "Sons", detail: "Iisaku and Viljami (likely — public family references)", source: "Facebook (public)" },
  { relation: "Daughter", detail: "Referenced in public posts (horse-riding / equestrian context)", source: "Facebook (public)" },
  { relation: "Other", detail: "References to 3 horses in public lifestyle posts", source: "Facebook (public)" },
  { relation: "Ethical note", detail: "Family excluded from attack vectors — context only", source: "RIP WIRE scope" },
  { relation: "Family contact details", detail: "Non-public — not collected", source: "Ethical boundary" },
]

export const waybackScriptOutput = `Discovering URLs on the Wayback Machine...
  5 URLs found

Processing: https://www.hamk.fi/en/contact/ismo-turve-2/
  5 HTML snapshots
  → 2024-02-21 07:56:57 UTC
  → 2024-06-20 11:52:31 UTC
  → 2025-02-16 05:00:45 UTC
  → 2025-05-19 20:33:32 UTC *
  → 2025-11-07 15:08:11 UTC *

Processing: https://www.hamk.fi/yhteys/ismo-turve/
  7 HTML snapshots
  → 2024-02-21 14:41:23 UTC
  → 2024-08-13 15:00:53 UTC
  → 2025-01-19 09:42:43 UTC *
  → 2025-05-12 02:05:30 UTC
  → 2025-07-10 04:18:45 UTC
  → 2025-11-08 12:29:50 UTC *
  → 2026-02-11 09:13:02 UTC

============================================================
SUMMARY
============================================================
URLs discovered: 5
HTML snapshots: 12
Content changes detected: 4

https://www.hamk.fi/en/contact/ismo-turve-2/
  2024-02-21: Ismo Turve | Senior Lecturer | ismo.turve@hamk.fi | +358503022320
  2025-05-19 *: Ismo Turve | Senior Lecturer — Business Information Technology | ...
  2025-11-07 *: (meta description + profile image updated)

https://www.hamk.fi/yhteys/ismo-turve/
  2024-02-21: Ismo Turve | Lehtori | ismo.turve@hamk.fi | +358503022320
  2025-01-19 *: Ismo Turve | Lehtori — Tietojenkäsittely | ...
  2025-11-08 *: (metadata update)

Media assets:
  ismo-turve.jpg (2024)
  ismo-turve-400x400.jpg (2024)
  thumbnail_Ismo_Turve_sposti.jpg (2020)

* = content changed from previous snapshot`

export const employmentHistory = [
  { period: "Jan 2022 – Present", role: "Senior Lecturer", org: "HAMK", location: "Hämeenlinna, Kanta-Häme" },
  { period: "Aug 2020 – Jan 2022", role: "Guidance Counselor (uraohjaus)", org: "HAMK", location: "Lahti sub-region, Päijät-Häme" },
  { period: "Mar 2018 – Aug 2020", role: "Senior Lecturer", org: "HAMK", location: "Hämeenlinna" },
  { period: "Jan 2007 – Mar 2018", role: "Opettaja (Teacher)", org: "Koulutuskeskus Salpaus", location: "Finland (vocational education)" },
]

export const education = [
  { period: "Sep 2021 – Jul 2024", qual: "Master of Engineering (MEng), Cyber Security Specialist", inst: "JAMK University of Applied Sciences" },
  { period: "2008 – 2010", qual: "Master's degree, Information Technology", inst: "University of Jyväskylä" },
]

export const publications = {
  recent: [
    "AI in scams and fraud awareness",
    'Privacy — "Google tietää kenen kanssa nukut" (Google knows who you sleep with)',
    "AI for good in education",
  ],
  earlier: [
    "Multiple HAMK Unlimited articles on career guidance (uraohjaus), e-learning",
    "Co-author: Uraohjausopas (Career Guidance Guide) with Marja-Liisa Samppala",
    "ResearchGate: WLAN security thesis (older)",
    "Topics: cybersecurity, privacy, technology education, digital skills",
  ],
}

export const projects = [
  { project: "Teformi", period: "2018–2021", focus: "Technology education reform, ESF funding", source: "HAMK Unlimited" },
  { project: "Työuralle-hanke", period: "ESR", focus: "VET teacher career guidance skills", source: "OPH programs, HAMK" },
  { project: "Workshops & surveys", period: "Ongoing", focus: "National/regional education events", source: "OPH, HAMK" },
  { project: "Thesis supervision", period: "Ongoing", focus: "Including cyber topics", source: "Theseus / HAMK" },
]

export const githubFindings = [
  { finding: "GitHub account", detail: "ismoturve — 32 public gists" },
  { finding: "Lab exposure", detail: "Gists reference lab topology, VirtualBox 7.1.12 configs, static IPs" },
  { finding: "Supply chain risk", detail: "Pre-built Ubuntu .ova distributed via personal Google Drive link" },
  { finding: "OPSEC note", detail: "Teaching SE defense while exposing infra details publicly — OPSEC paradox" },
]

export const timeline = [
  { year: "2006", event: "IT-Safety founded", source: "Business registries" },
  { year: "2007", event: "Teacher (Opettaja) at Koulutuskeskus Salpaus begins", source: "LinkedIn" },
  { year: "2008", event: "Master's in Information Technology, University of Jyväskylä (to 2010)", source: "LinkedIn" },
  { year: "2018", event: "Returns to HAMK as Senior Lecturer (Mar); Teformi project begins", source: "LinkedIn, HAMK Unlimited" },
  { year: "2019", event: "HAMK Unlimited uraohjaus article series", source: "HAMK Unlimited" },
  { year: "2020", event: "Guidance Counselor at HAMK (Aug) — Lahti region", source: "LinkedIn" },
  { year: "2021", event: "Teformi concludes; JAMK MEng Cyber Security begins (Sep)", source: "LinkedIn, project docs" },
  { year: "2022", event: "Senior Lecturer at HAMK again (Jan) — Hämeenlinna", source: "LinkedIn" },
  { year: "2023", event: "HAMK public contact page published (Nov)", source: "Wayback Machine" },
  { year: "2024", event: "JAMK MEng completed (Jul); AI scams & privacy publications", source: "LinkedIn, HAMK Unlimited" },
  { year: "2025", event: "Department BIT / Tietojenkäsittely added to HAMK profile", source: "Wayback Machine" },
  { year: "2026", event: "SAP #HackYourself course lecturer", source: "Course context" },
]

export const socmintComparison = [
  { osint: "Facts (name, role, institutional email)", socmint: "Social relationships, family context, local community" },
  { osint: "Employer and publications", socmint: "Interests, hobbies, emotional levers, lifestyle patterns" },
  { osint: "Professional network", socmint: "Geographic anchoring, shared activities, routine signals" },
]

export const interests = [
  { category: "Motorcycles", detail: "Honda CBR models — recurring theme in posts" },
  { category: "Sports / NFL", detail: "Kansas City Chiefs supporter" },
  { category: "Entertainment", detail: "Harry Potter — tattoos referenced" },
  { category: "Technology", detail: "Cybersecurity, IT, education" },
  { category: "Animals", detail: "Horses (daughter's context)" },
  { category: "Values", detail: "Public support for Ukraine" },
]

export const trustAnchors = [
  "HAMK (institutional authority)",
  "Cybersecurity / teaching expertise",
  "Career guidance (uraohjaus) community",
  "Heinola local community & housing cooperative",
  "Family (spouse, children — emotional lever)",
  "Publications and RUN-EU international network",
  "Shared interests (Harry Potter, motorcycles, NFL)",
]

export const networkNodes = [
  { id: "HAMK", group: "professional" },
  { id: "AOKK / HAMK Edu", group: "professional" },
  { id: "ResearchGate", group: "academic" },
  { id: "LinkedIn", group: "professional" },
  { id: "X / Twitter", group: "professional" },
  { id: "HAMK Unlimited", group: "academic" },
  { id: "Teformi Project", group: "academic" },
  { id: "Työuralle Project", group: "academic" },
  { id: "Uraohjausopas", group: "academic" },
  { id: "OPH Events", group: "academic" },
  { id: "RUN-EU Network", group: "academic" },
  { id: "Facebook (public)", group: "social" },
  { id: "Heli Turve · family", group: "social" },
  { id: "Heinola community", group: "social" },
  { id: "Asunto Oy Pirholankangas", group: "social" },
  { id: "IT-Safety / itsafe.fi", group: "business" },
]

export const waybackChanges = [
  { date: "2025-01-19", page: "FI (/yhteys/ismo-turve/)", change: "Department Tietojenkäsittely added" },
  { date: "2025-05-19", page: "EN (/en/contact/ismo-turve-2/)", change: "Department Business Information Technology added" },
  { date: "2025-11-07", page: "EN", change: "Meta description updated; profile image updated" },
  { date: "2025-11-08", page: "FI", change: "Metadata update (date_modified)" },
]

export const waybackConclusion = [
  { finding: "Historical exposure", detail: "Archives confirm the profile existed since early 2024 with stable institutional contact" },
  { finding: "New personal data", detail: "None — archives did not reveal private information absent from current public sources" },
  { finding: "Professional evolution", detail: "Department naming added in 2025 — useful for timeline and credibility, not private data discovery" },
  { finding: "Key observation", detail: "Historical archives increased temporal visibility; they did not increase personal visibility" },
]

export const profileEstimates = [
  { dimension: "Tech-Savvy Educator", estimate: 85, basis: "Volume of tech/cyber publications and teaching role" },
  { dimension: "Career Guidance Expert", estimate: 90, basis: "Uraohjausopas, Työuralle, multiple articles" },
  { dimension: "Project Collaborator", estimate: 80, basis: "Teformi, ESF/ESR projects, OPH events" },
  { dimension: "Privacy & Cyber Aware", estimate: 85, basis: "MEng Cyber Security (2024); publications; teaches this course" },
  { dimension: "Publication Active", estimate: 70, basis: "Regular HAMK Unlimited contributions" },
  { dimension: "Professional Networker", estimate: 65, basis: "LinkedIn, projects, RUN-EU" },
  { dimension: "Personal OPSEC Hygiene", estimate: 30, basis: "GitHub gists, consumer email for business" },
]

export const notFound = [
  { category: "Full home street address", status: "Not recorded — neighbourhood/cooperative level only" },
  { category: "Passwords / credentials", status: "Not found" },
  { category: "Private (non-public) social accounts", status: "Not accessed" },
  { category: "Internal HAMK systems / student data", status: "Not accessible" },
  { category: "Exact daily schedule / office hours", status: "Not publicly detailed" },
  { category: "LinkedIn full connection graph", status: "Requires login — not collected" },
  { category: "Non-public family contact details", status: "Not collected" },
]

export const attackStages = [
  { stage: "Stage 1", objective: "Establish trust as a legitimate RUN-EU partner researcher interested in vocational guidance + digital safety" },
  { stage: "Stage 2", objective: "Obtain a non-public but low-sensitivity artifact (anonymised exercise outline, slide template, collaboration link)" },
  { stage: "Stage 3 (stretch)", objective: 'Pivot toward how HAMK handles student data in guidance workflows — framed as "benchmarking for our national report"' },
]

export const frameworkApplication = [
  { label: "Anchor", value: "Työuralle-hanke + Uraohjausopas (verifiable public work)" },
  { label: "Adjacent Truth", value: "RUN-EU mobility context + reference to Marja-Liisa Samppala as co-author + recent AI-scams publication" },
  { label: "Pressure", value: 'Partner mobility report deadline in 10 days; "we need one Finnish benchmark example"' },
  { label: "Ask (Stage 1)", value: "20-minute Teams call or reply with link to a public/anonymised resource" },
  { label: "Ask (Stage 2)", value: '"Could you share how HAMK documents student consent?" (escalation — likely resisted)' },
]

export const channelStrategy = [
  { stage: "1 — Approach", channel: "LinkedIn connection request + note", rationale: "Low friction; profile visible; normal in academic networks" },
  { stage: "2 — Conversation", channel: "ismo.turve@hamk.fi", rationale: "Shift to institutional email once rapport established" },
  { stage: "3 — Follow-up", channel: "HAMK Teams / meeting link", rationale: "Attacker may send fake calendar invite — detection point" },
  { stage: "Not used", channel: "Personal email, housing co-op, family", rationale: "Outside ethical scope; poor fit for academic narrative" },
]

export const resistance = [
  { resistance: "Verifies sender via HAMK international office / RUN-EU coordinator", likelihood: "High", why: "Institutional verification culture" },
  { resistance: "Asks which consortium work package the request relates to", likelihood: "High", why: "Domain expertise — vague answers fail" },
  { resistance: "Declines to share internal process documentation", likelihood: "High", why: "Data-protection awareness from privacy publications" },
  { resistance: "Recognises persona not in RUN-EU partner directory", likelihood: "Medium", why: "Requires actual verification step" },
  { resistance: "Ignores LinkedIn request entirely", likelihood: "Medium", why: "Low activity on X; LinkedIn may be monitored less" },
  { resistance: "Engages politely but shares only public materials", likelihood: "High", why: "Most likely positive outcome for attacker at Stage 1" },
]

export const exampleMessages = [
  {
    label: "Message 1 — LinkedIn Connection Note",
    body: "Hei Ismo — I am [Name], researcher at [Partner UAS] within RUN-EU. We are compiling examples of how vocational guidance programmes integrate digital safety and scam awareness. Your Työuralle-hanke materials and the Uraohjausopas have been recommended to us. I would appreciate connecting to ask one short benchmarking question. Kiitos!",
  },
  {
    label: "Message 2 — Follow-Up Email",
    subject: "RUN-EU work package 4 — Finnish benchmark for guidance & digital safety",
    body: "Dear Ismo,\n\nThank you for connecting. As mentioned, our consortium (RUN-EU mobility stream) is preparing a short comparative report for partner institutions in Portugal, Romania, and Finland.\n\nI read your HAMK Unlimited article on AI-assisted scams and student privacy — it aligns closely with what we are trying to document. We are looking for one anonymised example of how career guidance exercises address online manipulation risks in VET settings.\n\nWould you have 20 minutes next week for a Teams call, or could you point me to a resource you already use with students?\n\nBest regards,\n[Persona: doctoral researcher, vocational education — RUN-EU affiliation claimed]",
  },
]

export const probabilityAssessment = [
  { phase: "LinkedIn connection accepted", estimate: "35–50%", reasoning: "Plausible RUN-EU frame, but target may ignore unknown connections" },
  { phase: "Stage 1 — call or public resource shared", estimate: "25–40%", reasoning: "Professional helpfulness vs. elevated SE awareness" },
  { phase: "Stage 2 — internal process info obtained", estimate: "5–15%", reasoning: "Privacy/publication history suggests pushback" },
  { phase: "Most likely outcome", estimate: "Public link only / no response", reasoning: "Attacker learns communication style; no breach" },
]

export const breakPoints = [
  { n: 1, point: "RUN-EU verification", mechanism: "Target or international office checks partner list — persona not found" },
  { n: 2, point: "Work package specificity", mechanism: 'Target asks "which WP and deliverable?" — attacker lacks detail' },
  { n: 3, point: "Samppala cross-check", mechanism: "Target forwards email to co-author — unknown sender exposed" },
  { n: 4, point: "Escalation to internal docs", mechanism: "Triggers data-protection reflex from privacy publications" },
  { n: 5, point: "SAP course timing", mechanism: "During #HackYourself, target explicitly tests inbound narratives" },
  { n: 6, point: "Recent MEng Cyber Security", mechanism: "Target likely applies fresh academic framing to inbound SE attempts" },
  { n: 7, point: "Pause and callback", mechanism: "Target calls HAMK main line to verify international office expectation" },
]

export const scenarioDefenses = [
  { threat: "Fake RUN-EU researcher", disruption: "Confirm mobility contacts via HAMK international office before sharing anything" },
  { threat: "Vague consortium / work-package claims", disruption: "Ask for deliverable number, partner sign-off, or official RUN-EU email domain" },
  { threat: "Co-author name-drop (Samppala)", disruption: "Forward to known co-author for identity confirmation" },
  { threat: "Escalation to internal consent workflows", disruption: "Decline; offer only already-public HAMK Unlimited or OPH materials" },
  { threat: "Fake Teams invite", disruption: "Check URL domain; schedule meetings only through institutional calendar" },
  { threat: "Mid-SAP-course approach", disruption: "Treat unsolicited academic contact during assessment week as elevated-risk" },
]

export const defenseLayers = [
  {
    title: "Individual-Level Defenses",
    items: [
      "Verify sender via known channels before engaging deeply",
      "Pause before clicking links or downloading attachments",
      'Apply "assume breach" mindset even to plausible requests',
      "Conduct periodic self-OSINT — search own name & footprint",
      "Make verification habitual",
    ],
  },
  {
    title: "Organizational Defenses",
    items: [
      "Clear protocols for unsolicited requests for info or access",
      "Security awareness training tailored to educators",
      'Verification culture: "If in doubt, check with a known colleague"',
      "Role-based / ticketing systems for sensitive topics",
      'Encourage "pause and verify" norm at all levels',
    ],
  },
  {
    title: "Technical & Process Controls",
    items: [
      "Email authentication (SPF/DKIM/DMARC)",
      "Multi-factor authentication everywhere",
      "Data classification and least-privilege access",
      "Logging and anomaly detection for sensitive data access",
      "Incident response plans including SE scenarios",
    ],
  },
]

export const takeaways = [
  "Visibility creates both opportunity and risk — public presence enables collaboration but builds a rich OSINT profile.",
  "Profiling is probabilistic — distinguish observation from assumption; over-confidence is itself a vulnerability.",
  "Correlation is the multiplier — single facts are harmless; connected context creates credible narratives.",
  "Attack planning reveals defensive priorities — RUN-EU verification and co-author cross-check would likely break the narrative.",
  "Historical analysis confirms institutional consistency — Wayback archives revealed no private data.",
  "Consent transforms the exercise — it enabled learning without harm; real attackers operate without consent.",
  "Expert ≠ immune — teaching social engineering does not guarantee perfect personal OPSEC.",
]

export const references = [
  { source: "HAMK Contact Page (EN)", url: "https://www.hamk.fi/en/contact/ismo-turve-2/" },
  { source: "HAMK Contact Page (FI)", url: "https://www.hamk.fi/yhteys/ismo-turve/" },
  { source: "HAMK Unlimited — Teformi", url: "https://unlimited.hamk.fi/" },
  { source: "ResearchGate", url: "https://www.researchgate.net/profile/Ismo-Turve" },
  { source: "LinkedIn", url: "https://www.linkedin.com/in/ismo-turve-a43203141" },
  { source: "X / Twitter", url: "https://x.com/IsmoTurve" },
  { source: "Theseus / HAMK thesis repository", url: "https://www.theseus.fi/" },
  { source: "Wayback Machine", url: "https://web.archive.org/" },
]
