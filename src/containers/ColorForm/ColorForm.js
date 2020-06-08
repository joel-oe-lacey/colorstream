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

    submitColor = e => {
        e.preventDefault();
        const { selectColor } = this.props;
        selectColor(this.state.color);
        this.resetInputs();
    }

    resetInputs = () => {
        this.setState({color: ''})
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
                <button onClick={this.submitColor}>Submit</button>
            </form>
        )
    }
}