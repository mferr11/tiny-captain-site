import { useLayoutEffect, useRef, type ReactNode } from 'react'
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

// When a caption wraps, its box stays as wide as the space it had rather than
// shrinking to its longest line, leaving extra padding at the sides. CSS can't
// shrink-wrap wrapped text, so measure the text span and size the box to it.
function Caption({ className, children }: { className: string; children: ReactNode }) {
  const captionRef = useRef<HTMLParagraphElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const caption = captionRef.current
    const text = textRef.current
    if (!caption || !text) return

    function fit() {
      if (!caption || !text) return
      caption.style.width = ''
      const style = getComputedStyle(caption)
      const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
      caption.style.width = `${Math.ceil(text.offsetWidth + padding) + 1}px`
    }

    fit()
    document.fonts?.ready.then(fit)
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [children])

  return (
    <p ref={captionRef} className={className}>
      <span ref={textRef}>{children}</span>
    </p>
  )
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
      <Caption className={`showcase__caption showcase__caption--top${tiltClass(topTilt)}`}>
        {topCaption}
      </Caption>
      <Caption className={`showcase__caption showcase__caption--bottom${tiltClass(bottomTilt)}`}>
        {bottomCaption}
      </Caption>
    </section>
  )
}
