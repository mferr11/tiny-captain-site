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
  children: ReactNode
}

function iconStyle(image: string): CSSProperties {
  return { '--icon-src': `url("${image}")` } as CSSProperties
}

function iconClassName(shift?: IconShift) {
  return shift ? `about__icon about__icon--${shift}` : 'about__icon'
}

export default function About({
  heading,
  leftImage,
  leftAlt = '',
  leftShift,
  rightImage,
  rightAlt = '',
  rightShift,
  children,
}: AboutProps) {
  return (
    <section className="about">
      {leftImage && (
        <span
          className={iconClassName(leftShift)}
          style={iconStyle(leftImage)}
          role="img"
          aria-label={leftAlt}
        />
      )}
      <div className="about__body">
        <h2 className="about__heading">{heading}</h2>
        {children}
      </div>
      {rightImage && (
        <span
          className={iconClassName(rightShift)}
          style={iconStyle(rightImage)}
          role="img"
          aria-label={rightAlt}
        />
      )}
    </section>
  )
}
