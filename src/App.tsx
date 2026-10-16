import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import BanavoPage from './pages/BanavoPage'
import ChemflowPage from './pages/ChemflowPage'
import VidhilikhitPage from './pages/VidhilikhitPage'
import BinswiftPage from './pages/BinswiftPage'
import './App.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const targetId = hash.replace('#', '')
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/banavo-ai" element={<BanavoPage />} />
        <Route path="/projects/chemflow" element={<ChemflowPage />} />
        <Route path="/projects/vidhilikhit" element={<VidhilikhitPage />} />
        <Route path="/projects/binswift" element={<BinswiftPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
