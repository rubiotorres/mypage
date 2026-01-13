import React from 'react';
import { formatYearsRange } from '../../utils/formatters';

export function EducationSection({ lang, t, profile, resolveEducationDetail }) {
  const [activeEducation, setActiveEducation] = React.useState(profile.education[0] || null);

  const educationDetail = React.useMemo(
    () => resolveEducationDetail(lang, activeEducation),
    [lang, activeEducation, resolveEducationDetail]
  );

  return (
    <section id="education" className="Section" data-stage="6">
      <div className="Container">
        <div className="SectionHeader">
          <div>
            <h2 className="Section-title">{t.education}</h2>
            <p className="Lead">{t.educationLead}</p>
          </div>
        </div>
        <div className="EducationLayout">
          <div className="EducationList">
            {profile.education.map((e) => {
              const isActive = activeEducation?.school === e.school && activeEducation?.degree === e.degree;
              return (
                <button
                  key={`${e.school}-${e.degree}`}
                  type="button"
                  className={isActive ? 'EducationCard Active' : 'EducationCard'}
                  onClick={() => setActiveEducation(e)}
                >
                  <div className="EducationTop">
                    <div className="EducationSchool">{e.school}</div>
                    <div className="EducationPeriod">{formatYearsRange(e.period)}</div>
                  </div>
                  <div className="EducationDegree">{e.degree}</div>
                </button>
              );
            })}
          </div>

          <div className="EducationDetail">
            <div className="EducationDetailLabel">{t.educationDetailLabel}</div>
            <div className="EducationDetailTitle">{activeEducation?.school}</div>
            <div className="EducationDetailMeta">{activeEducation?.degree}</div>
            <div className="EducationDetailMeta">{formatYearsRange(activeEducation?.period)}</div>
            <div className="EducationDetailBody">{educationDetail.body}</div>
            {educationDetail.highlights.length ? (
              <div className="EducationHighlights">
                {educationDetail.highlights.map((highlight) => (
                  <div key={highlight.label} className="EducationHighlight">
                    <div className="EducationHighlight-label">{highlight.label}</div>
                    <div className="EducationHighlight-detail">{highlight.detail}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

