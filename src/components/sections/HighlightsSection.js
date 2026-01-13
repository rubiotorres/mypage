import React from 'react';

export function HighlightsSection({ t, highlights }) {
  return (
    <section id="highlights" className="Section" data-stage="1">
      <div className="Container">
        <h2 className="Section-title">{t.highlightsTitle}</h2>
        <p className="Lead">{t.highlightsLead}</p>
        <div className="Highlights" aria-label={t.highlightsTitle}>
          {highlights.map((c) => (
            <article key={c.title} className="Highlight" tabIndex={0}>
              <div className="Highlight-title">{c.title}</div>
              <div className="Highlight-text">{c.text}</div>
              <div className="Highlight-tags">
                {c.tags.map((tag) => (
                  <span key={`${c.title}-${tag}`} className="Highlight-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

