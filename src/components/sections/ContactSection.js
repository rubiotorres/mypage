import React from 'react';

export function ContactSection({ lang, t, profile, notes }) {
  return (
    <section id="contact" className="Section" data-stage="7">
      <div className="Container Contact">
        <div>
          <h2 className="Section-title">{t.contact.title}</h2>
          <p className="Lead">{t.contact.lead}</p>
          <div className="ContactMeta">
            <div>
              <span className="ContactLabel">{t.contact.email}:</span> {profile.contacts.email}
            </div>
            <div>
              <span className="ContactLabel">{t.contact.phone}:</span> {profile.contacts.phone}{' '}
              <span className="ContactLabel">{lang === 'pt' ? '(Celular)' : '(Mobile)'}</span>
            </div>
          </div>
          <div className="ContactNotes">
            {notes.map((note) => (
              <p key={note} className="ContactNote">
                {note}
              </p>
            ))}
          </div>
        </div>
        <div className="Contact-actions">
          <a className="Button" href={profile.contacts.github} target="_blank" rel="noopener noreferrer">
            {t.contact.github}
          </a>
          <a className="Button Primary" href={`mailto:${profile.contacts.email}`}>
            {t.contact.sendEmail}
          </a>
          <a className="Button" href={profile.contacts.linkedin} target="_blank" rel="noopener noreferrer">
            {t.contact.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}

