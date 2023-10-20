import React, { useState } from 'react'
import './styles/index.css'

const Moto = () => {
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme)
    }

    return (
        <div className={theme ? 'dark' : 'light'}>
            <p>Moto</p>
            <button onClick={handleTheme}>Theme {theme ? 'Normal' : "Dark"}</button>
        </div>
    )
}

export default Moto