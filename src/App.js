import React from 'react';
import './App.css';
import profile from './profile';
import PixelAvatar from './PixelAvatar';
import {
  ABOUT_STORY_BY_LANG,
  CONTACT_NOTES,
  COPY,
  EXPERIENCE_INSIGHTS,
  HERO_BADGES,
  HERO_STATS_EXTRA,
  HIGHLIGHTS_BY_LANG,
  RESEARCH_PROJECTS,
  resolveEducationDetail,
  SECTIONS_ORDER,
  SKILL_DETAILS,
  SKILL_SPOTLIGHTS,
} from './content/content';
import { useScrollStage } from './hooks/useScrollStage';
import { clamp } from './utils/math';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { HighlightsSection } from './components/sections/HighlightsSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  const [lang, setLang] = React.useState('pt');
  const t = COPY[lang];

  const { scrollProgress, activeStage } = useScrollStage(SECTIONS_ORDER);

  const experienceStartYear = 2020;
  const experienceYears = Math.max(1, new Date().getFullYear() - experienceStartYear);

  const highlights = React.useMemo(() => HIGHLIGHTS_BY_LANG[lang], [lang]);
  const heroBadges = React.useMemo(() => HERO_BADGES[lang], [lang]);
  const skillSpotlights = React.useMemo(() => SKILL_SPOTLIGHTS[lang], [lang]);
  const researchProjects = React.useMemo(() => RESEARCH_PROJECTS[lang], [lang]);
  const experienceInsights = React.useMemo(() => EXPERIENCE_INSIGHTS[lang], [lang]);
  const contactNotes = React.useMemo(() => CONTACT_NOTES[lang], [lang]);

  const heroCardStats = React.useMemo(() => {
    const baseStats = [
      {
        value: experienceYears,
        label:
          lang === 'pt'
            ? `Anos de experiência (desde ${experienceStartYear})`
            : `Years of experience (since ${experienceStartYear})`,
      },
    ];
    return [...baseStats, ...HERO_STATS_EXTRA[lang]];
  }, [lang, experienceYears]);

  const heroPoints = React.useMemo(
    () =>
      lang === 'pt'
        ? [
            'Plataformas de engenharia: padrões de serviços, mensageria e governança de qualidade',
            'Fiabilidade em produção: telemetria unificada, incident response rápido e rollback seguro',
            'Insights de dados: features, ML leve e automação para decisões orientadas a sinal',
          ]
        : [
            'Engineering platforms: service patterns, messaging, and quality governance',
            'Production reliability: unified telemetry, fast incident response, and safe rollbacks',
            'Data insights: features, lightweight ML, and automation for signal-driven decisions',
          ],
    [lang]
  );

  const handleAvatarActivate = React.useCallback(() => {
    const safeStage = clamp(activeStage, 0, SECTIONS_ORDER.length - 1);
    const nextId = SECTIONS_ORDER[(safeStage + 1) % SECTIONS_ORDER.length];
    const el = document.getElementById(nextId);
    if (!el) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }, [activeStage]);

  return (
    <div className="Page">
      <PixelAvatar
        progress={scrollProgress}
        stage={activeStage}
        onActivate={handleAvatarActivate}
        ariaLabel={lang === 'pt' ? 'Ir para a próxima seção' : 'Go to next section'}
        title={lang === 'pt' ? 'Próxima seção' : 'Next section'}
      />
      <a className="SkipLink" href="#content">
        {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
      </a>

      <TopBar lang={lang} onLangChange={setLang} profile={profile} t={t} />

      <main id="content">
        <HeroSection
          lang={lang}
          profile={profile}
          t={t}
          heroBadges={heroBadges}
          heroCardStats={heroCardStats}
          heroPoints={heroPoints}
        />
        <HighlightsSection t={t} highlights={highlights} />
        <AboutSection t={t} aboutText={ABOUT_STORY_BY_LANG[lang]} />
        <SkillsSection
          lang={lang}
          t={t}
          profile={profile}
          skillDetails={SKILL_DETAILS}
          skillSpotlights={skillSpotlights}
        />
        <ResearchSection t={t} researchLead={t.researchLead} projects={researchProjects} />
        <ExperienceSection lang={lang} t={t} profile={profile} insights={experienceInsights} />
        <EducationSection lang={lang} t={t} profile={profile} resolveEducationDetail={resolveEducationDetail} />
        <ContactSection lang={lang} t={t} profile={profile} notes={contactNotes} />
      </main>

      <Footer profile={profile} t={t} />
    </div>
  );
}

export default App;

