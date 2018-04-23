import React, { Component } from 'react'

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Display</h1>
        <p>
          Table: {this.props.match.params.table}
          <br />ID: {this.props.match.params.id}
        </p>
      </div>
    )
  }
}

export default Display
