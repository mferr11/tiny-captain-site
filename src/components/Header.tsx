import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS, STEAM_URL } from '../constants'
import ExternalLink from './ExternalLink'
import './Header.css'

// Matches the breakpoint in Header.css where the nav collapses into the menu.
const MOBILE_MENU_QUERY = '(max-width: 768px)'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      toggleRef.current?.focus()
    }

    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }

    // The menu only exists below the breakpoint, so close it if the window grows
    // past it rather than leaving the page scroll-locked behind a hidden menu.
    const mobileQuery = window.matchMedia(MOBILE_MENU_QUERY)
    function handleBreakpointChange() {
      if (!mobileQuery.matches) setMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    mobileQuery.addEventListener('change', handleBreakpointChange)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
      mobileQuery.removeEventListener('change', handleBreakpointChange)
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className={`site-header${menuOpen ? ' site-header--open' : ''}`}>
      <div className="site-header__inner">
        <div className="site-header__left">
          <NavLink to="/" className="site-header__logo">
            Tiny Captain
          </NavLink>
          <nav id="site-header-nav" className="site-header__nav" aria-label="Main">
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
            <ExternalLink
              className="site-header__link site-header__link--wishlist"
              href={STEAM_URL}
            >
              Wishlist on Steam
            </ExternalLink>
          </nav>
        </div>
        <ExternalLink className="site-header__wishlist" href={STEAM_URL}>
          Wishlist
        </ExternalLink>
        <button
          ref={toggleRef}
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
