import React from 'react';

export function AboutSection({ t, aboutText }) {
  return (
    <section id="about" className="Section" data-stage="2">
      <div className="Container">
        <h2 className="Section-title">{t.aboutTitle}</h2>
        <div className="AboutBox">
          <p className="AboutParagraph AboutSingle">{aboutText}</p>
        </div>
      </div>
    </section>
  );
}

