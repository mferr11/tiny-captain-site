import { NavLink } from 'react-router-dom'
import { NAV_LINKS, STEAM_URL } from '../constants'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <span className="site-footer__logo">Tiny Captain</span>
          <nav className="site-footer__nav">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className="site-footer__link">
                {link.label}
              </NavLink>
            ))}
            <a className="site-footer__link" href={STEAM_URL} target="_blank" rel="noreferrer">
              Wishlist on Steam
            </a>
          </nav>
        </div>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Mitchell Ferreira. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
