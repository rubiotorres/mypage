import React from 'react';

export function HeroSection({ lang, profile, t, heroBadges, heroCardStats, heroPoints }) {
  return (
    <section id="home" className="Section Hero" data-stage="0">
      <div className="Container Hero-grid">
        <div>
          <p className="Kicker">{profile.location}</p>
          <h1 className="Hero-title">
            <span className="Hero-name">{profile.name}</span>
          </h1>
          <p className="Hero-subtitle">{t.hero.subtitle}</p>

          <ul className="HeroPoints">
            {heroPoints.map((item) => (
              <li key={item} className="HeroPoint">
                {item}
              </li>
            ))}
          </ul>

          <div className="Hero-badges">
            {heroBadges.map((badge) => (
              <span key={badge} className="Hero-badge">
                {badge}
              </span>
            ))}
          </div>

          <div className="Hero-actions">
            <a className="Button Primary" href="#experience">
              {t.hero.primaryCta}
            </a>
            <a className="Button" href="#contact">
              {t.hero.secondaryCta}
            </a>
          </div>
          <div className="Hero-links" aria-label={lang === 'pt' ? 'Links sociais' : 'Social links'}>
            <a className="TextLink" href={profile.contacts.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="TextLink" href={profile.contacts.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="TextLink" href={`mailto:${profile.contacts.email}`}>
              Email
            </a>
            <a className="TextLink" href={profile.contacts.website} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </div>
        </div>

        <div className="Hero-card" role="presentation" aria-hidden="true">
          <div className="Hero-cardHeader">
            <div className="Hero-cardIntro">
              <div className="Hero-cardEyebrow">
                {lang === 'pt' ? 'Engenharia de Software' : 'Software Engineering'}
              </div>
              <div className="Hero-cardTitle">Go • Python • Systems Design</div>
              <div className="Hero-cardMeta">
                {lang === 'pt' ? 'Confiabilidade • Dados • Entrega' : 'Reliability • Data • Delivery'}
              </div>
            </div>
          </div>
          <div className="Hero-cardInner">
            {heroCardStats.map((stat) => (
              <div className="Stat" key={`${stat.label}-${stat.value}`}>
                <div className="Stat-value">{stat.value}</div>
                <div className="Stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

