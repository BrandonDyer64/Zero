import React, { Component } from 'react'
import logo from './logo.svg'
import './style/core.css'

import Navbar from './components/navbar'

var config = require('./config.json')
require('./style/themes/' + config.theme + '.css')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" className="btn btn-primary">
          Test Bootstrap Button
        </button>
      </div>
    )
  }
}

export default App
