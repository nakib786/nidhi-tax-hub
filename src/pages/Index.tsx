import { useEffect, useRef, useState, useCallback } from "react";
import {
  Mail, MapPin, Linkedin, Briefcase, GraduationCap, Award, Languages,
  ChevronRight, FileText, TrendingUp, Shield, BarChart3,
  Calculator, ArrowUp, ExternalLink, Star, CheckCircle2
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// ─── Data ────────────────────────────────────────────────────────────────

const stats = [
  { label: "Years Experience", value: "8+", icon: TrendingUp },
  { label: "Companies Served", value: "5+", icon: Briefcase },
  { label: "Certifications", value: "5", icon: Award },
  { label: "Languages", value: "4", icon: Languages },
];

const experiences = [
  {
    company: "BCLC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/BCLC_Logo.svg",
    role: "Accountant",
    period: "Oct 2022 – Present",
    location: "British Columbia, Canada",
    type: "Full-time",
    highlights: [
      "Performs daily gaming transaction reviews and validates data accuracy across systems",
      "Accounts for revenue, accounts receivable/payable, and cash flow activities",
      "Posts journal entries, performs account reconciliations, and completes risk assessments",
      "Interacts with suppliers, banks, and internal Finance areas including Procurement and Taxation",
    ],
  },
  {
    company: "Gateway Casinos & Entertainment",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Gateway_Casinos_logo.svg",
    role: "Intermediate Financial Accountant",
    period: "Aug 2021 – Oct 2022",
    location: "British Columbia, Canada",
    type: "Full-time",
    highlights: [
      "Managed financial reporting for multiple locations and supported budgeting cycles",
      "Prepared bank reconciliations, journal entries, and monthly/quarterly financial statements",
      "Ensured compliance with the Canadian Tax Act and coordinated audit requirements",
      "Working knowledge of SAP, Connect, and Great Plains ERP systems",
    ],
  },
  {
    company: "Sun Life",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Sun_Life_Financial_Logo.svg",
    role: "Financial Centre Administrator",
    period: "Jun 2021 – Aug 2021",
    location: "British Columbia, Canada",
    type: "Contract",
    highlights: [
      "Provided administrative and office support aligned with Sun Life policies",
      "Managed payment and expense cheque routines, and client inventory administration",
    ],
  },
  {
    company: "Chevron",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Chevron_Logo.svg",
    role: "Senior Customer Service Representative",
    period: "May 2018 – Apr 2021",
    location: "British Columbia, Canada",
    type: "Full-time",
    highlights: [
      "Led customer relations and operational support functions",
      "Liaised between departments to ensure seamless business operations",
    ],
  },
  {
    company: "CA Jindal & Ltd.",
    role: "Junior Accountant",
    period: "Jul 2017 – Mar 2018",
    location: "India",
    type: "Full-time",
    highlights: [
      "Conducted internal, statutory, and stock audits across multiple industries",
      "Computed income tax liability for individuals, companies, and partnership firms",
      "Supported month-end close and reconciled balance sheet accounts",
    ],
  },
];

const education = [
  {
    school: "Thompson Rivers University",
    logo: "https://www.tru.ca/__res/images/tru-logo-horizontal-white.svg",
    degree: "Accounting Diploma",
    honors: "Dean's List, With Distinction",
    period: "2018 – 2020",
    icon: "🎓",
  },
  {
    school: "Guru Nanak Dev University, Amritsar",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f3/Guru_Nanak_Dev_University_logo.png",
    degree: "Bachelor of Commerce",
    honors: "Accounting & Finance",
    period: "2014 – 2017",
    icon: "🏛️",
  },
  {
    school: "The Institute of Chartered Accountants of India",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/03/ICAI_Logo.svg",
    degree: "CPT (Common Proficiency Test)",
    honors: "",
    period: "2014",
    icon: "📋",
  },
  {
    school: "CPA Canada",
    logo: "https://www.cpacanada.ca/themes/cpacanada/logo.svg",
    degree: "CPA Pathway – Accounting",
    honors: "In Progress",
    period: "Current",
    icon: "🏆",
  },
];

const skillCategories = [
  {
    title: "Financial Systems",
    icon: Calculator,
    skills: ["Microsoft Dynamics GP", "SAP", "Salesforce", "Sage 50", "QuickBooks", "BlackLine"],
  },
  {
    title: "Core Competencies",
    icon: BarChart3,
    skills: ["Financial Analysis", "Cash Flow Management", "Financial Reporting", "Budgeting"],
  },
  {
    title: "Compliance & Risk",
    icon: Shield,
    skills: ["Risk Assessment", "Data Validation", "Audit Preparation", "Tax Compliance"],
  },
];

const certifications = [
  { name: "Microsoft Office Excel", icon: "📊" },
  { name: "Verified International Academic Qualifications", icon: "🌐" },
  { name: "PREP Module 5.3 – Advanced Financial Reporting", icon: "📈" },
  { name: "QuickBooks Certification", icon: "💼" },
  { name: "Strategic Planning Foundations", icon: "🎯" },
];

const languages = [
  { name: "English", level: "Full Professional", pct: 95 },
  { name: "Punjabi", level: "Native", pct: 100 },
  { name: "Hindi", level: "Native", pct: 100 },
  { name: "French", level: "Elementary", pct: 30 },
];

// ─── Navigation ──────────────────────────────────────────────────────────

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

// ─── AnimatedCounter Component ───────────────────────────────────────────

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
          const suffix = value.replace(/[0-9]/g, "");
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(numericPart * eased);
            setDisplayed(current + suffix);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{displayed}</span>;
}

