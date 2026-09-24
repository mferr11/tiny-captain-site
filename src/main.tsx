import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import '@fontsource/josefin-sans/400.css'
import '@fontsource/josefin-sans/700.css'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Story from './pages/Story'
import Gameplay from './pages/Gameplay'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="gameplay" element={<Gameplay />} />
          {/* The Gameplay page used to be called Features; keep old links working. */}
          <Route path="features" element={<Navigate to="/gameplay" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
