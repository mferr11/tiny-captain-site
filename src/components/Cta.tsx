import { SCREENSHOTS } from '../assets'
import { STEAM_URL } from '../constants'
import ExternalLink from './ExternalLink'
import ScreenshotImage from './ScreenshotImage'
import './Cta.css'

export default function Cta() {
  return (
    <section className="cta">
      <ScreenshotImage
        className="cta__image"
        image={SCREENSHOTS.lowHealthCombat}
        sizes="100vw"
        alt=""
      />
      <div className="cta__overlay" />
      <div className="cta__inner">
        <h2 className="cta__heading">Set Sail Today</h2>
        <p className="cta__text">
          Wishlist Tiny Captain now and be the first to know when you can take the helm of your own
          tiny ship.
        </p>
        <ExternalLink className="btn-gold btn-gold--large" href={STEAM_URL}>
          Wishlist on Steam
        </ExternalLink>
      </div>
    </section>
  )
}
