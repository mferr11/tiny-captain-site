import { NavLink } from 'react-router-dom'
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
            <NavLink
              to="/story"
              className={({ isActive }) =>
                isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
              }
            >
              Story
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
              }
            >
              Features
            </NavLink>
          </nav>
        </div>
        <a
          className="site-header__wishlist"
          href="https://store.steampowered.com/app/5156160/Tiny_Captain/"
          target="_blank"
          rel="noreferrer"
        >
          Wishlist
        </a>
      </div>
    </header>
  )
}
