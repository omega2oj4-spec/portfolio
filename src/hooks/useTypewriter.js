import { useState, useEffect } from 'react'

/**
 * Typewriter hook — cycles through an array of words,
 * typing and deleting each one with a blinking cursor.
 *
 * @param {string[]} words   - List of phrases to cycle through
 * @param {number}   typeMs  - Delay between each character typed   (default 100ms)
 * @param {number}   deleteMs- Delay between each character deleted  (default 60ms)
 * @param {number}   pauseMs - How long to pause after fully typed   (default 1800ms)
 */
export function useTypewriter(words = [], typeMs = 100, deleteMs = 60, pauseMs = 1800) {
  const [display, setDisplay]   = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [charIdx, setCharIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused]     = useState(false)

  useEffect(() => {
    if (!words.length) return

    const current = words[wordIdx]

    // Pause at full word before deleting
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false) }, pauseMs)
      return () => clearTimeout(t)
    }

    // Pause at empty string before next word
    if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
      return
    }

    const delay = deleting ? deleteMs : typeMs
    const t = setTimeout(() => {
      setCharIdx(i => deleting ? i - 1 : i + 1)
      setDisplay(current.slice(0, deleting ? charIdx - 1 : charIdx + 1))
    }, delay)

    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words, typeMs, deleteMs, pauseMs])

  return display
}
