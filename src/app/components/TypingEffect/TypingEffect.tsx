'use client'

import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '@/app/blocks/Hero/hero.module.scss'

interface TypingEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseBetweenPhrases?: number
  color?: string
}

export default function TypingEffect({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBetweenPhrases = 2000,
  color = ''
}: TypingEffectProps) {
  const cx = classNames.bind(styles)
  const [displayedText, setDisplayedText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex]

      if (isDeleting) {
        // Удаление символов
        setDisplayedText(currentPhrase.substring(0, currentCharIndex - 1))
        setCurrentCharIndex(currentCharIndex - 1)

        if (currentCharIndex === 0) {
          setIsDeleting(false)
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
        }
      } else {
        // Добавление символов
        setDisplayedText(currentPhrase.substring(0, currentCharIndex + 1))
        setCurrentCharIndex(currentCharIndex + 1)

        if (currentCharIndex === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseBetweenPhrases)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [currentCharIndex, currentPhraseIndex, isDeleting, phrases, deletingSpeed, typingSpeed, pauseBetweenPhrases])

  return (
    <>
      <span className={cx('typing-effect')} style={{ color }}>{displayedText}</span>
      <span className={cx('cursor')} style={{ color }}>|</span>
    </>
  )
}