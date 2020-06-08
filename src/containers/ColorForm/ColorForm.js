import React, { Component } from 'react';
import './ColorForm.scss';
const tinycolor = require("tinycolor2");

export default class ColorForm extends Component {
    constructor() {
        super()
        this.state = { color: '' }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitColor = e => {
        e.preventDefault();
        const { selectColor } = this.props;
        selectColor(this.state.color);
        this.resetInputs(e);
    }

    resetInputs = e => {
        this.setState({color: ''});
        document.getElementById("colorForm").reset()
    }

    displaySelection = e => {
        const colorEntered = `#${this.state.color}`
        const colorCheck = tinycolor(colorEntered).isValid();
        if (colorCheck) {
            const greyscale = tinycolor(colorEntered).greyscale().toString();
            e.target.style.background = colorEntered;
            e.target.style.color = greyscale;
        }
    }

    resetButtonBackground = e => {
        e.target.style.background = '#E0E5EC';
        e.target.style.color = '#a3b1c699';   
    }

    render() {
        return (
            <form id='colorForm'>
                <h1 className='color-change-5x'>Color Stream</h1>
                <input
                    type='text'
                    placeholder='Please Enter A Color'
                    value={this.state.title}
                    name='color'
                    onChange={this.handleChange}
                />
                <div className='outer-button'>
                    <button 
                        onClick={this.submitColor} 
                        onMouseOver={this.displaySelection}
                        onMouseOut={this.resetButtonBackground}
                    >Submit</button>
                </div>
            </form>
        )
    }
}