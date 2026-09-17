import About from '../components/About'
import Cta from '../components/Cta'
import Reveal from '../components/Reveal'
import Showcase from '../components/Showcase'
import TagRow from '../components/TagRow'
import './Features.css'

export default function Features() {
  return (
    <>
      <section className="features-hero">
        <div className="features-hero__inner">
          <p className="features-hero__eyebrow">The Gameplay</p>
          <h1 className="features-hero__title">What does being a Tiny Captain look like?</h1>
          <p className="features-hero__text">
            Take a look at the gameplay of Tiny Captain in closer detail. The voyages you'll
            undertake, the obtacles you'll encounter, and the tools and resources you'll use
            to level up your ship.
          </p>
        </div>
      </section>

      <Showcase
        image="/assets/images/CoralReef.jpg"
        alt="Tiny Captain exploring an island"
        topCaption="There's a whole world"
        bottomCaption="waiting to be discovered"
        topTilt="left"
        bottomTilt="right"
      />

      <About
        heading="Explore a Living Ocean"
        leftImage="/assets/icons/Compass Flat White 256.png"
        leftAlt="Compass icon"
        leftShift="top"
        rightImage="/assets/icons/Storm Flat White 256.png"
        rightAlt="Storm icon"
        rightShift="bottom"
      >
        <Reveal as="p" className="about__text">
          Throughout your adventure you'll sail through a range of different regions, each with
          its own personality and its own mechanics to learn.
        </Reveal>

        <Reveal as="p" className="about__text" delay={100}>
          Getting around takes more than a map, though. Your starter equipment can only chart
          islands, outposts, and seaposts, so anything else worth remembering is on you to
          find again.
        </Reveal>

        <Reveal as="p" className="about__text" delay={200}>
          Spotted some strange ruins, or a coral reef you'd like to come back to for resource
          harvesting? You'll need to pick up better equipment from a cartographer first.
        </Reveal>

        <Reveal as="p" className="about__text" delay={300}>
          But getting lost isn't your only concern, the sea itself has plans for you. Sail into
          a fog bank thick enough to hide a fleet, or get caught in a storm that batters your
          hull and drags you off course. Not everything you run into wants a fight though:
          scavenge a drifting shipwreck or help a lost merchant limp home to the nearest outpost,
          and they'll make it worth your while.
        </Reveal>
      </About>

      <Showcase
        image="/assets/images/IslandExploration.png"
        alt="Tiny Captain exploring an island"
        topCaption="Uncharted waters"
        bottomCaption="are waiting to be sailed"
        topTilt="left"
        bottomTilt="right"
      />

      <About
        heading="Take On a Voyage"
        leftImage="/assets/icons/Scroll Flat White 256.png"
        leftAlt="Scroll icon"
        leftShift="bottom"
        rightImage="/assets/icons/Barrel Flat White 256.png"
        rightAlt="Barrel icon"
        rightShift="top"
      >
        <Reveal as="p" className="about__text">
          Voyages play an integral role to your adventure. They're the key to earning gold,
          collecting resources, and leveling up your ship. You'll purchase voyages from an outpost,
          and then select which voyage you want to undertake from your ship's menu. From there,
          the adventure begins.
        </Reveal>

        <Reveal delay={120}>
          <TagRow
            tags={[
              { label: 'Combat', detail: 'Hunt down and sink enemy ships' },
              { label: 'Escort', detail: 'Protect a vessel through hostile waters' },
              { label: 'Recovery', detail: 'Salvage cargo before it goes missing' },
            ]}
          />
        </Reveal>

        <Reveal as="p" className="about__text">
          Each voyage is a little different from the last, but you won't 
          have access to every voyage from the start. Level up your ship and complete 
          campaign missions to unlock new types of voyages!
        </Reveal>

      </About>

      <Showcase
        image="/assets/images/VoyageFire.png"
        alt="A voyage lit by fire"
        topCaption="No two voyages"
        bottomCaption="are ever the same"
        topTilt="right"
        bottomTilt="left"
      />

      <About
        heading="Master Ship-to-Ship Combat"
        leftImage="/assets/icons/Explosion Flat White 256.png"
        leftAlt="Explosion icon"
        leftShift="top"
        rightImage="/assets/icons/Skull Flat White 256.png"
        rightAlt="Skull icon"
        rightShift="bottom"
      >
        <Reveal as="p" className="about__text">
          Not every cannonball is the same. Different cannonballs have different properties,
          and some are rarer than others. 
          Load up depending on what's in front of you, then make them regret being there.
        </Reveal>

        <Reveal delay={80}>
          <TagRow
            tags={[
              { label: 'Regular Shot', detail: 'Reliable, no frills damage' },
              { label: 'Chainshot', detail: 'Tangles rigging and slows a target' },
              { label: 'Flameshot', detail: 'Sets the hull ablaze, dealing damage over time' },
              { label: 'Explosive Shot', detail: 'Massive damage, leaves them burning' },
            ]}
          />
        </Reveal>

        <Reveal as="p" className="about__text" delay={160}>
          Every hit you take costs you planks, and planks are the only thing between your ship
          and the bottom of the ocean, so keep your hold stocked or keep your distance!
        </Reveal>

        <Reveal as="p" className="about__text">
          Knowing who you're up against is important too. Ghost crews can teleport clean through your broadside,
          pirates fight dirty with mixed ammo and deployable explosives, and the Navy can
          patch their own hull mid-fight. Run into a captain's ship and you're facing something
          worse, an elite commander wielding a powerful special ability of their own against you!
        </Reveal>      

      </About>

      <Showcase
        image="/assets/images/Combat.png"
        alt="Tiny Captain in combat"
        topCaption="Sink rival crews"
        bottomCaption="and establish your reputation"
        topTilt="left"
        bottomTilt="right"
        imagePosition="center 15%"
      />

      <About
        heading="Grow Your Ship's Power"
        leftImage="/assets/icons/PVP 2 Flat White 256.png"
        leftAlt="PVP icon"
        leftShift="bottom"
        rightImage="/assets/icons/Chest Flat White 256.png"
        rightAlt="Treasure Chest icon"
        rightShift="top"
      >
        <Reveal as="p" className="about__text">
          Every voyage completed and every enemy sent to the bottom earns
          <span className="about__emphasis"> gold and fame</span>, and fame alone will
          level up your ship's base stats over time.
        </Reveal>

        <Reveal as="p" className="about__text" delay={120}>
          Gold buys voyages and cosmetics, but also the raw resources you gather out on the 
          water or salvage from voyages, and
          those resources are what you'll need to
          <span className="about__emphasis"> craft perks</span>, powerful abilities you can mix
          and match to build a ship that fights the way you want it to. Level up enough, and
          you'll unlock even more perk slots to stack them together.
        </Reveal>
      </About>

      <Showcase
        image="/assets/images/GhostBrazier.png"
        alt="A ghostly brazier"
        topCaption="Some fires"
        bottomCaption="were never meant to be lit"
        topTilt="right"
        bottomTilt="left"
      />

      <About
        heading="Follow the Campaign"
        leftImage="/assets/icons/Skull Flat White 256.png"
        leftAlt="Skull icon"
        leftShift="top"
        rightImage="/assets/icons/Scroll Flat White 256.png"
        rightAlt="Scroll icon"
        rightShift="bottom"
      >
        <Reveal as="p" className="about__text">
          Not every voyage is one you can repeat. Scattered across the world are
          <span className="about__emphasis"> campaign voyages</span>, one-shot, story-driven
          missions that push the plot of Tiny Captain forward instead of just paying out gold.
        </Reveal>

        <Reveal as="p" className="about__text" delay={120}>
          These voyages are key to making meaningfull progression throughout the game. Completing
          campaign missions will unlock new quests, new types of enemies, and even entirely new regions.
        </Reveal>
      </About>

      <Showcase
        image="/assets/images/GhostBrazier.png"
        alt="A ghostly brazier"
        topCaption="Some fires"
        bottomCaption="were never meant to be lit"
        topTilt="right"
        bottomTilt="left"
      />      

      <About
        heading="Customize Your Captain"
        leftAlt="Coin icon"
      >
        <Reveal as="p" className="about__text">
          Spend your hard-earned gold on cosmetics and make your ship instantly recognizable
          on the high seas, your colors, your sails, your flair. Mix and match pieces to build
          a look that's all your own.
        </Reveal>

        <Reveal delay={120}>
          {/* TODO: swap in the real cosmetics showcase reel once it's rendered */}
          <video
            className="features-cosmetics-video"
            src="/assets/videos/CosmeticsShowcase.mp4"
            poster="/assets/images/SunriseShipwreck.png"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </Reveal>

        <Reveal delay={80}>
          <TagRow
            tags={[
              { label: 'Hull Colour'},
              { label: 'Hull Trim Colour'},
              { label: 'Sail Colour' },
              { label: 'Sail Trim Colour'},
              { label: 'Sail Pattern'},
              { label: 'Sail Pattern Colour'},
              { label: 'Flag Colour'},
            ]}
          />
        </Reveal>

      </About>

      

      <Cta />
    </>
  )
}
