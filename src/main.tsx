import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './index.css' with { type: 'css'}

import { DarkModeProvaider } from './context/dark-mode.context.tsx';
import {  AuthProvider } from './context/Auth.contex.tsx';
import { TanStackProvider } from './plugins/TanStackProvider.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvaider>
      <TanStackProvider>
        
        <AuthProvider>
            <App />
        </AuthProvider>
    
     </TanStackProvider>
    </DarkModeProvaider>
  </StrictMode>,
);
