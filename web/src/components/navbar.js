import React from 'react'
import config from '../config.json'

class Component extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
          {config.name}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/tables">
                Tables
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/list/siteuser">
                Siteusers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/list/appuser">
                Appusers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Component
