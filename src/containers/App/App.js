import React, { Component } from 'react';
import './App.scss';
import ColorForm from '../ColorForm/ColorForm';
import ColorCont from '../../components/ColorCont/ColorCont';
const tinycolor = require("tinycolor2");

export default class App extends Component {
  constructor() {
    super()
    this.state = { colors: ['', '', '', ''] }
  }

  selectColor = color => {
    //add normalization for a variety of color inputs
    if (color) {
      const selectedColor = '#' + color;
      const colorParse = tinycolor(selectedColor).tetrad();
      const generatedColors = colorParse.map(function (t) { return t.toHexString(); });
      this.setState({ colors: [...generatedColors]});
    }
  }

  render() {
    return (
      <section className="App">
        <ColorForm selectColor={this.selectColor}/>
        <ColorCont colors={this.state.colors}/>
      </section>
    )
  };
}

