'use client'

import React from "react"

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimateProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  delay?: number
}

export function ScrollAnimate({
  children,
  className = '',
  direction = 'up',
  duration = 600,
  delay = 0,
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const animationClass = {
    up: 'animate-slideUp',
    down: 'animate-slideDown',
    left: 'animate-slideLeft',
    right: 'animate-slideRight',
  }[direction]
  const initialClass = isVisible ? animationClass : 'opacity-0'

  return (
    <div
      ref={ref}
      className={`${initialClass} ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  )
}
