import { Mail, MapPin, Linkedin, Briefcase, GraduationCap, Award, Languages, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const experiences = [
  {
    company: "BCLC",
    role: "Accountant",
    period: "October 2022 – Present",
    location: "Kamloops, BC, Canada",
    highlights: [
      "Performs daily gaming transaction reviews and validates data accuracy across systems",
      "Accounts for revenue, accounts receivable/payable, and cash flow activities",
      "Posts journal entries, performs account reconciliations, and completes risk assessments",
      "Interacts with suppliers, banks, and internal Finance areas including Procurement and Taxation",
    ],
  },
  {
    company: "Gateway Casinos & Entertainment",
    role: "Intermediate Financial Accountant",
    period: "August 2021 – October 2022",
    location: "Kamloops, BC, Canada",
    highlights: [
      "Managed financial reporting for multiple locations and supported budgeting cycles",
      "Prepared bank reconciliations, journal entries, and monthly/quarterly financial statements",
      "Ensured compliance with the Canadian Tax Act and coordinated audit requirements",
      "Working knowledge of SAP, Connect, and Great Plains ERP systems",
    ],
  },
  {
    company: "Sun Life",
    role: "Financial Centre Administrator",
    period: "June 2021 – August 2021",
    location: "Kamloops, BC, Canada",
    highlights: [
      "Provided administrative and office support aligned with Sun Life policies",
      "Managed payment and expense cheque routines, and client inventory administration",
    ],
  },
  {
    company: "Chemron",
    role: "Senior Customer Service Representative",
    period: "May 2018 – April 2021",
    location: "Kamloops, BC, Canada",
    highlights: [],
  },
  {
    company: "CA Jindal & Ltd.",
    role: "Junior Accountant",
    period: "July 2017 – March 2018",
    location: "India",
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
    degree: "Accounting Diploma – Dean's List, With Distinction",
    period: "2018 – 2020",
  },
  {
    school: "Guru Nanak Dev University, Amritsar",
    degree: "Bachelor of Commerce – Accounting & Finance",
    period: "2014 – 2017",
  },
  {
    school: "The Institute of Chartered Accountants of India",
    degree: "CPT (Common Proficiency Test)",
    period: "2014",
  },
  {
    school: "CPA Canada",
    degree: "CPA Pathway – Accounting",
    period: "",
  },
];

const skills = [
  "Financial Analysis",
  "Microsoft Dynamics GP",
  "Cash Flow Management",
  "SAP",
  "Salesforce",
  "Sage 50",
  "QuickBooks",
  "BlackLine",
  "Risk Assessment",
  "Data Validation",
  "Audit Preparation",
  "Tax Compliance",
  "Budgeting",
  "Financial Reporting",
];

const certifications = [
  "Microsoft Office Excel",
  "Verified International Academic Qualifications",
  "PREP Module 5.3 – Advanced Financial Reporting",
  "QuickBooks Certification",
  "Strategic Planning Foundations",
];

const languages = [
  { name: "English", level: "Full Professional" },
  { name: "Punjabi", level: "Native" },
  { name: "Hindi", level: "Native" },
  { name: "French", level: "Elementary" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="relative z-10 container px-6 mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-xs font-semibold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Accounting Professional · CPA Ambassador
          </div>
          <h1 className="text-5xl lg:text-8xl font-bold tracking-tight">
            Nidhi <span className="text-gradient">Arora</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Detail-oriented Accounting Professional with expertise in financial reporting, risk assessment, and operational analysis within highly regulated industries.
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            Kamloops, British Columbia, Canada
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/anidhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
            <a
              href="mailto:nidhiarora7777@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-foreground font-medium hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 relative">
        <div className="container px-6 mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Core Competencies</h2>
          </ScrollReveal>
          <ScrollReveal className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 rounded-full glass text-sm font-medium text-foreground hover:bg-white/10 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="container px-6 mx-auto max-w-4xl">
          <ScrollReveal className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Experience</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={`${i * 0.1}s`}>
                <div className="glass p-6 lg:p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground text-right shrink-0">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  {exp.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="container px-6 mx-auto max-w-4xl">
          <ScrollReveal className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Education</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <ScrollReveal key={i} delay={`${i * 0.1}s`}>
                <div className="glass p-6 rounded-2xl h-full hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-foreground mb-1">{edu.school}</h3>
                  <p className="text-sm text-primary mb-2">{edu.degree}</p>
                  {edu.period && (
                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Languages */}
      <section className="py-20 relative">
        <div className="container px-6 mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {cert}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay="0.1s">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Languages className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Languages</h2>
              </div>
              <div className="space-y-4">
                {languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-xs px-3 py-1 rounded-full glass text-muted-foreground">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container px-6 mx-auto text-center space-y-4">
          <a
            href="https://www.linkedin.com/in/anidhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Linkedin className="w-4 h-4" />
            linkedin.com/in/anidhi
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nidhi Arora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
