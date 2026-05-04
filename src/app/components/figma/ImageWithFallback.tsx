import React, { useState, useRef, useEffect } from 'react'

const ERROR_IMG_SRC =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Fallback for browsers without IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        },
        { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const { src, alt, style, className, ...rest } = props

  if (didError) {
    return (
        <div
            ref={containerRef}
            className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
            style={style}
        >
          <div className="flex items-center justify-center w-full h-full">
            <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
          </div>
        </div>
    )
  }

  return (
      <div ref={containerRef} className={`relative ${className ?? ''}`} style={style}>
        {!loaded && (
            <div className="absolute inset-0 bg-[#1A1A1A]/5" />
        )}

        {inView && (
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover transition-opacity duration-1000 ease-in ${loaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setLoaded(true)}
                onError={() => setDidError(true)}
                {...rest}
            />
        )}
      </div>
  )
}
