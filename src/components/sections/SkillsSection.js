import React from 'react';
import { translateLanguageLevel } from '../../utils/formatters';

export function SkillsSection({ lang, t, profile, skillDetails, skillSpotlights }) {
  const [activeSkill, setActiveSkill] = React.useState(profile.skillTree[0]?.name || '');

  return (
    <section id="skills" className="Section" data-stage="3">
      <div className="Container">
        <div className="SectionHeader">
          <div>
            <h2 className="Section-title">{t.skillsTitle}</h2>
            <p className="Lead">{t.skillContext}</p>
          </div>
          <div className="SkillLegend">
            <span className="SkillLegendLabel">{t.levelLabel}</span>
            <div className="SkillLegendBar" />
          </div>
        </div>

        <div className="SkillsLayout" aria-label={t.skillsTitle}>
          <div className="SkillTree Interactive">
            {profile.skillTree.map((s) => {
              const isActive = activeSkill === s.name;
              return (
                <button
                  key={s.name}
                  type="button"
                  className={isActive ? 'Skill Skill-active' : 'Skill'}
                  onClick={() => setActiveSkill(s.name)}
                >
                  <div className="SkillRow">
                    <div className="SkillName">{s.name}</div>
                    <div className="SkillLevel">
                      {t.levelLabel} {s.level}/5
                    </div>
                  </div>
                  <div
                    className="SkillBar"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={5}
                    aria-valuenow={s.level}
                  >
                    <div className="SkillBarFill" style={{ width: `${(s.level / 5) * 100}%` }} />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="SkillDetail">
            <div className="SkillDetailLabel">{t.skillsTitle}</div>
            <div className="SkillDetailTitle">{activeSkill}</div>
            <div className="SkillDetailBody">{skillDetails[activeSkill]?.[lang] || skillDetails[activeSkill]?.pt || ''}</div>
            <a className="Button Primary" href="#contact">
              {t.skillDetailCta}
            </a>
          </div>
        </div>

        <div className="Subsection">
          <h3 className="Subsection-title">{t.otherSkills}</h3>
          <ul className="Pills" aria-label={t.otherSkills}>
            {profile.otherSkills.map((skill) => (
              <li key={skill} className="Pill">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="Subsection">
          <h3 className="Subsection-title">{t.languages}</h3>
          <div className="LangGrid" aria-label={t.languages}>
            {profile.languages.map((l) => (
              <div key={l.name} className="Lang">
                <div className="LangName">{l.name}</div>
                <div className="LangLevel">{translateLanguageLevel(l.level, lang)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="SkillSpotlights">
          {skillSpotlights.map((spotlight) => (
            <article key={spotlight.title} className="SpotlightCard">
              <h3 className="SpotlightCard-title">{spotlight.title}</h3>
              <ul className="SpotlightList">
                {spotlight.points.map((point) => (
                  <li key={`${spotlight.title}-${point}`} className="SpotlightListItem">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

