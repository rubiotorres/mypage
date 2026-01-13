import React from 'react';

export function TopBar({ lang, onLangChange, profile, t }) {
  return (
    <header className="TopBar">
      <div className="Container TopBar-inner">
        <a
          className="Brand"
          href="#home"
          aria-label={lang === 'pt' ? 'Voltar para o início' : 'Back to top'}
        >
          {profile.name}
        </a>
        <div className="TopBar-right">
          <nav className="Nav" aria-label={lang === 'pt' ? 'Navegação principal' : 'Primary navigation'}>
            <a className="NavLink" href="#highlights">
              {t.nav.highlights}
            </a>
            <a className="NavLink" href="#about">
              {t.nav.about}
            </a>
            <a className="NavLink" href="#skills">
              {t.nav.skills}
            </a>
            <a className="NavLink" href="#research">
              {t.nav.research}
            </a>
            <a className="NavLink" href="#experience">
              {t.nav.experience}
            </a>
            <a className="NavLink" href="#education">
              {t.nav.education}
            </a>
            <a className="NavLink" href="#contact">
              {t.nav.contact}
            </a>
          </nav>
          <div className="TopBarActions">
            <div className="LangSwitch" role="group" aria-label="Language">
              <button
                type="button"
                className={lang === 'pt' ? 'LangButton Active' : 'LangButton'}
                onClick={() => onLangChange('pt')}
              >
                PT
              </button>
              <button
                type="button"
                className={lang === 'en' ? 'LangButton Active' : 'LangButton'}
                onClick={() => onLangChange('en')}
              >
                EN
              </button>
            </div>
            <a className="TopBarButton" href={profile.contacts.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

