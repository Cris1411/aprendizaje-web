import { useEffect } from 'react';
import { getMetaTags } from '../utils/seo';

const SEO = ({ title }) => {
  useEffect(() => {
    const metaTags = getMetaTags(title);
    document.title = title;

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });
  }, [title]);

  return null;
};

export default SEO;
