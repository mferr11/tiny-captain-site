import type { CSSProperties, ReactNode } from 'react'
import './TagRow.css'

type Tag = {
  label: string
  detail?: string
  accent?: string
  kind?: 'active' | 'passive'
}

type TagRowVariant = 'feature' | 'list' | 'chips' | 'marquee'

type TagRowProps = {
  tags: Tag[]
  variant?: TagRowVariant
  footnote?: string
}

export default function TagRow({ tags, variant = 'list', footnote }: TagRowProps) {
  let list: ReactNode

  if (variant === 'feature') {
    list = (
      <ul className="tag-row tag-row--feature">
        {tags.map((tag) => (
          <li
            className="tag-feature"
            key={tag.label}
            style={tag.accent ? ({ '--tag-accent': tag.accent } as CSSProperties) : undefined}
          >
            <span className="tag-feature__label">{tag.label}</span>
            {tag.detail && <span className="tag-feature__detail">{tag.detail}</span>}
          </li>
        ))}
      </ul>
    )
  } else if (variant === 'chips') {
    list = (
      <ul className="tag-row tag-row--chips">
        {tags.map((tag) => (
          <li className="tag-chip" key={tag.label}>
            <span className="tag-chip__dot" aria-hidden="true" />
            <span className="tag-chip__label">{tag.label}</span>
          </li>
        ))}
      </ul>
    )
  } else if (variant === 'marquee') {
    const looped = [...tags, ...tags]
    list = (
      <div className="tag-marquee">
        <div
          className="tag-marquee__track"
          style={{ '--tag-marquee-count': tags.length } as CSSProperties}
        >
          {looped.map((tag, index) => (
            <div className="tag-marquee__card" key={`${tag.label}-${index}`}>
              {tag.kind && (
                <span className={`tag-marquee__kind tag-marquee__kind--${tag.kind}`}>
                  {tag.kind}
                </span>
              )}
              <span className="tag-marquee__label">{tag.label}</span>
              {tag.detail && <span className="tag-marquee__detail">{tag.detail}</span>}
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    list = (
      <ul className="tag-row tag-row--list">
        {tags.map((tag) => (
          <li
            className="tag-row__item"
            key={tag.label}
            style={tag.accent ? ({ '--tag-accent': tag.accent } as CSSProperties) : undefined}
          >
            <span className="tag-row__label">{tag.label}</span>
            {tag.detail && <span className="tag-row__detail">{tag.detail}</span>}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      {list}
      {footnote && <p className="tag-row__footnote">{footnote}</p>}
    </>
  )
}
