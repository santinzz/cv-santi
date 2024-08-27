import { useEffect } from "preact/hooks"

type Theme = 'light' | 'dark'

export const ThemeToggler = ({ children }: { children: any }) => {
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as Theme
    }

    if (typeof window === 'undefined') {
      return 'light';
    } 

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
      return 'light';
  })()

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  
    window.localStorage.setItem('theme', theme);
  }, [])

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

  }

  return (
    <button className='top-0 right-0 p-2 rounded-md border fixed border-black m-2 dark:border-white' onClick={handleToggleClick}>
      {children}
    </button>
  )
}