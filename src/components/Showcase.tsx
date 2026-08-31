import './Showcase.css'

type CaptionTilt = 'left' | 'right' | 'none'

type ShowcaseProps = {
  image: string
  alt: string
  topCaption: string
  bottomCaption: string
  topTilt?: CaptionTilt
  bottomTilt?: CaptionTilt
  imagePosition?: string
}

function tiltClass(tilt: CaptionTilt) {
  return tilt === 'none' ? '' : ` showcase__caption--tilt-${tilt}`
}

export default function Showcase({
  image,
  alt,
  topCaption,
  bottomCaption,
  topTilt = 'none',
  bottomTilt = 'none',
  imagePosition = 'center',
}: ShowcaseProps) {
  return (
    <section className="showcase">
      <div className="showcase__media">
        <img
          className="showcase__image"
          src={image}
          alt={alt}
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <p className={`showcase__caption showcase__caption--top${tiltClass(topTilt)}`}>
        {topCaption}
      </p>
      <p className={`showcase__caption showcase__caption--bottom${tiltClass(bottomTilt)}`}>
        {bottomCaption}
      </p>
    </section>
  )
}
