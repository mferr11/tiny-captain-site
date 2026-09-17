import type { CSSProperties, ReactNode } from 'react'
import './About.css'

type IconShift = 'top' | 'bottom'

type AboutProps = {
  heading: string
  leftImage?: string
  leftAlt?: string
  leftShift?: IconShift
  rightImage?: string
  rightAlt?: string
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

export default function About({
  heading,
  leftImage,
  leftAlt = '',
  leftShift,
  rightImage,
  rightAlt = '',
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
          role="img"
          aria-label={leftAlt}
        />
      )}
      <div className="about__copy">{children}</div>
      {rightImage && (
        <span
          className={iconClassName('right', rightShift)}
          style={iconStyle(rightImage)}
          role="img"
          aria-label={rightAlt}
        />
      )}
      {cta && <div className="about__cta">{cta}</div>}
    </section>
  )
}
