import type { CSSProperties, ReactNode } from 'react'
import type { Screenshot } from '../assets'
import './PageHero.css'

type PageHeroProps = {
  eyebrow: string
  title: string
  image: Screenshot
  imagePosition?: string
  children: ReactNode
}

export default function PageHero({
  eyebrow,
  title,
  image,
  imagePosition = 'center',
  children,
}: PageHeroProps) {
  const style = {
    '--page-hero-image': `image-set(url("${image.avif.src}") type("image/avif"), url("${image.webp.src}") type("image/webp"))`,
    '--page-hero-image-small': `image-set(url("${image.avif.small}") type("image/avif"), url("${image.webp.small}") type("image/webp"))`,
    '--page-hero-image-webp': `url("${image.webp.src}")`,
    '--page-hero-image-small-webp': `url("${image.webp.small}")`,
    '--page-hero-position': imagePosition,
  } as CSSProperties

  return (
    <section className="page-hero" style={style}>
      <div className="page-hero__inner">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__text">{children}</p>
      </div>
    </section>
  )
}
