import './TagRow.css'

type Tag = {
  label: string
  detail?: string
}

type TagRowProps = {
  tags: Tag[]
}

export default function TagRow({ tags }: TagRowProps) {
  return (
    <ul className="tag-row">
      {tags.map((tag) => (
        <li className="tag-row__item" key={tag.label}>
          <span className="tag-row__label">{tag.label}</span>
          {tag.detail && <span className="tag-row__detail">{tag.detail}</span>}
        </li>
      ))}
    </ul>
  )
}
