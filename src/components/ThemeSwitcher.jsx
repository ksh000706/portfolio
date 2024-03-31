import React, { useState } from 'react'
import useDarkMode from '../Hooks/useDarkMode'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

function ThemeSwitcher() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(
        colorTheme === 'dark' ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    };

  return (
    <>
        <DarkModeSwitch
            className='pt-2'
            sunColor='white'
            moonColor='#1c2484'
            style={{ marginBottom: "2rem" }}
            checked={darkMode}
            onChange={toggleDarkMode}
            size={30}
        />
    </>
  );
}

export default ThemeSwitcher;
