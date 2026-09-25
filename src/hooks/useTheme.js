import { useState, useEffect } from 'react'

/**
 * Manages light/dark theme.
 * Persists to localStorage and applies [data-theme] to <html>.
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return { theme, toggleTheme }
}
