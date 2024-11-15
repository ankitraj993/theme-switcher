import { createContext, useState } from "react";

export const ThemeSwitcherContext = createContext('light');


export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeSwitcherContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeSwitcherContext.Provider>
    )
}