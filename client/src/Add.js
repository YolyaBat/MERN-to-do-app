import React, { Component } from 'react'
import './App.css'

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.renderInput = this.renderInput.bind(this)
        // this.passInput = this.passInput.bind(this)
    }
    renderInput(event) {
        this.setState({
            input: event.target.value
        })
    }
    // passInput(value) {
    //     console.log(value)
    //     this.props.postData.bind(this, value)
    //     this.setState({
    //         input: ''
    //     })
    //     console.log(this.state.input)
    // }
    render() {
        const { postData } = this.props
        return (
            <div style={{ padding: '10px' }}>
                <input
                    type="text"
                    onChange={this.renderInput}
                    placeholder="create a plan"
                    style={{ width: '200px' }}
                    value={this.state.input}
                    autoFocus='autoFocus'
                />
                <button onClick={postData.bind(this, this.state.input)}>
                    ADD
                </button>
        </div>
        )
    }
}

export default Add