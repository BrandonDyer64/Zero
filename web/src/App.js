import React, { Component } from 'react'
import './style/core.css'

import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'

import Navbar from './components/navbar'

var config = require('./config.json')
require('./style/themes/' + config.theme + '.css')

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
