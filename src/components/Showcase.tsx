import { useLayoutEffect, useRef, type ReactNode } from 'react'
import type { Screenshot } from '../assets'
import ScreenshotImage from './ScreenshotImage'
import './Showcase.css'

type CaptionTilt = 'left' | 'right' | 'none'

type ShowcaseProps = {
  image: Screenshot
  alt: string
  topCaption: string
  bottomCaption: string
  topTilt?: CaptionTilt
  bottomTilt?: CaptionTilt
  imagePosition?: string
  // Load the image straight away instead of lazily. Use for a showcase that is
  // on screen when the page first loads.
  priority?: boolean
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
    const container = caption?.parentElement
    if (!caption || !text || !container) return

    function fit() {
      if (!caption || !text) return
      caption.style.width = ''
      const style = getComputedStyle(caption)
      const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
      caption.style.width = `${Math.ceil(text.offsetWidth + padding) + 1}px`
    }

    fit()
    document.fonts?.ready.then(fit)
    // Watch the showcase rather than the caption, since fit() resizes the caption.
    const observer = new ResizeObserver(fit)
    observer.observe(container)
    return () => observer.disconnect()
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
  priority = false,
}: ShowcaseProps) {
  return (
    <section className="showcase">
      <div className="showcase__media">
        <ScreenshotImage
          className="showcase__image"
          image={image}
          sizes="100vw"
          loading={priority ? 'eager' : 'lazy'}
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
