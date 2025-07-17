import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css' with { type: 'css'}

import App from './App.tsx'
import { DarkModeProvaider } from './context/dark-mode.context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvaider>
      <App />
    </DarkModeProvaider>
  </StrictMode>,
);
