import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BlogProvider } from './context/BlogContext';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
