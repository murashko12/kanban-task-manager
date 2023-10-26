import { useEffect, useState } from 'react'

const useDarkMode = () => {
    const [theme,setTheme] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? 'light' : 'light'

    useEffect(() => {
        const root:HTMLElement = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme',theme)
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}

export default useDarkMode
