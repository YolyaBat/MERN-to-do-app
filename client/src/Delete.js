import React, { Component } from 'react'
import './App.css'

class Delete extends Component {
    constructor(props) {
        super(props)
        this.state = {
          input: ''
        }
    }
    render() {
        const { deleteData } = this.props
        return (
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ input: e.target.value })}
            placeholder="number of a plan to delete"
          />
          <button onClick={ deleteData.bind(this, this.state.input) }>
            DELETE
          </button>
        </div>
        )
    }
}

export default Delete