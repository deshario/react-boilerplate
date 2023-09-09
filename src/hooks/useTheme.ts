import { useEffect, useState } from 'react'

const darkMedia = '(prefers-color-scheme: dark)'

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia(darkMedia).matches)

  const onThemeChanged = (mediaQuery: MediaQueryListEvent) => {
    setIsDarkTheme(mediaQuery.matches)
  }

  useEffect(() => {
    const media = window.matchMedia(darkMedia)
    media.addEventListener('change', onThemeChanged)

    return () => {
      media.removeEventListener('change', onThemeChanged)
    }
  }, [])

  const theme = isDarkTheme ? 'dark' : 'light'

  return theme
}

export default useTheme
