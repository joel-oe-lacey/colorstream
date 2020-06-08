import React, { Component } from 'react';
import './ColorForm.scss';

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
            <form className='colorForm'>
                <h1>Please Enter A Color</h1>
                <input
                    type='text'
                    placeholder='color'
                    value={this.state.title}
                    name='color'
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}