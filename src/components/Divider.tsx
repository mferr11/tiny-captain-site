import type { CSSProperties } from 'react'
import './Divider.css'

type DividerProps = {
  icon?: string
  alt?: string
}

export default function Divider({
  icon = '/assets/icons/Skull Flat White 256.png',
  alt = 'Skull icon',
}: DividerProps) {
  return (
    <div className="divider">
      <span className="divider__line divider__line--left" aria-hidden="true" />
      <span
        className="divider__icon"
        style={{ '--icon-src': `url("${icon}")` } as CSSProperties}
        role="img"
        aria-label={alt}
      />
      <span className="divider__line divider__line--right" aria-hidden="true" />
    </div>
  )
}
