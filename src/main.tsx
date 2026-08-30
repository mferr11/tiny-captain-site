import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Story from './pages/Story'
import Features from './pages/Features'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="features" element={<Features />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
