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
            The Shipwreck Graveyard wasn't always a cursed place. In the past, it was
            the final resting place for many ships that sailed the seas, home to spectral sailors
            who still had a purpose to fulfill. There was an understanding between the 
            living and the dead, a mutual respect that allowed both to coexist in peace.
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
          Two centuries ago, a pirate captain named Marrow vanished into legend, 
          taking her fortune and her crew down with her. No wreck was ever found and no grave ever marked,
          only the story, passed from port to port, of a treasure still waiting at the bottom of the world. 
          Three relics are said to hold the key to it: an heirloom carried by her first mate's bloodline, 
          an artifact locked away in a Navy vault, and something recovered from the wreck itself, 
          guarded by hands that never let go.
        </p>
      </About>

      <About
        heading="An Ancient Curse is unleashed"
        rightImage="/assets/icons/Fire Flat White 256.png"
        rightAlt="Fire icon"
      >
        <p className="about__text">
          The one rule every sailor understood, without ever needing to say it aloud, was simple: 
          leave the deepest wrecks of the Graveyard alone. The Navy didn't know that rule, 
          or didn't care. Chasing a rich vein of ore, their drilling rig bores straight into the one 
          wreck the ocean had quietly agreed to forget. What it disturbs isn't rubble. 
          It's Marrow's ship, and the crew who never stopped waiting for someone to finish what they 
          started. The fog grows thicker. The dead stop resting. And something that had been still for 
          two hundred years starts moving again.
        </p>
      </About>

      <About
        heading="The Spirit's Vengeance"
        leftImage="/assets/icons/Skull Flat White 256.png"
        leftAlt="Skull icon"
      >
        <p className="about__text">
          Marrow's crew doesn't see the drilling as an accident, they see it as an insult two 
          centuries in the making. They rise not to guard their gold, but to finish a 
          fight they never got to have, and their fury doesn't stay contained to the 
          wreck that woke them. Ghost ships begin drifting past the Graveyard's old boundaries, 
          restless and unclaimed, a rising tide of hauntings that spreads with every disturbance to the Graveyard.
          Somewhere beneath it all, Marrow's own crew is still out there, patient, furious, and closer 
          than anyone sailing these waters would like to believe.
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
