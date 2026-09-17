import type { CSSProperties, ReactNode } from 'react'
import './About.css'

type IconShift = 'top' | 'bottom'
type IconSide = 'left' | 'right'

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

function iconClassName(side: IconSide, shift?: IconShift) {
  const classes = ['about__icon', `about__icon--${side}`]
  if (shift) classes.push(`about__icon--${shift}`)
  return classes.join(' ')
}

function sideForShift(shift: IconShift, leftShift?: IconShift, rightShift?: IconShift): IconSide | undefined {
  if (leftShift === shift) return 'left'
  if (rightShift === shift) return 'right'
  return undefined
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
  const topSide = sideForShift('top', leftShift, rightShift)
  const bottomSide = sideForShift('bottom', leftShift, rightShift)
  const sectionClasses = ['about']
  if (topSide) sectionClasses.push(`about--top-${topSide}`)
  if (bottomSide) sectionClasses.push(`about--bottom-${bottomSide}`)

  return (
    <section className={sectionClasses.join(' ')}>
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
