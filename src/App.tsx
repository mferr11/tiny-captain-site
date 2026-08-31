import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      <Header />
      <main key={pathname} className="page-transition">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
