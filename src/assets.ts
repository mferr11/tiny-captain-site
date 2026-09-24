// Every image, icon, and video the site uses lives in src/assets and is imported
// through here, so Vite fingerprints the files for cache-busting and a missing
// file fails loudly instead of rendering a broken image.

import heroMp4 from './assets/videos/hero.mp4'
import heroMobileMp4 from './assets/videos/hero-720.mp4'
import heroPoster from './assets/images/hero-poster.webp'

const imageUrls = import.meta.glob<string>('./assets/images/*.{avif,webp}', {
  eager: true,
  import: 'default',
})
const iconUrls = import.meta.glob<string>('./assets/icons/*.png', {
  eager: true,
  import: 'default',
})

// Every screenshot is exported at 1920x1080, plus a 960px-wide copy for small
// screens, each as AVIF (served to browsers that support it) and WebP (fallback).
export const SCREENSHOT_WIDTH = 1920
export const SCREENSHOT_HEIGHT = 1080

type ScreenshotFormat = {
  src: string
  small: string
  srcSet: string
}

export type Screenshot = {
  avif: ScreenshotFormat
  webp: ScreenshotFormat
}

function screenshotFormat(name: string, extension: 'avif' | 'webp'): ScreenshotFormat {
  const src = imageUrls[`./assets/images/${name}.${extension}`]
  const small = imageUrls[`./assets/images/${name}-960.${extension}`]
  if (!src || !small) throw new Error(`Missing screenshot: ${name}.${extension}`)
  return { src, small, srcSet: `${small} 960w, ${src} 1920w` }
}

function screenshot(name: string): Screenshot {
  return { avif: screenshotFormat(name, 'avif'), webp: screenshotFormat(name, 'webp') }
}

function icon(name: string): string {
  const url = iconUrls[`./assets/icons/${name}.png`]
  if (!url) throw new Error(`Missing icon: ${name}`)
  return url
}

export const SCREENSHOTS = {
  combat: screenshot('combat'),
  compassWreckFight: screenshot('compass-wreck-fight'),
  coralReef: screenshot('coral-reef'),
  deepGraveyard: screenshot('deep-graveyard'),
  ghostBrazier: screenshot('ghost-brazier'),
  ghostShipEnemy: screenshot('ghost-ship-enemy'),
  kelpForest: screenshot('kelp-forest'),
  lowHealthCombat: screenshot('low-health-combat'),
  navyShipEnemy: screenshot('navy-ship-enemy'),
  pirateShipEnemy: screenshot('pirate-ship-enemy'),
  rogueMerchantsEnemy: screenshot('rogue-merchants-enemy'),
  spiritRuins: screenshot('spirit-ruins'),
  sunkenBattlefield: screenshot('sunken-battlefield'),
  sunriseShipwreck: screenshot('sunrise-shipwreck'),
}

export const ICONS = {
  barrel: icon('barrel'),
  chest: icon('chest'),
  compass: icon('compass'),
  explosion: icon('explosion'),
  fire: icon('fire'),
  flag: icon('flag'),
  map: icon('map'),
  paintbrush: icon('paintbrush'),
  palmTree: icon('palm-tree'),
  pvp: icon('pvp'),
  scroll: icon('scroll'),
  skull: icon('skull'),
  storm: icon('storm'),
  tower: icon('tower'),
  yen: icon('yen'),
}

export const HERO_VIDEO = {
  mp4: heroMp4,
  mobileMp4: heroMobileMp4,
  poster: heroPoster,
}
