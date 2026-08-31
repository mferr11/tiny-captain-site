import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <span className="site-footer__logo">Tiny Captain</span>
          <nav className="site-footer__nav">
            <NavLink to="/story" className="site-footer__link">
              Story
            </NavLink>
            <NavLink to="/features" className="site-footer__link">
              Features
            </NavLink>
            <a
              className="site-footer__link"
              href="https://store.steampowered.com/app/5156160/Tiny_Captain/"
              target="_blank"
              rel="noreferrer"
            >
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
