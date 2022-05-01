export function useDarkMode () {
  function updateTheme () {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function turnDark () {
    localStorage.theme = 'dark'
    updateTheme()
  }

  function turnLight () {
    localStorage.theme = 'light'
    updateTheme()
  }

  function turnSystemTheme () {
    localStorage.removeItem('theme')
    updateTheme()
  }

  return {
    updateTheme,
    turnDark,
    turnLight,
    turnSystemTheme
  }
}
