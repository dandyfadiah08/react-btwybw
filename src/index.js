import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";

import App from './App';
import Header from './header';
import Section1 from './section1';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode >
    <Header />
    <App />
    <Section1/>
  </StrictMode>
);
