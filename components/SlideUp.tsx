'use client' // this is a client component

import React, { useEffect, useRef, ReactNode } from 'react'
interface Props {
  offset?: string
  children?: ReactNode
}

export default function SlideUp({ children, offset = '0px' }: Props) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-slideUpCubiBezier')
          }
        })
      },
      { rootMargin: offset }
    )

    const current = ref.current

    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
      observer.disconnect()
    }
  }, [offset])

  return (
    <div ref={ref} className='relative opacity-0'>
      {children}
    </div>
  )
}