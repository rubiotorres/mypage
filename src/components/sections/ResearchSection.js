import React from 'react';

export function ResearchSection({ t, researchLead, projects }) {
  return (
    <section id="research" className="Section" data-stage="4">
      <div className="Container">
        <h2 className="Section-title">{t.research}</h2>
        <p className="Lead">{researchLead}</p>
        <div className="Grid">
          {projects.map((project) => (
            <article key={project.title} className="Card">
              <h3 className="Card-title">{project.title}</h3>
              <p className="Card-text">{project.description}</p>
              <ul className="TagList">
                {project.tags.map((tag) => (
                  <li key={`${project.title}-${tag}`} className="Tag">
                    {tag}
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

