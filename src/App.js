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
import Player from './pages/Player'
import Clan from './pages/Clan'
import Signup from './pages/Account/Signup'
import Login from './pages/Account/Login'
import Admin from './pages/admin/Index'
import PageNotFound from './pages/404'

const customTheme = deepmerge(theme, {
    fonts: {
        "normal": "Roboto light, sans-serif",
        "mono": "Roboto light, sans-serif"
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

    /* On protected */
    if (authenticated) {
        console.log("authenticated")
        
    }

    return (
        <ThemeProvider colorMode="night" theme={customTheme}>
            <Router>
                <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
                <Routes>
                    <Route path="/"
                        element={<Home />} />
                    <Route path="/player/:id"
                        element={<Player />} />
                    <Route path="/clan/:id"
                        element={<Clan />} />
                    <Route path="/signup"
                        element={<Signup onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
                    <Route path="/login"
                        element={<Login onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
                    <Route path="*"
                        element={<PageNotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
