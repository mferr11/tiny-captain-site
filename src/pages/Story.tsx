import About from '../components/About'
import Cta from '../components/Cta'
import Showcase from '../components/Showcase'
import './Story.css'

export default function Story() {
  return (
    <>
      <section className="story-hero">
        <div className="story-hero__inner">
          <p className="story-hero__eyebrow">The Story</p>
          <h1 className="story-hero__title">Some Legends Are Best Left Buried</h1>
          <p className="story-hero__text">
            The Shipwreck Graveyard wasn't always the fog choked cursed battleground it is today.
            In the past, it was the final resting place for many ships that sailed the seas, home 
            to spectral sailors who still had a purpose to fulfill. There was an understanding 
            between the living and the dead, a mutual respect that allowed both to coexist in peace.
            But now, it is a place of mystery and danger, where the spirits of the past still linger, 
            unsure of why they're still fighting...
          </p>
        </div>
      </section>

      <Showcase
        image="/assets/images/DeepGraveyard.png"
        alt="Ancient ruins glowing in the deep"
        topCaption="An ancient curse wreaks havoc"
        bottomCaption="On the ocean and beyond"
        topTilt="left"
        bottomTilt="right"
      />

      <About
        heading="The lost treasure of captain marrow"
        leftImage="/assets/icons/Chest Flat White 256.png"
        leftAlt="Chest icon"
      >
        <p className="about__text">
          A century ago a pirate captain named Marrow vanished into legend, 
          taking his fortune and his crew down with him. No wreck was ever found and no grave ever marked,
          only a story passed from port to port of a treasure still waiting at the bottom of the world. 
          Three relics are said to hold the key to it. An heirloom carried by his first mate's bloodline, 
          an artifact locked away in a Navy vault, and something left behind on the wreck itself, 
          guarded by hands that never let go.
        </p>
      </About>

      <About
        heading="An Ancient Curse is unleashed"
        rightImage="/assets/icons/Fire Flat White 256.png"
        rightAlt="Fire icon"
      >
        <p className="about__text">
          The one rule every sailor understood without ever needing to say it aloud was simple. 
          Don't disturb the dead. The Navy didn't know that rule, or didn't care. Chasing a 
          rich vein of ore, their drilling rigs bore straight into a century old wreck, unleashing
          something ancient and restless out onto the world. That Navy fleet never left the graveyard,
          but something else did.
        </p>
      </About>

      <About
        heading="The Spirit's Vengeance"
        leftImage="/assets/icons/Skull Flat White 256.png"
        leftAlt="Skull icon"
      >
        <p className="about__text">
          Marrow's crew rise not to guard their gold, but to finish a 
          fight they never got to have. Ghost ships begin drifting past the Graveyard's old boundaries, 
          a rising tide of hauntings that bleeds out into the world. Sailors speak of
          spectral sails on the horizon, and sightings of ghostly fog and ancient stone towers rising 
          from the depths. Somewhere beneath it all, Marrow's own crew is still out there,
          closer than anyone sailing these waters would like to believe.
        </p>
      </About>      

      <Showcase
        image="/assets/images/SpiritRuins.png"
        alt="Ancient ruins glowing in the deep"
        topCaption="Ancient ruins are"
        bottomCaption="Waiting to be uncovered"
        topTilt="right"
        bottomTilt="left"
      />

      <Cta />
    </>
  )
}
