import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react'
import type { Screenshot } from '../assets'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import ScreenshotImage from './ScreenshotImage'
import './Carousel.css'

type CarouselImage = {
  image: Screenshot
  alt: string
  title?: string
}

type CarouselProps = {
  images: CarouselImage[]
  label: string
  autoPlayMs?: number
}

// How far a touch has to travel sideways before it counts as a swipe.
const SWIPE_THRESHOLD_PX = 40

export default function Carousel({ images, label, autoPlayMs = 4500 }: CarouselProps) {
  const length = images.length
  const canLoop = length > 1

  // position indexes into `slides`: 0 is a clone of the last image, 1..length
  // are the real images, and length + 1 is a clone of the first image. Looping past
  // either end animates onto the matching clone, then snaps back to the real slide
  // with the transition disabled so the loop looks continuous.
  const slides = canLoop ? [images[length - 1], ...images, images[0]] : images
  const [position, setPosition] = useState(canLoop ? 1 : 0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(() => new Set())
  const prefersReducedMotion = usePrefersReducedMotion()
  const touchStartX = useRef<number | null>(null)

  const realIndex = canLoop ? (position - 1 + length) % length : position
  const isAutoPlaying = canLoop && !isHovered && !hasFocus && !prefersReducedMotion

  useEffect(() => {
    if (!isAutoPlaying) return
    const id = setTimeout(next, autoPlayMs)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, isAutoPlaying, autoPlayMs])

  useEffect(() => {
    if (transitionEnabled) return
    const id = requestAnimationFrame(() => setTransitionEnabled(true))
    return () => cancelAnimationFrame(id)
  }, [transitionEnabled])

  // Only slides next to the current one are loaded; once loaded they stay loaded.
  useEffect(() => {
    setLoadedSlides((current) => {
      const nearby = [position - 1, position, position + 1].filter((index) => !current.has(index))
      if (nearby.length === 0) return current
      return new Set([...current, ...nearby])
    })
  }, [position])

  // Clamping to the clones means clicking faster than the slide animation can't
  // run past them onto an empty slot.
  function next() {
    if (canLoop) setPosition((current) => Math.min(current + 1, length + 1))
  }

  function prev() {
    if (canLoop) setPosition((current) => Math.max(current - 1, 0))
  }

  function goToDot(dotIndex: number) {
    setPosition(canLoop ? dotIndex + 1 : dotIndex)
  }

  function handleTransitionEnd() {
    if (position === length + 1) {
      setTransitionEnabled(false)
      setPosition(1)
    } else if (position === 0) {
      setTransitionEnabled(false)
      setPosition(length)
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      prev()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      next()
    }
  }

  function handleTouchStart(event: TouchEvent) {
    touchStartX.current = event.touches[0].clientX
  }

  function handleTouchEnd(event: TouchEvent) {
    if (touchStartX.current === null) return
    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (distance > SWIPE_THRESHOLD_PX) prev()
    else if (distance < -SWIPE_THRESHOLD_PX) next()
  }

  return (
    <section
      className="carousel"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocus(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHasFocus(false)
      }}
      onKeyDown={handleKeyDown}
    >
      <div
        className="carousel__viewport"
        aria-live={isAutoPlaying ? 'off' : 'polite'}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`carousel__track${transitionEnabled ? '' : ' carousel__track--no-transition'}`}
          style={{ transform: `translateX(-${position * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, slideIndex) => {
            const isCurrent = slideIndex === position
            const slideNumber = (canLoop ? (slideIndex - 1 + length) % length : slideIndex) + 1
            const shouldLoad = loadedSlides.has(slideIndex) || Math.abs(slideIndex - position) <= 1
            return (
              <div
                key={`${slide.image.webp.src}-${slideIndex}`}
                className="carousel__slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideNumber} of ${length}${slide.title ? `: ${slide.title}` : ''}`}
                aria-hidden={!isCurrent}
              >
                {shouldLoad && (
                  <ScreenshotImage
                    className="carousel__slide-image"
                    image={slide.image}
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    alt={slide.alt}
                  />
                )}
                {slide.title && <p className="carousel__caption">{slide.title}</p>}
              </div>
            )
          })}
        </div>
      </div>

      {canLoop && (
        <>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--next"
            onClick={next}
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="carousel__dots">
            {images.map((slide, dotIndex) => (
              <button
                key={slide.image.webp.src}
                type="button"
                className={`carousel__dot${dotIndex === realIndex ? ' carousel__dot--active' : ''}`}
                onClick={() => goToDot(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}${slide.title ? `: ${slide.title}` : ''}`}
                aria-current={dotIndex === realIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
