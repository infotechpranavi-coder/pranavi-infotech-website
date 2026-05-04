'use client'

import { useEffect, useState } from 'react'

interface TypedTextProps {
  phrases: string[]
  className?: string
}

export function TypedText({ phrases, className = '' }: TypedTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return

    const currentPhrase = phrases[phraseIndex]

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(currentPhrase)
      return
    }

    const typingSpeed = isDeleting ? 36 : 62
    const pauseTime = isDeleting ? 180 : 1400

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && displayedText === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        return
      }

      setDisplayedText(
        isDeleting
          ? currentPhrase.slice(0, displayedText.length - 1)
          : currentPhrase.slice(0, displayedText.length + 1),
      )
    }, displayedText === currentPhrase && !isDeleting ? pauseTime : typingSpeed)

    return () => window.clearTimeout(timeout)
  }, [displayedText, isDeleting, phraseIndex, phrases])

  return (
    <span className={className}>
      {displayedText}
      <span
        aria-hidden
        className="ml-1 inline-block h-[1em] w-px translate-y-0.5 bg-current align-middle animate-caretBlink"
      />
    </span>
  )
}
