// Runs after `vite build`. The site is a single-page app, so every route ships
// the same index.html. This writes a copy per route with that route's title,
// description, and share tags baked in, so crawlers and link previews (which
// don't run JavaScript) see the right metadata. GitHub Pages serves /story from
// story.html, so these also load with a 200 rather than falling through to 404.html.
import { readFileSync, writeFileSync } from 'node:fs'

const pageMeta = JSON.parse(readFileSync(new URL('../src/pageMeta.json', import.meta.url), 'utf8'))
const template = readFileSync('dist/index.html', 'utf8')

function escapeAttribute(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

// Replaces the attribute `valueAttr` on the single tag matching `tagPattern`,
// failing the build if index.html no longer contains that tag.
function setTagAttribute(html, tagPattern, valueAttr, value) {
  const tagRegex = new RegExp(`<${tagPattern}[^>]*>`)
  const tag = html.match(tagRegex)?.[0]
  if (!tag) throw new Error(`postbuild: index.html is missing <${tagPattern}>`)
  const updated = tag.replace(
    new RegExp(`${valueAttr}="[^"]*"`),
    `${valueAttr}="${escapeAttribute(value)}"`,
  )
  return html.replace(tag, updated)
}

function renderPage({ title, description }, url, { noindex = false } = {}) {
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(title)}</title>`)
  html = setTagAttribute(html, 'meta\\s+name="description"', 'content', description)
  html = setTagAttribute(html, 'meta\\s+property="og:title"', 'content', title)
  html = setTagAttribute(html, 'meta\\s+property="og:description"', 'content', description)
  html = setTagAttribute(html, 'meta\\s+property="og:url"', 'content', url)
  html = setTagAttribute(html, 'meta\\s+name="twitter:title"', 'content', title)
  html = setTagAttribute(html, 'meta\\s+name="twitter:description"', 'content', description)
  html = setTagAttribute(html, 'link\\s+rel="canonical"', 'href', url)
  if (noindex)
    html = html.replace('</title>', '</title>\n    <meta name="robots" content="noindex" />')
  return html
}

for (const [path, meta] of Object.entries(pageMeta.pages)) {
  const file = path === '/' ? 'dist/index.html' : `dist${path}.html`
  const url = `${pageMeta.siteUrl}${path}`
  writeFileSync(file, renderPage(meta, url))
  console.log(`postbuild: wrote ${file}`)
}

// GitHub Pages serves 404.html for any unknown path. The app's catch-all route
// renders the "Lost at Sea" page there.
writeFileSync(
  'dist/404.html',
  renderPage(pageMeta.notFound, `${pageMeta.siteUrl}/`, { noindex: true }),
)
console.log('postbuild: wrote dist/404.html')
