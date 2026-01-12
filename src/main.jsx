import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  normalizeRootFontByDPR,
  attachDPRResizeListener,
} from './utils/normalizeDPR.js';

normalizeRootFontByDPR();
attachDPRResizeListener();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
