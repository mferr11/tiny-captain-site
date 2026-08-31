import { useEffect, useState } from 'react'
import './Carousel.css'

type CarouselImage = {
  src: string
  alt: string
}

type CarouselProps = {
  images: CarouselImage[]
  autoPlayMs?: number
}

export default function Carousel({ images, autoPlayMs = 4500 }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || images.length <= 1) return
    const id = setTimeout(() => {
      setIndex((current) => (current + 1) % images.length)
    }, autoPlayMs)
    return () => clearTimeout(id)
  }, [index, isPaused, autoPlayMs, images.length])

  function goTo(next: number) {
    setIndex((next + images.length) % images.length)
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel__viewport">
        <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((image) => (
            <img key={image.src} className="carousel__slide" src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--next"
            onClick={() => goTo(index + 1)}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="carousel__dots">
            {images.map((image, dotIndex) => (
              <button
                key={image.src}
                type="button"
                className={`carousel__dot${dotIndex === index ? ' carousel__dot--active' : ''}`}
                onClick={() => goTo(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
