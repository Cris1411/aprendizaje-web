export const SEOConfig = {
  title: 'Aprendizaje Web',
  description: 'Plataforma de aprendizaje para desarrollo web con HTML, CSS, JavaScript, React y más',
  keywords: 'HTML, CSS, JavaScript, React, Tailwind, Desarrollo Web, Bases de Datos',
  author: 'Tu Nombre',
  ogImage: '/og-image.jpg',
  siteUrl: 'https://tu-dominio.com',
};

export const getMetaTags = (pageTitle) => {
  return [
    { name: 'description', content: SEOConfig.description },
    { name: 'keywords', content: SEOConfig.keywords },
    { name: 'author', content: SEOConfig.author },
    { property: 'og:title', content: `${pageTitle} | ${SEOConfig.title}` },
    { property: 'og:description', content: SEOConfig.description },
    { property: 'og:image', content: SEOConfig.ogImage },
    { property: 'og:url', content: SEOConfig.siteUrl },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
};
