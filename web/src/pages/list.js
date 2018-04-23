import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <div>
        <h1>List</h1>
        <p>Table: {this.props.match.params.table}</p>
      </div>
    )
  }
}

export default List
