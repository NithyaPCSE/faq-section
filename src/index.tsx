import React from 'react';
import ReactDOM from 'react-dom/client';
import FaqSection from './components/Faq';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FaqSection />
  </React.StrictMode>
);
