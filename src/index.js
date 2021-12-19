import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './styles/App.css'
import './styles/index.css'

// Entry point of application
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)