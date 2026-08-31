import { NavLink } from 'react-router-dom'
import { NAV_LINKS, STEAM_URL } from '../constants'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__left">
          <NavLink to="/" className="site-header__logo">
            Tiny Captain
          </NavLink>
          <nav className="site-header__nav">
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
          </nav>
        </div>
        <a className="site-header__wishlist" href={STEAM_URL} target="_blank" rel="noreferrer">
          Wishlist
        </a>
      </div>
    </header>
  )
}
