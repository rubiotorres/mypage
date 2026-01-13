import React from 'react';
import {
  formatExperiencePeriod,
  formatExperienceTotal,
  translateRoleDetails,
  translateRoleTitle,
} from '../../utils/formatters';

export function ExperienceSection({ lang, t, profile, insights }) {
  const [expandedCompany, setExpandedCompany] = React.useState(profile.experience[0]?.company || '');

  return (
    <section id="experience" className="Section" data-stage="5">
      <div className="Container">
        <h2 className="Section-title">{t.experience}</h2>
        <div className="Timeline" aria-label={t.experience}>
          {profile.experience.map((exp) => {
            const isExpanded = expandedCompany === exp.company;
            const primaryRole = exp.roles?.[0];
            const rolesId = `experience-${exp.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-roles`;
            return (
              <article key={exp.company} className="TimelineItem">
                <div className="TimelineDot" aria-hidden="true" />
                <div className="TimelineCard">
                  <button
                    type="button"
                    className={isExpanded ? 'TimelineCardButton Expanded' : 'TimelineCardButton'}
                    aria-expanded={isExpanded}
                    aria-controls={rolesId}
                    onClick={() => setExpandedCompany((current) => (current === exp.company ? '' : exp.company))}
                  >
                    <div className="TimelineHeader">
                      <h3 className="TimelineTitle">{exp.company}</h3>
                      {exp.total ? <div className="TimelineMeta">{formatExperienceTotal(exp.total, lang)}</div> : null}
                    </div>
                    {primaryRole ? (
                      <div className="TimelineTeaser">
                        <div className="TimelineTeaserRole">{translateRoleTitle(primaryRole.title, lang)}</div>
                        <div className="TimelineTeaserPeriod">{formatExperiencePeriod(primaryRole.period, lang)}</div>
                      </div>
                    ) : null}
                    <div className="TimelineHint">
                      {lang === 'pt'
                        ? isExpanded
                          ? 'Clique para recolher'
                          : 'Clique para expandir'
                        : isExpanded
                          ? 'Click to collapse'
                          : 'Click to expand'}
                      <span className="TimelineChevron" aria-hidden="true" />
                    </div>
                  </button>

                  {isExpanded ? (
                    <div id={rolesId} className="TimelineRoles">
                      {exp.roles.map((r) => (
                        <div key={`${exp.company}-${r.title}-${r.period}`} className="Role">
                          <div className="RoleTop">
                            <div className="RoleTitle">{translateRoleTitle(r.title, lang)}</div>
                            <div className="RolePeriod">{formatExperiencePeriod(r.period, lang)}</div>
                          </div>
                          {r.location ? <div className="RoleMeta">{r.location}</div> : null}
                          {r.details ? <div className="RoleDetails">{translateRoleDetails(r.details, lang)}</div> : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
        <div className="ExperienceInsights">
          {insights.map((insight) => (
            <p key={insight} className="Insight">
              {insight}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

