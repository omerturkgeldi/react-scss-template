import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { setDarkMode, setLanguage } from '../../stores/site';
import { useDispatch, useSelector } from "react-redux"


const Navbar = () => {
    const dispatch = useDispatch()
    const { dark, language } = useSelector(state => state.site)
    const languages = ['tr', 'en']

    const handleLanguage = lang => {
        dispatch(setLanguage(lang))
    }

    return (
        <div>
            <h2>
                <Link to="/" className='speech-bubble'>Main</Link>
            </h2>
            <h2>
                <Link to="/home">Home</Link>
            </h2>
            <h2>
                <Link to="/about">About</Link>
            </h2>

            <br /><br /><br /><br />

            <div>
                {languages.map((lang, index) => (
                    <button onClick={() => handleLanguage(lang)} className={lang == language ? 'active' : ''} key={index}>{lang}</button>
                )
                )}
            </div>
            <div>
                <label>
                    <button onClick={() => dispatch(setDarkMode())}>
                        {dark ? 'Açık temaya geç' : 'Koyu temaya geç'}
                    </button>
                </label>
            </div>
        </div>
    )
}

export default Navbar