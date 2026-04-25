import { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code2,
  Wrench,
  FolderGit2,
  Languages as LangIcon,
  Send,
  Menu,
  X,
} from "lucide-react";
import { translations, type Lang } from "@/lib/i18n";
import profileImg from "@/assets/profile.jpg";
import projetoPorto from "@/assets/projeto_porto.jpg";
import piSenac from "@/assets/PI_senac.jpg";

const SECTIONS = ["home", "about", "experience", "education", "skills", "projects", "languages", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState<SectionId>("home");
  const [typed, setTyped] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  // theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // typing animation
  useEffect(() => {
    const words = t.hero.typing;
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIdx];
      if (!deleting) {
        charIdx++;
        setTyped(word.slice(0, charIdx));
        if (charIdx === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1500);
          return;
        }
      } else {
        charIdx--;
        setTyped(word.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? 50 : 110);
    };
    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [lang, t.hero.typing]);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-bold text-lg tracking-tight bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            Heitor
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <li key={s}>
                <button
                  onClick={() => scrollTo(s)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    active === s
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.nav[s]}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 rounded-full border border-border p-0.5">
              {(["en", "pt", "es"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                    lang === l
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-muted"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <ul className="px-6 py-4 space-y-1">
              {SECTIONS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo(s)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      active === s ? "bg-muted text-primary font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {t.nav[s]}
                  </button>
                </li>
              ))}
              <li className="flex gap-1 pt-2">
                {(["en", "pt", "es"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`flex-1 px-2 py-1.5 text-xs font-semibold rounded-md ${
                      lang === l ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* HOME */}
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center px-6">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center py-16">
            <div className="animate-fade-in">
              <p className="text-sm font-medium text-primary mb-3 tracking-widest uppercase">
                {t.hero.greeting}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                {t.hero.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{t.hero.title}</p>
              <div className="mt-6 h-8 text-2xl md:text-3xl font-semibold">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-hero)" }}
                >
                  {typed}
                </span>
                <span className="inline-block w-0.5 h-7 ml-1 bg-primary align-middle animate-pulse" />
              </div>
              <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
                {t.hero.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("contact")}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary-foreground font-medium transition-transform hover:scale-105"
                  style={{ backgroundImage: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
                >
                  {t.hero.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-6 py-3 rounded-full border border-border font-medium hover:bg-muted transition-colors"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </div>

            <div className="relative mx-auto">
              <div
                className="absolute -inset-4 rounded-full opacity-40 blur-2xl"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={profileImg}
                  alt="Heitor Novaes"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title={t.about.title} icon={<Code2 className="w-5 h-5" />}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{t.about.text}</p>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title={t.experience.title} icon={<Briefcase className="w-5 h-5" />}>
          <div className="space-y-6">
            {t.experience.jobs.map((job, i) => (
              <div
                key={i}
                className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-primary">{job.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.tasks.map((task, j) => (
                    <li key={j} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">▸</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                {"achievement" in job && job.achievement && (
                  <div className="mt-5 p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary mb-1">
                      ★ {t.experience.achievement}
                    </p>
                    <p className="text-sm text-foreground/90">{job.achievement}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title={t.education.title} icon={<GraduationCap className="w-5 h-5" />}>
          <div className="grid md:grid-cols-2 gap-4">
            {t.education.items.map((e, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <p className="text-sm text-muted-foreground font-mono">{e.period}</p>
                <h3 className="text-lg font-semibold mt-1">{e.course}</h3>
                <p className="text-primary text-sm mt-1">{e.school}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title={t.skills.title} icon={<Wrench className="w-5 h-5" />}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-semibold mb-4 text-primary">{t.skills.technical}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.tech.map((s, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-primary/10 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-semibold mb-4 text-primary">{t.skills.soft}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.softList.map((s, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-primary/10 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
<Section id="projects" title={t.projects.title} icon={<FolderGit2 className="w-5 h-5" />}>

  {/* CARDS (TEXTO) */}
  <div className="grid md:grid-cols-2 gap-4 mb-6">
    {t.projects.items.map((p, i) => (
      <div
        key={i}
        className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1"
      >
        <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
        <p className="text-sm text-muted-foreground">{p.description}</p>
      </div>
    ))}
  </div>

  {/* IMAGENS ABAIXO */}
  <div className="grid md:grid-cols-2 gap-4">
    <img
      src={projetoPorto}
      alt="Projeto Porto Digital"
      className="w-full h-64 object-contain rounded-2xl border border-border bg-black p-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
    />
    <img
      src={piSenac}
      alt="Projeto Integrador Senac"
      className="w-full h-64 object-contain rounded-2xl border border-border bg-black p-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
    />
  </div>

</Section>

        {/* LANGUAGES */}
        <Section id="languages" title={t.languages.title} icon={<LangIcon className="w-5 h-5" />}>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.languages.items.map((l, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/40 transition-all hover:-translate-y-1">
                <p className="text-lg font-semibold">{l.name}</p>
                <p className="text-sm text-primary mt-1">{l.level}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title={t.contact.title} icon={<Send className="w-5 h-5" />}>
          <div className="p-8 md:p-12 rounded-3xl bg-card border border-border text-center">
            <p className="text-lg text-muted-foreground mb-8">{t.contact.subtitle}</p>
            <a
              href="mailto:heitornovaes.dev@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary-foreground font-medium transition-transform hover:scale-105 mb-8"
              style={{ backgroundImage: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
            >
              <Mail className="w-4 h-4" />
              heitornovaes.dev@gmail.com
            </a>
            <div className="flex justify-center gap-4">
              <SocialLink href="https://github.com/heitorleo27" label="GitHub">
                <Github className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/heitor-novaes/" label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="mailto:heitornovaes.dev@gmail.com" label="Email">
                <Mail className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border mt-16 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} · {t.footer}</p>
          <div className="flex gap-3">
            <SocialLink href="https://github.com/heitorleo27" label="GitHub" small>
              <Github className="w-4 h-4" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/heitor-novaes/" label="LinkedIn" small>
              <Linkedin className="w-4 h-4" />
            </SocialLink>
            <SocialLink href="mailto:heitornovaes.dev@gmail.com" label="Email" small>
              <Mail className="w-4 h-4" />
            </SocialLink>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            {icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
        {children}
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
  small,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${small ? "w-9 h-9" : "w-12 h-12"} rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:scale-110 transition-all`}
      style={{ transition: "all 0.2s" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundImage = "var(--gradient-hero)";
        e.currentTarget.style.borderColor = "transparent";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundImage = "";
      }}
    >
      {children}
    </a>
  );
}
