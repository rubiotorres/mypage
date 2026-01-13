export const formatYearsRange = (period) => {
  if (!period) return '';
  const years = period.match(/\b(19|20)\d{2}\b/g);
  if (!years?.length) return period;
  const startYear = years[0];
  const endYear = years[years.length - 1];
  return startYear === endYear ? startYear : `${startYear} - ${endYear}`;
};

export const formatExperiencePeriod = (period, lang) => {
  if (!period) return '';
  const years = period.match(/\b(19|20)\d{2}\b/g);
  const startYear = years?.[0];
  const endYear = years?.[years.length - 1];
  const isCurrent = /\b(Present|Presente|Atual)\b/i.test(period);

  if (!startYear) return period;
  if (isCurrent) return `${startYear} - ${lang === 'pt' ? 'Atual' : 'Present'}`;
  if (!endYear || startYear === endYear) return startYear;
  return `${startYear} - ${endYear}`;
};

export const formatExperienceTotal = (total, lang) => {
  if (!total) return '';
  if (lang === 'pt') return total;
  return total
    .replace(/\banos?\b/g, (m) => (m === 'ano' ? 'yr' : 'yrs'))
    .replace(/\bmeses\b/g, 'mos')
    .replace(/\bmês\b/g, 'mo');
};

export const translateLanguageLevel = (level, lang) => {
  if (lang !== 'pt') return level;
  const map = {
    'Native or Bilingual': 'Nativo/Bilíngue',
    'Professional Working': 'Profissional',
    'Limited Working': 'Intermediário',
    Elementary: 'Básico',
  };
  return map[level] || level;
};

export const translateRoleTitle = (title, lang) => {
  if (!title) return '';
  const map = {
    pt: {
      'Senior Software Engineer': 'Engenheiro de software sênior',
      'Software Engineer': 'Engenheiro de software',
      'Software Developer': 'Desenvolvedor de software',
      'Research Assistant': 'Assistente de pesquisa',
      'IT Analyst': 'Analista de TI',
      'Teaching Assistant': 'Monitor',
      'IT Infrastructure Analyst': 'Analista de infraestrutura de tecnologia da informação',
      'Electrical Technician': 'Técnico em eletrotécnica',
      'IT Support Specialist': 'Especialista em suporte de TI',
      'Full Stack Developer Intern': 'Estagiário Full Stack',
    },
    en: {
      'Engenheiro de software sênior': 'Senior Software Engineer',
      'Engenheiro de software': 'Software Engineer',
      'Desenvolvedor de software': 'Software Developer',
      'Assistente de pesquisa': 'Research Assistant',
      'Analista de TI': 'IT Analyst',
      Monitor: 'Teaching Assistant',
      'Analista de infraestrutura de tecnologia da informação': 'IT Infrastructure Analyst',
      'Técnico em eletrotécnica': 'Electrical Technician',
      'Especialista em suporte de TI': 'IT Support Specialist',
      'Full Stack Developer Intern': 'Full Stack Developer Intern',
    },
  };

  const dictionary = map[lang] || {};
  return dictionary[title] || title;
};

export const translateRoleDetails = (details, lang) => {
  if (!details) return '';
  const map = {
    pt: {},
    en: {
      'Pesquisador na área de aprendizado de maquina com o tema Qualidade de conteúdo na web.':
        'Researcher in machine learning focused on web content quality.',
      'Monitor na matéria analise e estrutura de dados.': 'Teaching assistant for data structures and algorithms.',
    },
  };
  const dictionary = map[lang] || {};
  return dictionary[details] || details;
};

