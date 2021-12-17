import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ThemeProvider, theme } from '@primer/react'
import deepmerge from 'deepmerge'

// Styles
import './styles/App.css'
import "@fontsource/roboto"

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Admin from './pages/admin/Index'

const customTheme = deepmerge(theme, {
    fonts: {
        "normal": "Roboto light",
        "mono": "Roboto light"
    }
})

const App = () => {
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setAuthenticated(true)
        }
    }, [])

    const onAuthenticated = (auth, token) => {
        setAuthenticated(auth)
        if (auth) {
            localStorage.setItem("token", token)
        }
        else {
            localStorage.removeItem("token")
        }
    }

    if (authenticated) {
        /* On protected */
    }

    return (
        <ThemeProvider colorMode="night" theme={customTheme}>
            <Router>
                <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
                <Routes>
                    <Route path="/"
                        element={<Home onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
