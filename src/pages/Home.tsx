import './Home.css'

export default function Home() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        src="/assets/videos/HeroShot.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero__overlay" />
      <div className="hero__inner">
        <p className="hero__eyebrow">A World of Hidden Secrets</p>
        <h1 className="hero__title">
          Tiny
          <br />
          Captain
        </h1>
        <p className="hero__byline">A game by Mitchell Ferreira</p>
        <a
          className="hero__cta"
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
