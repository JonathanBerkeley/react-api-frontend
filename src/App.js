import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ThemeProvider, Box, BaseStyles, Heading } from '@primer/react'

// Components
import Navbar from './components/Navbar'

import './styles/App.css'

function App() {
    return (
        <ThemeProvider colorMode="night">
            <BaseStyles>
                <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap={3}>
                    <Box p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
                        1
                    </Box>
                    <Box p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
                        2
                    </Box>
                    <Box p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
                        3
                    </Box>
                </Box>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
