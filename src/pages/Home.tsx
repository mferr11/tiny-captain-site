import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Carousel from '../components/Carousel'
import Cta from '../components/Cta'
import Showcase from '../components/Showcase'
import { STEAM_URL } from '../constants'
import './Home.css'

const ADVENTURE_IMAGES = [
  { src: '/assets/images/SunkenBattlefield.png', alt: 'A sunken battlefield', title: 'Sunken Battlefield' },
  { src: '/assets/images/KelpForest.jpg', alt: 'A kelp forest', title: 'Kelp Forest' },
  { src: '/assets/images/SpiritRuins.png', alt: 'Ancient spirit ruins', title: 'Spirit Ruins' },
  { src: '/assets/images/DeepGraveyard.png', alt: 'A graveyard of sunken ships', title: 'Deep Graveyard' },
  { src: '/assets/images/SunriseShipwreck.png', alt: 'A shipwreck at sunrise', title: 'Shipwreck at Sunrise' },
  { src: '/assets/images/GhostBrazier.png', alt: 'A ghostly brazier', title: 'Ghost Brazier' },
  { src: '/assets/images/CoralReef.jpg', alt: 'A coral reef', title: 'Coral Reef'},
]

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
          <a className="btn-gold hero__cta" href={STEAM_URL} target="_blank" rel="noreferrer">
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
        cta={
          <Link to="/story" className="btn-gold">
            Learn more about the story
          </Link>
        }
      >
        <p className="about__text">
          Become a Tiny Captain and command a tiny ship in a vast, cursed ocean. 
          <span className="about__emphasis"> Sail, fight, and loot</span> your
          way across a variety of regions, from sun-drenched isles to cursed graveyards. Trade cannon fire
          with rival pirates, dodge the disciplined broadsides of the Navy, and brave the fog-choked wrecks
          where ghost ships still sail long after their crews went
          down. Every voyage brings loot, every upgrade makes you deadlier, and every choice leaves a
          mark on the world around you.
        </p>

        <p className="about__text">
          But not every wreck is just wreckage. Legend speaks of 
          <span className="about__emphasis"> Captain Marrow</span>, and of three relics tied 
          to whatever fate befell him. Rumor has it the first lies aboard a sunken wreck, 
          protected by something that never
          stopped guarding it. Chase the legend far enough, and you might uncover
          <span className="about__emphasis"> his long lost treasure</span>, along with what what really
          happened to Marrow, and what's waiting to rise if you're not careful...
        </p>
      </About>

      <Showcase
        image="/assets/images/KelpForest.jpg"
        alt="Tiny Captain sailing through a kelp forest"
        topCaption="Secrets lurk in every corner"
        bottomCaption="waiting to be discovered"
        topTilt="left"
        bottomTilt="right"
      />

      <About
        heading="Explore a World of Adventure"
        leftImage="/assets/icons/Yen Flat White 256.png"
        leftAlt="Coin icon"
        leftShift="bottom"
        rightImage="/assets/icons/Barrel Flat White 256.png"
        rightAlt="Barrel icon"
        rightShift="top"
      >
        <p className="about__text">
          Your journey starts in the <span className="about__emphasis">Sunshard Isles</span>, an idylic 
          archipelago inhabited by rogue merchants. As you begin to explore, you'll encounter beautiful coral 
          reefs and verdant kelp forests, but also treacherous whirlpools and sunken wrecks.
          And be ready to batten down the hatches as you weather dangerous storms and navigate 
          through thick fog banks, as even the ocean itself can be a formidable adversary.
        </p>

        <p className="about__text">
          Outside the Sunshard Isles, you'll find the <span className="about__emphasis">Pirate Freewaters</span>, 
          the <span className="about__emphasis">Navy's Iron Dominion</span>, and the eerie 
          <span className="about__emphasis"> Sunken Graveyard</span>, each with its own dangers and secrets. 
          Outside these three regions, danger lurks in the unknown and uncharted waters, where 
          something bigger than any ship may be waiting to strike...
        </p>
      </About>

      <Carousel images={ADVENTURE_IMAGES} />

      <Showcase
        image="/assets/images/Combat.png"
        alt="Tiny Captain in combat"
        topCaption="Sink rival crews"
        bottomCaption="and establish your reputation"
        topTilt="right"
        bottomTilt="left"
        imagePosition="center 15%"
      />

      <About
        heading="Level Up Your Ship"
        leftImage="/assets/icons/PVP 2 Flat White 256.png"
        leftAlt="PVP icon"
        leftShift="top"
        rightImage="/assets/icons/Chest Flat White 256.png"
        rightAlt="Treasure Chest icon"
        rightShift="bottom"
        cta={
          <Link to="/features" className="btn-gold">
            Explore gameplay features
          </Link>
        }
      >
        <p className="about__text">
          Complete voyages, loot sunken wrecks, and defeat rival crews to earn
          <span className="about__emphasis"> gold and fame.</span> Use gold to purchase
          supplies and cosmetics, allowing you to customise your ship's appearance to your liking.
          And when you earn enough fame you'll level up your ship,
          boosting your health, speed, cargo capacity
          and firepower!
        </p>

        <p className="about__text">
          Collect resources and <span className="about__emphasis">unlock crafting recipes for perks</span>, powerful abilities that can
          turn the tide of battle in your favour. Overwhelm your foes with the mighty triple gun,
          sustain yourself during battle with lifestealing leeching rounds, or outmaneuver your foes
          with the speed of the wind burst! Combine perks to create a ship that suits your playstyle,
          and <span className="about__emphasis">become the most feared pirate on the seas!</span>
        </p>
      </About>

      <Showcase
        image="/assets/images/SunriseShipwreck.png"
        alt="Tiny Captain sunrise screenshot"
        topCaption="Your crew is waiting"
        bottomCaption="for their legendary captain"
        topTilt="right"
        bottomTilt="left"
        imagePosition="center 15%"
      />

      <Cta />
    </>
  )
}
