import { useEffect, useRef, useState } from 'react'
import About from '../components/About'
import Showcase from '../components/Showcase'
import './Home.css'

const EYEBROW_WORDS = ['Hidden Secrets', 'Untold Riches', 'Adventure and Glory']
const EYEBROW_ROTATE_MS = 3200

function EyebrowRotator() {
  const [index, setIndex] = useState(0)
  const [hasRotated, setHasRotated] = useState(false)
  const previousIndexRef = useRef(0)

  useEffect(() => {
    const id = setTimeout(() => {
      previousIndexRef.current = index
      setHasRotated(true)
      setIndex((index + 1) % EYEBROW_WORDS.length)
    }, EYEBROW_ROTATE_MS)
    return () => clearTimeout(id)
  }, [index])

  return (
    <span className="hero__eyebrow-cycle">
      {hasRotated && (
        <span
          key={`out-${previousIndexRef.current}`}
          className="hero__eyebrow-word hero__eyebrow-word--out"
        >
          {EYEBROW_WORDS[previousIndexRef.current]}
        </span>
      )}
      <span key={`in-${index}`} className="hero__eyebrow-word hero__eyebrow-word--in">
        {EYEBROW_WORDS[index]}
      </span>
    </span>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <video
          className="hero__video"
          src="/assets/videos/HeroShot2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero__overlay" />
        <div className="hero__inner">
          <p className="hero__eyebrow">
            A World of <EyebrowRotator />
          </p>
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
      <Showcase
        image="/assets/images/GhostBrazier.png"
        alt="Tiny Captain sailing past a Ghost Brazier"
        topCaption="Discover an Epic Pirate Adventure"
        bottomCaption="Out on the Waves"
        topTilt="right"
        bottomTilt="left"
      />
      <About
        heading="About the Game"
        leftImage="/assets/icons/Compass Flat White 256.png"
        leftAlt="Compass icon"
        leftShift="top"
        rightImage="/assets/icons/Scroll Flat White 256.png"
        rightAlt="Scroll icon"
        rightShift="bottom"
      >
        <p className="about__text">
          Tiny Captain drops you behind the wheel of a small ship in a big, hostile ocean — one carved into
          distinct regions, each with its own factions, dangers, and secrets. Trade cannon fire with
          <span className="about__emphasis"> rival pirates</span>, dodge the disciplined broadsides of
          <span className="about__emphasis"> the Navy</span>, and brave the fog-choked wrecks
          where <span className="about__emphasis">ghost ships</span> still sail long after their crews went
          down. Every voyage brings loot, every upgrade makes you deadlier, and every choice leaves a
          mark on the world around you.
        </p>

        <p className="about__text">
          But not every wreck is just wreckage. Legend speaks of{' '}
          <span className="about__emphasis">Captain Marrow</span>, a pirate whose name still
          curdles conversation in every port, and of{' '}
          <span className="about__emphasis">three relics</span> tied to whatever fate befell
          him. Rumor has it the first lies aboard a sunken wreck, protected by something that never
          stopped guarding it. Chase the legend far enough, and you might uncover what really
          happened to Marrow — and what's waiting to rise if you're not careful.
        </p>
      </About>

      <Showcase
        image="/assets/images/KelpForest.png"
        alt="Tiny Captain sailing through a kelp forest"
        topCaption="Discover an Epic Pirate Adventure"
        bottomCaption="Out on the Waves"
        topTilt="left"
        bottomTilt="right"
      />

      <About
        heading="Explore a World of Adventure"
        leftImage="/assets/icons/Yen Flat White 256.png"
        leftAlt="Coin icon"
        rightImage="/assets/icons/Chest Flat White 256.png"
        rightAlt="Treasure Chest icon"
      >
        <p className="about__text">
          Your journey starts in the <span className="about__emphasis">Sunshard Isles</span>, an idylic archipelago inhabited by rogue merchants. 
          Here, you'll learn the ropes of sailing, trading, and fighting, and begin to uncover the 
          secrets of the world around you. But the ocean is vast, and as you begin to explore, you'll
          encounter beautiful <span className="about__emphasis">coral reefs</span> and verdant 
          <span className="about__emphasis"> kelp forests</span>, each with its own dangers and rewards. 
          And be ready to batten down the hatches, as you weather 
          <span className="about__emphasis"> dangerous storms</span> and navigate through 
          <span className="about__emphasis"> thick fog banks</span>, as even the ocean itself 
          can be a formidable adversary.
        </p>
      </About>
    </>
  )
}