// ─── Progress Bar ────────────────────────────────────────────────────────

function LanguageBar({ name, level, pct }: { name: string; level: string; pct: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-medium text-foreground text-sm">{name}</span>
        <span className="text-xs px-3 py-1 rounded-full glass-accent text-primary font-medium">
          {level}
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-1000 ease-out"
          style={{ width: visible ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────
const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 600);

      // Determine active section
      const sections = navItems.map(n => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= 120) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  }, []);

  const navScrolled = scrollY > 60;

  return (
    <div className="min-h-screen bg-background text-foreground relative">

      {/* ═══ NAVIGATION ═══ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navScrolled
            ? "py-3 glass border-b border-white/5 shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
          }`}
      >
        <div className="container px-6 mx-auto flex items-center justify-between max-w-6xl">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-105">
              <span className="text-primary font-bold text-sm font-display">NA</span>
            </div>
            <span className={`font-semibold text-lg tracking-tight transition-all duration-300 ${navScrolled ? "text-foreground" : "text-foreground/90"}`}>
              Nidhi<span className="text-primary">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl glass flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="container px-6 mx-auto py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>


      {/* ═══ HERO ═══ */}
      <section id="about" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/3 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

        <div className="relative z-10 container px-6 mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-accent text-primary text-xs font-semibold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                CPA Candidate · Accounting Professional
              </span>
            </div>

            {/* Name */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight leading-none">
                <span className="text-foreground">Nidhi</span>
                <br className="sm:hidden" />
                <span className="text-gradient"> Arora</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Detail-oriented Accounting Professional with expertise in{" "}
                <span className="text-foreground font-medium">financial reporting</span>,{" "}
                <span className="text-foreground font-medium">risk assessment</span>, and{" "}
                <span className="text-foreground font-medium">operational analysis</span>{" "}
                within highly regulated industries.
              </p>
            </div>

            {/* Location */}
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>British Columbia, Canada</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <a
                href="https://www.linkedin.com/in/anidhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.03] hover:-translate-y-0.5"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:nidhiarora7777@gmail.com"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl glass text-foreground font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 text-primary" />
                Get in Touch
              </a>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 text-center group hover:scale-[1.03] transition-all duration-300 cursor-default"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.5s" }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SKILLS ═══ */}
      <section id="skills" className="py-24 lg:py-32 relative section-glow">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />
        <div className="container px-6 mx-auto max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              What I Bring
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Core <span className="text-gradient">Competencies</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Comprehensive expertise across financial systems, compliance frameworks, and analytical processes.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, ci) => (
              <ScrollReveal key={category.title} delay={`${ci * 0.15}s`}>
                <div className="glass-card rounded-3xl p-6 lg:p-8 h-full group hover:scale-[1.02] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-2 rounded-xl text-xs font-medium bg-white/5 text-muted-foreground border border-white/5 hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" className="py-24 lg:py-32 relative section-glow">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/8 blur-[120px] rounded-full -z-10" />
        <div className="container px-6 mx-auto max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Professional <span className="text-gradient">Experience</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={`${i * 0.1}s`}>
                <div className="glass-card rounded-3xl p-6 lg:p-8 group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent rounded-l-3xl" />

                  <div className="pl-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                      <div className="flex items-center gap-4 mb-4">
                        {exp.logo ? (
                          <div className="w-12 h-12 rounded-xl bg-white overflow-hidden flex items-center justify-center shrink-0 border border-white/10">
                            <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                            <Briefcase className="w-6 h-6 text-primary" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="text-primary font-semibold text-sm">{exp.company}</span>
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground md:text-right shrink-0 flex md:flex-col items-center md:items-end gap-2 md:gap-0.5">
                        <span className="font-medium">{exp.period}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {exp.highlights.length > 0 && (
                      <ul className="space-y-2.5">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="group-hover:text-foreground/80 transition-colors duration-300">{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ EDUCATION ═══ */}
      <section id="education" className="py-24 lg:py-32 relative section-glow">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 blur-[120px] rounded-full -z-10" />
        <div className="container px-6 mx-auto max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Education & <span className="text-gradient">Credentials</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <ScrollReveal key={i} delay={`${i * 0.1}s`}>
                <div className="glass-card rounded-3xl p-6 lg:p-8 h-full group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    {edu.logo ? (
                      <div className="w-12 h-12 rounded-xl bg-white overflow-hidden flex items-center justify-center shrink-0 border border-white/10">
                        <img src={edu.logo} alt={edu.school} className="w-10 h-10 object-contain" />
                      </div>
                    ) : (
                      <div className="absolute -top-4 -right-4 text-5xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110 transform">
                        {edu.icon}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-1">{edu.degree}</p>
                    {edu.honors && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-primary/60" />
                        {edu.honors}
                      </p>
                    )}
                    {edu.period && (
                      <p className="text-xs text-muted-foreground/70 mt-3 font-medium">{edu.period}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ CERTIFICATIONS & LANGUAGES ═══ */}
      <section className="py-24 lg:py-32 relative section-glow">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Certifications */}
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Certifications</h2>
                    <p className="text-xs text-muted-foreground">Professional qualifications</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="glass-card rounded-2xl p-4 flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300 cursor-default"
                    >
                      <span className="text-2xl">{cert.icon}</span>
                      <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors">
                        {cert.name}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-primary/40 ml-auto shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal delay="0.15s">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <Languages className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Languages</h2>
                    <p className="text-xs text-muted-foreground">Communication proficiency</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {languages.map((lang, i) => (
                    <LanguageBar key={i} name={lang.name} level={lang.level} pct={lang.pct} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ═══ CTA / CONTACT ═══ */}
      <section id="contact" className="py-24 lg:py-32 relative section-glow">
        <div className="container px-6 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="glass-card rounded-[2rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden animate-pulse-glow">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-[2rem]" />

              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold">
                  Let's <span className="text-gradient">Connect</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
                  Looking for a dedicated accounting professional? I'd love to discuss how my skills can add value to your organization.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href="mailto:nidhiarora7777@gmail.com"
                    className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.03] hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                  >
                    <Mail className="w-5 h-5" />
                    Email Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anidhi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl glass text-foreground font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══ FOOTER ═══ */}
      <footer className="py-8 border-t border-border/50">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">NA</span>
              </div>
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Nidhi Arora
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/anidhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nidhiarora7777@gmail.com"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>


      {/* ═══ BACK TO TOP ═══ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 transition-all duration-500 hover:scale-110 hover:-translate-y-1 ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Index;
