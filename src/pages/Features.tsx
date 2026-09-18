import About from '../components/About'
import Carousel from '../components/Carousel'
import Cta from '../components/Cta'
import Divider from '../components/Divider'
import Reveal from '../components/Reveal'
import Showcase from '../components/Showcase'
import TagRow from '../components/TagRow'
import './Features.css'

const ADVENTURE_IMAGES = [
  { src: '/assets/images/SunkenBattlefield.png', alt: 'A sunken battlefield', title: 'Sunken Battlefield' },
  { src: '/assets/images/KelpForest.jpg', alt: 'A kelp forest', title: 'Kelp Forest' },
  { src: '/assets/images/SpiritRuins.png', alt: 'Ancient spirit ruins', title: 'Ancient Ruins' },
  { src: '/assets/images/DeepGraveyard.png', alt: 'The sunken graveyard', title: 'The Sunken Graveyard' },
  { src: '/assets/images/SunriseShipwreck.png', alt: 'A shipwreck at sunrise', title: 'Shipwreck at Sea' },
  { src: '/assets/images/GhostBrazier.png', alt: 'A ghostly brazier', title: 'A Mysterious Tower' },
  { src: '/assets/images/CoralReef.jpg', alt: 'A coral reef', title: 'Coral Reef'},
]

export default function Features() {
  return (
    <>
      <section className="features-hero">
        <div className="features-hero__inner">
          <p className="features-hero__eyebrow">The Gameplay</p>
          <h1 className="features-hero__title">What does being a Captain look like?</h1>
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
        topCaption="A whole world"
        bottomCaption="waiting to be discovered"
        topTilt="left"
        bottomTilt="right"
      />

<About
        heading="Embark on your maiden voyage"
        leftImage="/assets/icons/Scroll Flat White 256.png"
        leftAlt="Scroll icon"
        leftShift="bottom"
        rightImage="/assets/icons/Barrel Flat White 256.png"
        rightAlt="Barrel icon"
        rightShift="top"
      >
        <Reveal as="p" className="about__text">
          Voyages play an integral role to your adventure. They're the key to earning gold
          and leveling up your ship. Your main source of voyages will be purchasing them from
          the outpost, after which you can embark on a voyage from your ship's menu. 
          There are three types of voyages to choose from, each with their own unique challenges 
          and rewards.
        </Reveal>

        <Reveal delay={100}>
          <TagRow
            variant="feature"
            footnote="and more!"
            tags={[
              { label: 'Combat', detail: 'Hunt down and sink enemy ships', accent: '#c1443a' },
              { label: 'Escort', detail: 'Protect a vessel through hostile waters', accent: '#3d7bc4' },
              { label: 'Recovery', detail: 'Salvage cargo before it goes missing' },
            ]}
          />
        </Reveal>

        <Reveal as="p" className="about__text">
          Each voyage is a little different from the last, but you won't 
          have access to every voyage from the start. Level up your ship and you'll 
          unlock new, harder voyages that bring better rewards!
        </Reveal>

      </About>

      <Divider />

      <About
        heading="Explore an Uncharted Ocean"
        leftImage="/assets/icons/Compass Flat White 256.png"
        leftAlt="Compass icon"
        leftShift="top"
        rightImage="/assets/icons/Map Flat White 256.png"
        rightAlt="Map icon"
        rightShift="bottom"
      >
        <Reveal as="p" className="about__text">
          As you sail the ocean and embark on your voyages, you'll encounter a variety of islands, 
          outposts, and seaposts. Each of these locations has its own unique look and feel, 
          and you'll need to explore them to find the best resources and supplies for your ship.
        </Reveal>

        <Reveal as="p" className="about__text" delay={100}>
        But exploring these places is just half the battle. A master captain must be a master 
        navigator, and your ship's basic charting equipment isn't up to scratch. If you want 
        to be able to chart points of interest that aren't just islands, like a resource rich
        coral reef, you'll need to purchase 
        better equipment from a cartographer.
        </Reveal>

        <Reveal as="p" className="about__text" delay={200}>
          But your charts and maps won't do you any good if you're caught in a storm. Storms are just
          one of the many hazards you'll encounter on the high seas, and they can be deadly if you're 
          not prepared. Or perhaps you'll end up in a fog bank, where you can't see a thing and your 
          ship is at the mercy of whatever's lurking in the mist.
        </Reveal>
      </About>

      <Divider />

      <About
        heading="Upgrade Your Ship"
        leftImage="/assets/icons/Flag White  256.png"
        leftAlt="Flag icon"
        rightImage="/assets/icons/Chest Flat White 256.png"
        rightAlt="Chest icon"
        rightShift="top"
      >
        <Reveal as="p" className="about__text">
          Every voyage you complete and every enemy you defeat earns you gold and fame. Fame alone 
          will level up your ship's base stats over time, and gold is what you'll need to 
          purchase new voyages and cosmetics. But if you want to really upgrade your ship,
          you'll need those resources to craft perks, powerful abilities that will turn the tide in battle.
          Gathering enough resources to craft perks is no easy task, but the rewards are well worth it.
        </Reveal>

        <Reveal as="p" className="about__text" delay={100}>
        Every perk is split into one of two types: passive perks, which grant a permanent bonus to 
        your ship while equipped, and active perks, which grant a powerful ability that you can use 
        for a limited time, before they need to recharge. As you level up your ship, you'll unlock 
        more perk slots to stack them together and build a ship that fights the way you want it to.
        </Reveal>

        <Reveal as="p" className="about__text" delay={200}>
        Not to spoil the fun, but here are a few of the perks you'll be able to craft and equip 
        to your ship. There are many more to discover, and you'll need to experiment with different 
        combinations to find the ones that work best for you.
        </Reveal>

        <Reveal delay={200}>
          <TagRow
            variant="marquee"
            tags={[
              { label: 'Triple Gun', detail: 'While active, each cannonshot fires three rounds for the cost of one', kind: 'active' },
              { label: 'Shockwave', detail: 'Creates a shockwave when activated that damages and knocks back nearby enemies', kind: 'active' },
              { label: 'Wind Burst', detail: 'When activated, harnesses the power of the wind to boost your ship\'s speed', kind: 'active' },
              { label: 'Leeching Rounds', detail: 'Every cannonball drains health from enemies on hit, but deals less damage', kind: 'passive' },
              { label: 'Durable Repairs', detail: 'Grants armour to your ship every time you repair it, but repairs are twice as expensive', kind: 'passive' },
              { label: 'Volatile Rounds', detail: 'Every cannonshot has a chance to be replaced with a flameshot, chainshot, or explosive shot', kind: 'passive' },
            ]}
          />
        </Reveal>
      </About>      

      <Showcase
        image="/assets/images/CompassWreckFight.png"
        alt="Tiny Captain exploring an island"
        topCaption="Dangers lurk"
        bottomCaption="out on the waves"
        topTilt="left"
        bottomTilt="right"
        imagePosition="center 20%"
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
          Planks are used to repair your ship, and every hit you take costs you planks. They're the only 
          thing between your ship
          and the bottom of the ocean, so keep your hold stocked or you'll quickly sink to the depths!
        </Reveal> 

        <Reveal as="p" className="about__text" delay={100}>
          Cannonballs on the other hand, are used to attack your enemies. Not every cannonball is the same. Different cannonballs have different properties,
          and some are rarer than others. 
          Load up depending on what's in front of you, then make them regret being there.
        </Reveal>

        <Reveal delay={200}>
          <TagRow
            tags={[
              { label: 'Regular Shot', detail: 'A sturdy ball of iron ready to wound your enemy' },
              { label: 'Chainshot', detail: 'Tangles rigging and slows a target', accent: '#3d7bc4' },
              { label: 'Flameshot', detail: 'Sets the hull ablaze, dealing damage over time', accent: '#d97b2e' },
              { label: 'Explosive Shot', detail: 'Massive damage, leaves them burning', accent: '#c1443a' },
            ]}
          />
        </Reveal>
    

      </About>

      <Divider />

      <About
        heading="Know your enemies"
        leftImage="/assets/icons/Explosion Flat White 256.png"
        leftAlt="Explosion icon"
        leftShift="top"
        rightImage="/assets/icons/Skull Flat White 256.png"
        rightAlt="Skull icon"
        rightShift="bottom"
      >
        <Reveal as="p" className="about__text">
          Knowing who you're up against is important too. While your average rogue merchant
          might not give you much trouble, Ghost crews can teleport clean through your broadside,
          pirates fight dirty with mixed ammo and deployable explosives, and the Navy can
          patch their own hull mid-fight. Run into a captain's ship and you're facing something
          worse, an elite commander wielding a powerful special ability of their own against you!
        </Reveal>


        <div className="features-carousel-gap">
          <Carousel images={ADVENTURE_IMAGES} />
        </div>

        </About>   

      <Showcase
        image="/assets/images/CaptainCombat.png"
        alt="Tiny Captain in combat"
        topCaption="Sink rival crews"
        bottomCaption="and establish your reputation"
        topTilt="left"
        bottomTilt="right"
        imagePosition="center 30%"
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

      <Divider />

      <About
        heading="Customise Your Captain"
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
            variant="chips"
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

      <Showcase
        image="/assets/images/GhostCombat.png"
        alt="Tiny Captain in combat"
        topCaption="Your crew is waiting"
        bottomCaption="for their legendary captain"
        topTilt="left"
        bottomTilt="right"
        imagePosition="center 20%"
      />      

      <Cta />
    </>
  )
}
