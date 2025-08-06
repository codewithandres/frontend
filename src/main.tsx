import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './index.css' with { type: 'css'}

import { DarkModeProvaider } from './context/dark-mode.context.tsx';
import {  AuthProvider } from './context/Auth.contex.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queyClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvaider>
      <AuthProvider>
        <QueryClientProvider client={queyClient}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </DarkModeProvaider>
  </StrictMode>,
);
