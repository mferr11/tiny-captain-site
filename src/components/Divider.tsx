import type { CSSProperties } from 'react'
import { ICONS } from '../assets'
import './Divider.css'

type DividerProps = {
  icon?: string
}

export default function Divider({ icon = ICONS.skull }: DividerProps) {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider__line divider__line--left" />
      <span className="divider__icon" style={{ '--icon-src': `url("${icon}")` } as CSSProperties} />
      <span className="divider__line divider__line--right" />
    </div>
  )
}
