import { useEffect } from 'react'
import pageMeta from '../pageMeta.json'

type PagePath = keyof typeof pageMeta.pages

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

// Keeps the document head in sync with the current route. The build also bakes
// the same values into each page's HTML (scripts/postbuild.mjs) for crawlers and
// link previews that don't run JavaScript.
export default function usePageMeta(pathname: string) {
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/'
    const isKnownPage = path in pageMeta.pages
    const { title, description } = isKnownPage
      ? pageMeta.pages[path as PagePath]
      : pageMeta.notFound
    const url = `${pageMeta.siteUrl}${path === '/' ? '/' : path}`

    document.title = title
    setMetaContent('meta[name="description"]', description)
    setMetaContent('meta[property="og:title"]', title)
    setMetaContent('meta[property="og:description"]', description)
    setMetaContent('meta[property="og:url"]', url)
    setMetaContent('meta[name="twitter:title"]', title)
    setMetaContent('meta[name="twitter:description"]', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
  }, [pathname])
}
