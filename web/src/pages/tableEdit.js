import React, { Component } from 'react'

class TableEdit extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div>
        <h1>Edit Table</h1>
        <p>Table: {this.props.match.params.table}</p>
      </div>
    )
  }
}

export default TableEdit
