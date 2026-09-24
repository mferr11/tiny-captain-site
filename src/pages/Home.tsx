import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HERO_VIDEO, ICONS, SCREENSHOTS } from '../assets'
import About from '../components/About'
import Carousel from '../components/Carousel'
import Cta from '../components/Cta'
import ExternalLink from '../components/ExternalLink'
import Reveal from '../components/Reveal'
import Showcase from '../components/Showcase'
import { STEAM_URL } from '../constants'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import './Home.css'

const ADVENTURE_IMAGES = [
  {
    image: SCREENSHOTS.sunkenBattlefield,
    alt: 'A sunken battlefield',
    title: 'Sunken Battlefield',
  },
  { image: SCREENSHOTS.kelpForest, alt: 'A kelp forest', title: 'Kelp Forest' },
  { image: SCREENSHOTS.spiritRuins, alt: 'Ancient spirit ruins', title: 'Ancient Ruins' },
  { image: SCREENSHOTS.deepGraveyard, alt: 'The Sunken Graveyard', title: 'The Sunken Graveyard' },
  { image: SCREENSHOTS.sunriseShipwreck, alt: 'A shipwreck at sunrise', title: 'Shipwreck at Sea' },
  { image: SCREENSHOTS.ghostBrazier, alt: 'A ghostly brazier', title: 'A Mysterious Tower' },
  { image: SCREENSHOTS.coralReef, alt: 'A coral reef', title: 'Coral Reef' },
]

const EYEBROW_WORDS = ['Hidden Secrets', 'Untold Riches', 'Adventure and Glory']
const EYEBROW_ROTATE_MS = 3200

function EyebrowRotator() {
  const prefersReducedMotion = usePrefersReducedMotion()
  if (prefersReducedMotion) return <span>{EYEBROW_WORDS[0]}</span>
  return <AnimatedEyebrow />
}

function AnimatedEyebrow() {
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
          aria-hidden="true"
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

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  // autoPlay only applies on load, so handle the setting changing afterwards.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (prefersReducedMotion) video.pause()
    else video.play().catch(() => {})
  }, [prefersReducedMotion])

  return (
    <video
      ref={videoRef}
      className="hero__video"
      poster={HERO_VIDEO.poster}
      autoPlay={!prefersReducedMotion}
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src={HERO_VIDEO.mobileMp4} type="video/mp4" media="(max-width: 640px)" />
      <source src={HERO_VIDEO.mp4} type="video/mp4" />
    </video>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroVideo />
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
          <ExternalLink className="btn-gold hero__cta" href={STEAM_URL}>
            Wishlist on Steam
          </ExternalLink>
        </div>
      </section>
      <Showcase
        image={SCREENSHOTS.ghostBrazier}
        alt="Tiny Captain sailing past a Ghost Brazier"
        topCaption="Discover an Epic Pirate Adventure"
        bottomCaption="Out on the Waves"
        topTilt="right"
        bottomTilt="left"
      />
      <About
        heading="About the Game"
        leftImage={ICONS.compass}
        leftShift="top"
        rightImage={ICONS.scroll}
        rightShift="bottom"
        cta={
          <Link to="/story" className="btn-gold">
            Learn more about the story
          </Link>
        }
      >
        <Reveal as="p" className="about__text">
          Become a Tiny Captain and command a tiny ship in a vast, cursed ocean.
          <span className="about__emphasis"> Sail, fight, and loot</span> your way across a variety
          of regions, from sun-drenched isles to cursed graveyards. Trade cannon fire with rival
          pirates, dodge the disciplined broadsides of the Navy, and brave the fog-choked wrecks
          where ghost ships still sail long after their crews went down. Every voyage brings loot,
          every upgrade makes you deadlier, and every choice leaves a mark on the world around you.
        </Reveal>

        <Reveal as="p" className="about__text" delay={100}>
          But not every wreck is just wreckage. Legend speaks of
          <span className="about__emphasis"> Captain Marrow</span>, and of three relics tied to
          whatever fate befell him. Rumour has it the first lies aboard a sunken wreck, protected by
          an ancient foe. Chase the legend far enough, and you might uncover
          <span className="about__emphasis"> his long lost treasure</span>, along with what really
          happened to Marrow, and what's waiting to rise if you're not careful...
        </Reveal>
      </About>

      <Showcase
        image={SCREENSHOTS.kelpForest}
        alt="Tiny Captain sailing through a kelp forest"
        topCaption="Secrets lurk in every corner"
        bottomCaption="waiting to be discovered"
        topTilt="left"
        bottomTilt="right"
      />

      <About
        heading="Explore a World of Adventure"
        leftImage={ICONS.yen}
        leftShift="bottom"
        rightImage={ICONS.barrel}
        rightShift="top"
      >
        <Reveal as="p" className="about__text">
          Your journey starts in the <span className="about__emphasis">Sunshard Isles</span>, an
          idyllic archipelago inhabited by rogue merchants. As you explore you'll encounter
          beautiful coral reefs and verdant kelp forests, but also treacherous whirlpools and sunken
          ruins. And be ready to batten down the hatches as you weather dangerous storms and
          navigate through thick fog banks, as even the ocean itself can be a formidable adversary.
        </Reveal>

        <Reveal as="p" className="about__text" delay={100}>
          Outside the Sunshard Isles, you'll find the{' '}
          <span className="about__emphasis">Pirate Freewaters</span>, the{' '}
          <span className="about__emphasis">Navy's Iron Dominion</span>, and the eerie
          <span className="about__emphasis"> Sunken Graveyard</span>, each with its own dangers and
          secrets. Outside these three regions, danger lurks in the unknown and uncharted waters,
          where something bigger than any ship may be waiting to strike...
        </Reveal>
      </About>

      <Carousel images={ADVENTURE_IMAGES} label="Places to explore" />

      <Showcase
        image={SCREENSHOTS.combat}
        alt="Tiny Captain in combat"
        topCaption="Sink rival crews"
        bottomCaption="and establish your reputation"
        topTilt="right"
        bottomTilt="left"
        imagePosition="center 15%"
      />

      <About
        heading="Level Up Your Ship"
        leftImage={ICONS.pvp}
        leftShift="top"
        rightImage={ICONS.chest}
        rightShift="bottom"
        cta={
          <Link to="/gameplay" className="btn-gold">
            Explore gameplay features
          </Link>
        }
      >
        <Reveal as="p" className="about__text">
          Complete voyages, loot sunken wrecks, and defeat rival crews to earn
          <span className="about__emphasis"> gold and fame.</span> Use gold to purchase supplies and
          cosmetics, allowing you to customise your ship's appearance to your liking. And when you
          earn enough fame you'll level up your ship, boosting your health, speed, cargo capacity
          and firepower!
        </Reveal>

        <Reveal as="p" className="about__text" delay={100}>
          Collect resources and{' '}
          <span className="about__emphasis">unlock crafting recipes for perks</span>, powerful
          abilities that can turn the tide of battle in your favour. Overwhelm your foes with the
          mighty triple gun, sustain yourself during battle with lifestealing leeching rounds, or
          outmanoeuvre your foes with the speed of the wind burst! Combine perks to create a ship
          that suits your playstyle, and{' '}
          <span className="about__emphasis">become the most feared pirate on the seas!</span>
        </Reveal>
      </About>

      <Showcase
        image={SCREENSHOTS.sunriseShipwreck}
        alt="A tiny ship sailing past a shipwreck at sunrise"
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
