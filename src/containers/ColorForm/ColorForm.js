import React, { Component } from 'react';

export default class ColorForm extends Component {
    constructor() {
        super()
        this.state = { color: '' }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form>
                <h3>Please enter your starting color</h3>
                <input
                    type='text'
                    placeholder='color'
                    value={this.state.title}
                    name='color'
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}