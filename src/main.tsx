import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './index.css' with { type: 'css'}

import { DarkModeProvaider } from './context/dark-mode.context.tsx';
import { AuthContextProvaider } from './context/Auth.contex.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvaider>
      <AuthContextProvaider>
      <App />
      </AuthContextProvaider>
    </DarkModeProvaider>
  </StrictMode>,
);
