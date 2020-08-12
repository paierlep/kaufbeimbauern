import React from 'react'
import { BrowserRouter as Router,
         Route } from 'react-router-dom'

import Main from './components/Main.js'

import './App.css'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/"
                       component={Main}
                />
            </Router>
        )
    }
}
