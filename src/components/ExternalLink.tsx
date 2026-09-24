import type { ReactNode } from 'react'

type ExternalLinkProps = {
  href: string
  className?: string
  children: ReactNode
}

// Opens in a new tab, and tells screen reader users that it will.
export default function ExternalLink({ href, className, children }: ExternalLinkProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  )
}
