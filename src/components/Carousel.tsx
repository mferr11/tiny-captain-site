import { useEffect, useState } from 'react'
import './Carousel.css'

type CarouselImage = {
  src: string
  alt: string
  title?: string
}

type CarouselProps = {
  images: CarouselImage[]
  autoPlayMs?: number
}

export default function Carousel({ images, autoPlayMs = 4500 }: CarouselProps) {
  const length = images.length
  const canLoop = length > 1

  // position is 1-indexed into `slides`: 0 is a clone of the last image, 1..length
  // are the real images, and length + 1 is a clone of the first image. Looping past
  // either end animates onto the matching clone, then snaps back to the real slide
  // with the transition disabled so the loop looks continuous.
  const slides = canLoop ? [images[length - 1], ...images, images[0]] : images
  const [realIndex, setRealIndex] = useState(0)
  const [position, setPosition] = useState(canLoop ? 1 : 0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || !canLoop) return
    const id = setTimeout(next, autoPlayMs)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [realIndex, isPaused, autoPlayMs, canLoop])

  useEffect(() => {
    if (transitionEnabled) return
    const id = requestAnimationFrame(() => setTransitionEnabled(true))
    return () => cancelAnimationFrame(id)
  }, [transitionEnabled])

  function next() {
    setPosition((current) => current + 1)
    setRealIndex((current) => (current + 1) % length)
  }

  function prev() {
    setPosition((current) => current - 1)
    setRealIndex((current) => (current - 1 + length) % length)
  }

  function goToDot(dotIndex: number) {
    setRealIndex(dotIndex)
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

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel__viewport">
        <div
          className={`carousel__track${transitionEnabled ? '' : ' carousel__track--no-transition'}`}
          style={{ transform: `translateX(-${position * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((image, slideIndex) => (
            <div key={`${image.src}-${slideIndex}`} className="carousel__slide">
              <img className="carousel__slide-image" src={image.src} alt={image.alt} />
              {image.title && <p className="carousel__caption">{image.title}</p>}
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--prev"
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--next"
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="carousel__dots">
            {images.map((image, dotIndex) => (
              <button
                key={image.src}
                type="button"
                className={`carousel__dot${dotIndex === realIndex ? ' carousel__dot--active' : ''}`}
                onClick={() => goToDot(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
