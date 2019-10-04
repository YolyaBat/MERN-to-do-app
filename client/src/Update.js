import React, { Component } from 'react'

class Update extends Component {
    state = {
        idToUpdate: '',
        updateToApply: ''
    }
    render() {
        const { updateData } = this.props
        return (
            <div style={{ padding: '10px' }}>
                <input
                    type="text"
                    style={{ width: '200px' }}
                    onChange={(e) => this.setState({ idToUpdate: e.target.value })}
                    placeholder="number of a plan to update"
                /><br />
                <input
                    type="text"
                    style={{ width: '200px' }}
                    onChange={(e) => this.setState({ updateToApply: e.target.value })}
                    placeholder="new updated plan"
                />
                <button
                    onClick={ updateData.bind(this, [this.state.idToUpdate, this.state.updateToApply] )}
                >
                UPDATE
                </button>
            </div>
        )
    }
}

export default Update