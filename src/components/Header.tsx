import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS, STEAM_URL } from '../constants'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className={`site-header${menuOpen ? ' site-header--open' : ''}`}>
      <div className="site-header__inner">
        <div className="site-header__left">
          <NavLink to="/" className="site-header__logo">
            Tiny Captain
          </NavLink>
          <nav id="site-header-nav" className="site-header__nav">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              className="site-header__link site-header__link--wishlist"
              href={STEAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Wishlist on Steam
            </a>
          </nav>
        </div>
        <a className="site-header__wishlist" href={STEAM_URL} target="_blank" rel="noreferrer">
          Wishlist
        </a>
        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="site-header-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
        </button>
      </div>
    </header>
  )
}
