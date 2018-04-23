import React, { Component } from 'react'

class Edit extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div>
        <h1>Add</h1>
        <p>Table: {this.props.match.params.table}</p>
      </div>
    )
  }
}

export default Edit
