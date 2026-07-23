import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import faviconUrl from './assets/images/favicon_canguru.png';

// Force browser tab favicon update dynamically
function updateFavicon(url: string) {
  const head = document.head || document.getElementsByTagName('head')[0];
  
  // Remove any existing icons to prevent cache conflicts
  const existingIcons = document.querySelectorAll("link[rel*='icon']");
  existingIcons.forEach(el => el.remove());

  // Create primary icon
  const iconLink = document.createElement('link');
  iconLink.type = 'image/png';
  iconLink.rel = 'icon';
  iconLink.href = url;
  head.appendChild(iconLink);

  // Create shortcut icon
  const shortcutLink = document.createElement('link');
  shortcutLink.type = 'image/png';
  shortcutLink.rel = 'shortcut icon';
  shortcutLink.href = url;
  head.appendChild(shortcutLink);

  // Create apple-touch-icon
  const appleLink = document.createElement('link');
  appleLink.rel = 'apple-touch-icon';
  appleLink.href = url;
  head.appendChild(appleLink);
}

if (typeof window !== 'undefined') {
  updateFavicon(faviconUrl);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

