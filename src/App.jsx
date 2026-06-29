import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  FileText,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import { content, resumePdf, routes } from './content.js';

const validRoutes = new Set(routes);

function assetPath(fileName) {
  return `${import.meta.env.BASE_URL}${fileName}`.replace(/\/+/g, '/');
}

function getRouteFromLocation() {
  const params = new URLSearchParams(window.location.search);
  const redirected = params.get('redirect');
  const path = redirected ? new URL(redirected, window.location.origin).pathname : window.location.pathname;
  const matched = routes.find((route) => route !== '/' && path.endsWith(route));
  return matched || '/';
}

function getBasePrefix(currentRoute) {
  const path = window.location.pathname;
  if (currentRoute !== '/' && path.endsWith(currentRoute)) {
    return path.slice(0, -currentRoute.length) || '';
  }
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

function App() {
  const [language, setLanguage] = useState('zh');
  const [route, setRoute] = useState(getRouteFromLocation);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];
  const basePrefix = useMemo(() => getBasePrefix(route), [route]);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  useEffect(() => {
    const redirected = new URLSearchParams(window.location.search).get('redirect');
    if (redirected) {
      const next = getRouteFromLocation();
      const nextUrl = `${getBasePrefix(next)}${next === '/' ? '/' : next}`;
      window.history.replaceState({}, '', nextUrl);
      setRoute(next);
    }

    const onPopState = () => setRoute(getRouteFromLocation());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  function navigate(path) {
    if (!validRoutes.has(path)) return;
    const nextUrl = `${basePrefix}${path === '/' ? '/' : path}`;
    window.history.pushState({}, '', nextUrl);
    setRoute(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const pageProps = { t, navigate };
  const Page = {
    '/': HomePage,
    '/resume': ResumePage,
    '/projects': ProjectsPage,
    '/about': AboutPage,
    '/contact': ContactPage,
  }[route] || HomePage;

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand" type="button" onClick={() => navigate('/')}>
          <span className="brand-mark">WY</span>
          <span>
            <strong>{t.profile.name}</strong>
            <small>{t.profile.major}</small>
          </span>
        </button>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {t.meta.nav.map((item) => (
            <button
              key={item.path}
              className={route === item.path ? 'nav-link is-active' : 'nav-link'}
              type="button"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button language-button"
            type="button"
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            title={t.meta.alternateLanguage}
            aria-label={t.meta.alternateLanguage}
          >
            <Languages size={18} />
            <span>{t.meta.alternateLanguage}</span>
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <Page {...pageProps} />
      </main>

      <footer className="site-footer">
        <span>{t.profile.name}</span>
        <span>{t.profile.email}</span>
        <span>{t.profile.phone}</span>
      </footer>
    </div>
  );
}

function HomePage({ t, navigate }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{t.profile.school}</p>
          <h1>{t.profile.name}</h1>
          <p className="hero-title">{t.profile.title}</p>
          <p className="hero-intro">{t.profile.intro}</p>
          <div className="chip-row">
            {t.profile.chips.map((chip) => (
              <span className="chip" key={chip}>{chip}</span>
            ))}
          </div>
          <div className="action-row">
            <button className="primary-button" type="button" onClick={() => navigate('/resume')}>
              <FileText size={18} />
              {t.meta.actions.viewResume}
            </button>
            <button className="secondary-button" type="button" onClick={() => navigate('/projects')}>
              {t.meta.actions.viewProjects}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <ResumePreview label={t.meta.labels.resumePreview} />
      </section>

      <section className="content-band">
        <SectionHeader icon={<Sparkles size={20} />} title={t.meta.labels.highlights} />
        <div className="highlight-grid">
          {t.profile.highlights.map((item) => (
            <article className="highlight-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ResumePage({ t }) {
  const grouped = groupExperiences(t.experiences);
  return (
    <section className="page-section">
      <PageHeader
        eyebrow={t.meta.labels.education}
        title={t.meta.nav.find((item) => item.path === '/resume').label}
        description={t.profile.tagline}
      />
      <div className="resume-toolbar">
        <DownloadLink t={t} />
      </div>

      <section className="resume-block">
        <SectionHeader icon={<GraduationCap size={20} />} title={t.meta.labels.education} />
        <article className="experience-card education-card">
          <div className="experience-head">
            <div>
              <h3>{t.education.institution}</h3>
              <p>{t.education.major}</p>
            </div>
            <time>{t.education.period}</time>
          </div>
          <div className="detail-row">
            {t.education.details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
          <p className="course-line">
            <strong>{t.meta.labels.course}: </strong>
            {t.education.courses.join(' / ')}
          </p>
        </article>
      </section>

      {['internship', 'socialPractice', 'socialWork'].map((group) => (
        <section className="resume-block" key={group}>
          <SectionHeader icon={<BriefcaseBusiness size={20} />} title={t.meta.labels[group]} />
          <ExperienceList experiences={grouped[group] || []} />
        </section>
      ))}

      <section className="resume-block">
        <SectionHeader icon={<Sparkles size={20} />} title={t.meta.labels.other} />
        <div className="other-grid">
          <article className="simple-card">{t.other.language}</article>
          <article className="simple-card">{t.other.hobbies}</article>
        </div>
      </section>
    </section>
  );
}

function ProjectsPage({ t }) {
  return (
    <section className="page-section">
      <PageHeader
        eyebrow={t.meta.labels.selectedProjects}
        title={t.meta.nav.find((item) => item.path === '/projects').label}
        description={t.profile.tagline}
      />
      <div className="project-grid">
        {t.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-head">
              <span>{project.period}</span>
              <FileText size={18} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutPage({ t }) {
  return (
    <section className="page-section about-layout">
      <div>
        <PageHeader eyebrow={t.profile.location} title={t.profile.name} description={t.profile.intro} />
        <div className="about-panel">
          <SectionHeader icon={<Sparkles size={20} />} title={t.meta.labels.skills} />
          <div className="skill-grid">
            {t.skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
      <ResumePreview label={t.meta.labels.resumePreview} />
    </section>
  );
}

function ContactPage({ t }) {
  return (
    <section className="page-section contact-section">
      <PageHeader eyebrow={t.profile.location} title={t.meta.labels.contact} description={t.profile.tagline} />
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${t.profile.email}`}>
          <Mail size={22} />
          <span>{t.meta.actions.email}</span>
          <strong>{t.profile.email}</strong>
        </a>
        <a className="contact-card" href={`tel:${t.profile.phone}`}>
          <Phone size={22} />
          <span>{t.meta.actions.phone}</span>
          <strong>{t.profile.phone}</strong>
        </a>
        <a className="contact-card" href={assetPath(resumePdf)} download>
          <Download size={22} />
          <span>{t.meta.actions.download}</span>
          <strong>PDF</strong>
        </a>
      </div>
    </section>
  );
}

function ExperienceList({ experiences }) {
  return (
    <div className="experience-list">
      {experiences.map((experience) => (
        <article className="experience-card" key={`${experience.organization}-${experience.period}`}>
          <div className="experience-head">
            <div>
              <h3>{experience.organization}</h3>
              <p>{experience.role}</p>
            </div>
            <time>{experience.period}</time>
          </div>
          <ul>
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="page-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div className="section-header">
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}

function DownloadLink({ t }) {
  return (
    <a className="primary-button as-link" href={assetPath(resumePdf)} download>
      <Download size={18} />
      {t.meta.actions.download}
    </a>
  );
}

function ResumePreview({ label }) {
  return (
    <figure className="resume-preview">
      <img src={assetPath('resume-preview-1.png')} alt={label} />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function groupExperiences(experiences) {
  return experiences.reduce((acc, experience) => {
    acc[experience.group] = acc[experience.group] || [];
    acc[experience.group].push(experience);
    return acc;
  }, {});
}

export default App;
