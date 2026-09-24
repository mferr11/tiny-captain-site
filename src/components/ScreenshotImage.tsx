import type { CSSProperties } from 'react'
import { SCREENSHOT_HEIGHT, SCREENSHOT_WIDTH, type Screenshot } from '../assets'

type ScreenshotImageProps = {
  image: Screenshot
  alt: string
  // How wide the image renders, so the browser can pick the 960px or 1920px copy.
  sizes: string
  className?: string
  style?: CSSProperties
  loading?: 'eager' | 'lazy'
}

// Serves AVIF to browsers that support it and WebP to the rest. The <picture>
// uses display: contents (index.css), so the <img> lays out as if unwrapped.
export default function ScreenshotImage({
  image,
  alt,
  sizes,
  className,
  style,
  loading = 'lazy',
}: ScreenshotImageProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={image.avif.srcSet} sizes={sizes} />
      <img
        className={className}
        src={image.webp.src}
        srcSet={image.webp.srcSet}
        sizes={sizes}
        width={SCREENSHOT_WIDTH}
        height={SCREENSHOT_HEIGHT}
        loading={loading}
        decoding="async"
        alt={alt}
        style={style}
      />
    </picture>
  )
}
