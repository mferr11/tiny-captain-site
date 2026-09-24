import type { CSSProperties, ReactNode } from 'react'
import './About.css'

type IconShift = 'top' | 'bottom'

type AboutProps = {
  heading: string
  leftImage?: string
  leftShift?: IconShift
  rightImage?: string
  rightShift?: IconShift
  cta?: ReactNode
  children: ReactNode
}

function iconStyle(image: string): CSSProperties {
  return { '--icon-src': `url("${image}")` } as CSSProperties
}

function iconClassName(side: 'left' | 'right', shift?: IconShift) {
  const classes = ['about__icon', `about__icon--${side}`]
  if (shift) classes.push(`about__icon--${shift}`)
  return classes.join(' ')
}

// The side icons are decorative, so they're hidden from screen readers.
export default function About({
  heading,
  leftImage,
  leftShift,
  rightImage,
  rightShift,
  cta,
  children,
}: AboutProps) {
  return (
    <section className="about">
      <h2 className="about__heading">{heading}</h2>
      {leftImage && (
        <span
          className={iconClassName('left', leftShift)}
          style={iconStyle(leftImage)}
          aria-hidden="true"
        />
      )}
      <div className="about__copy">{children}</div>
      {rightImage && (
        <span
          className={iconClassName('right', rightShift)}
          style={iconStyle(rightImage)}
          aria-hidden="true"
        />
      )}
      {cta && <div className="about__cta">{cta}</div>}
    </section>
  )
}
