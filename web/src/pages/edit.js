import React, { Component } from 'react'

class Edit extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div>
        <h1>Edit</h1>
        <p>
          Table: {this.props.match.params.table}
          <br />ID: {this.props.match.params.id}
        </p>
      </div>
    )
  }
}

export default Edit
