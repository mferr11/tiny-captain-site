import './Cta.css'

export default function Cta() {
  return (
    <section className="cta">
      <img className="cta__image" src="/assets/images/LowHealthCombat.png" alt="" />
      <div className="cta__overlay" />
      <div className="cta__inner">
        <h2 className="cta__heading">Set Sail Today</h2>
        <p className="cta__text">
          Wishlist Tiny Captain now and be the first to know when you can take the helm of your
          own tiny ship.
        </p>
        <a
          className="cta__button"
          href="https://store.steampowered.com/app/5156160/Tiny_Captain/"
          target="_blank"
          rel="noreferrer"
        >
          Wishlist on Steam
        </a>
      </div>
    </section>
  )
}
