import React from 'react';

export function Footer({ profile, t }) {
  return (
    <footer className="Footer">
      <div className="Container Footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="Footer-sep">•</span>
        <a className="TextLink" href="#home">
          {t.footerBackToTop}
        </a>
      </div>
    </footer>
  );
}

