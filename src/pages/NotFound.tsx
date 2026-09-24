import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ICONS } from '../assets'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__inner">
        <span
          className="not-found__icon"
          style={{ '--icon-src': `url("${ICONS.compass}")` } as CSSProperties}
          aria-hidden="true"
        />
        <h1 className="not-found__title">Lost at Sea</h1>
        <p className="not-found__text">
          The page you're looking for has sunk to the bottom of the ocean, or it never existed in
          the first place.
        </p>
        <Link to="/" className="btn-gold">
          Return to port
        </Link>
      </div>
    </section>
  )
}
