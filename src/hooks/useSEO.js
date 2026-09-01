import { useEffect } from 'react';

export const useSEO = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Uncodemy Mock Tests`;
      // Update og:title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', `${title} | Uncodemy Mock Tests`);
    }

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
    }
  }, [title, description]);
};
